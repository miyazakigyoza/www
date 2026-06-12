/**
 * Newt CMS のデータを全件ローカルに取り込むスクリプト（Newt サービス終了対応）
 *
 * - members アプリの shops / areas / products を全件取得し content/*.json に保存
 * - JSON 内の Newt アセット URL（画像）を static/cms/ にダウンロードし、
 *   URL を /cms/... のローカルパスに書き換える
 *
 * 実行: node scripts/fetch-newt.mjs（.env.local に API_URL / API_TOKEN が必要）
 */
import { createHash } from 'node:crypto'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const contentDir = path.join(root, 'content')
const assetsDir = path.join(root, 'static', 'cms') // 配信用（最大 1600px に縮小）

// .env.local を読む（dotenv 非依存）
const env = {}
for (const line of (await readFile(path.join(root, '.env.local'), 'utf8')).split('\n')) {
  const m = line.match(/^([A-Z_]+)=['"]?([^'"]*)['"]?$/)
  if (m) env[m[1]] = m[2]
}
const API = env.API_URL
const TOKEN = env.API_TOKEN
if (!API || !TOKEN) throw new Error('.env.local に API_URL / API_TOKEN がありません')

async function fetchAll(model, params = {}) {
  const items = []
  let skip = 0
  while (true) {
    const qs = new URLSearchParams({ ...params, limit: '100', skip: String(skip) })
    const res = await fetch(`${API}/members/${model}?${qs}`, {
      headers: { Authorization: `Bearer ${TOKEN}` },
    })
    if (!res.ok) throw new Error(`${model}: ${res.status} ${await res.text()}`)
    const data = await res.json()
    items.push(...data.items)
    skip += data.items.length
    if (skip >= data.total || data.items.length === 0) break
  }
  return items
}

// Newt のアセット URL（src フィールド・HTML 内の双方）を検出する
const ASSET_URL_RE = /https:\/\/(?:[\w.-]*newt\.so|miyazakigyoza\.imgix\.net|storage\.googleapis\.com\/[\w.-]*newt[\w.-]*)\/[^\s"'<>]+/g

function localNameFor(url) {
  const clean = url.split('?')[0]
  const base = decodeURIComponent(path.basename(clean)).replace(/[^\w.-]+/g, '_')
  const hash = createHash('sha1').update(clean).digest('hex').slice(0, 8)
  return `${hash}-${base}`
}

const downloads = new Map() // url -> local filename

function collectAndRewrite(value) {
  if (typeof value === 'string') {
    return value.replace(ASSET_URL_RE, (url) => {
      const name = localNameFor(url)
      downloads.set(url.split('?')[0], name)
      return `/cms/${name}`
    })
  }
  if (Array.isArray(value)) return value.map(collectAndRewrite)
  if (value && typeof value === 'object') {
    const out = {}
    for (const [k, v] of Object.entries(value)) out[k] = collectAndRewrite(v)
    return out
  }
  return value
}

await mkdir(contentDir, { recursive: true })
await mkdir(assetsDir, { recursive: true })

const models = {
  areas: await fetchAll('areas', { order: 'order' }),
  shops: await fetchAll('shops', { depth: '2', order: 'furigana' }),
  products: await fetchAll('products', { depth: '2' }),
}

for (const [name, items] of Object.entries(models)) {
  const rewritten = collectAndRewrite(items)
  await writeFile(path.join(contentDir, `${name}.json`), JSON.stringify(rewritten, null, 2))
  console.log(`content/${name}.json: ${items.length} 件`)
}

async function download(url, dest) {
  const res = await fetch(url)
  if (!res.ok) {
    console.error(`ダウンロード失敗 (${res.status}): ${url}`)
    return false
  }
  await writeFile(dest, Buffer.from(await res.arrayBuffer()))
  return true
}

let done = 0
for (const [url, name] of downloads) {
  // imgix で 1600px 以下に縮小した配信用画像を保存
  if (await download(`${url}?w=1600&fit=max&q=80`, path.join(assetsDir, name))) done++
}
console.log(`画像 ${done}/${downloads.size} 件ダウンロード（static/cms/）`)
