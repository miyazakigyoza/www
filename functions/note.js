/**
 * Cloudflare Pages Function: /note
 * note.com のマガジン記事一覧を取得するプロキシ。
 * 旧 AWS Lambda（execute-api）プロキシの置き換え。
 *
 * 例: GET /note?page=1
 * 応答は note.com の API そのまま（{ data: { section: { contents: [...] } } }）
 */
import { NOTE_MAGAZINE_ID } from '../lib/note.js'

export async function onRequestGet({ request }) {
  const page = new URL(request.url).searchParams.get('page') || '1'

  const res = await fetch(
    `https://note.com/api/v1/layout/magazine/${NOTE_MAGAZINE_ID}/section?page=${encodeURIComponent(page)}`,
    {
      headers: {
        'User-Agent': 'miyazakigyoza.jp (Cloudflare Pages Functions)',
        Accept: 'application/json',
      },
    }
  )

  if (!res.ok) {
    return new Response(JSON.stringify({ error: `note.com API error: ${res.status}` }), {
      status: 502,
      headers: { 'content-type': 'application/json' },
    })
  }

  return new Response(res.body, {
    status: 200,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      // エッジで 5 分キャッシュして note.com への負荷とレイテンシを抑える
      'cache-control': 'public, max-age=300, s-maxage=300',
    },
  })
}
