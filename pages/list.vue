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
export default {
  data: () => ({
    shops: {}
  }),
  async asyncData({$axios, $config}){
    $axios.setToken($config.TOKEN, 'Bearer')
    const shops = await $axios.$get($config.API + '/members/shops', {
      params: {
        depth: 2,
        order: 'furigana',
      }
    })
    return {
      shops,
    }
  }
}
</script>
