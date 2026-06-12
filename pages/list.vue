<template>
  <div class="pt-20">
    <table>
    <tr v-for="shop in shops.items" :key="shop._id">
      <td>{{ shop.name }}</td>
      <td>{{ shop.area.name }}</td>
      <td>{{ shop.company ? shop.company.name : '' }}</td>
      <td><a :href="`https://miyazakigyoza.jp/shop/${shop.slug}/`">https://miyazakigyoza.jp/shop/{{shop.slug}}/</a></td>
    </tr>
  </table>

  </div>
</template>

<script>
import { getShops } from '~/lib/cms'

export default {
  data: () => ({
    shops: {}
  }),
  asyncData(){
    return {
      shops: getShops({ order: 'furigana' }),
    }
  }
}
</script>
