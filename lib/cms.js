/**
 * 旧 Newt CMS のデータをローカル JSON（content/*.json）から参照するヘルパー。
 * Newt のサービス終了に伴い、scripts/fetch-newt.mjs で取り込んだデータを使用する。
 * 戻り値は旧 Newt API と同じ { items: [...] } 形式に揃えてある。
 */
import areasData from '~/content/areas.json'
import shopsData from '~/content/shops.json'
import productsData from '~/content/products.json'

function sortBy(items, order) {
  if (!order) return items
  const desc = order.startsWith('-')
  const key = desc ? order.slice(1) : order
  return [...items].sort((a, b) => {
    const va = a[key]
    const vb = b[key]
    let cmp
    if (typeof va === 'string' && typeof vb === 'string') {
      cmp = va.localeCompare(vb, 'ja')
    } else {
      cmp = (va ?? 0) < (vb ?? 0) ? -1 : (va ?? 0) > (vb ?? 0) ? 1 : 0
    }
    return desc ? -cmp : cmp
  })
}

// areas.json は order 順で保存済み
export function getAreas() {
  return { items: [...areasData], total: areasData.length }
}

export function findArea(slug) {
  return areasData.find((a) => a.slug === slug) || null
}

export function getShops({ order = null, area = null, feature = null } = {}) {
  let items = shopsData
  if (area) items = items.filter((s) => s.area && s.area._id === area)
  if (feature !== null) items = items.filter((s) => s.feature === feature)
  items = sortBy(items, order)
  return { items, total: items.length }
}

export function findShop(slug) {
  return shopsData.find((s) => s.slug === slug) || null
}

// 同じ運営会社の他店舗
export function getRelatedShops(shop) {
  if (!shop.company) return { items: [], total: 0 }
  const items = shopsData.filter(
    (s) => s._id !== shop._id && s.company && s.company._id === shop.company._id
  )
  return { items, total: items.length }
}

export function getProductsByCompany(companyId) {
  if (!companyId) return { items: [], total: 0 }
  const items = productsData.filter((p) => p.company && p.company._id === companyId)
  return { items, total: items.length }
}
