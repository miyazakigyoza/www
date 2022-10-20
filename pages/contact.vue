<template>
  <main class="pt-20">
    <header>
      <h1 class="text-center">
        <p class="font-enTitle text-6xl">Contact</p>
        <p class="font-serif text-xl">お問い合わせ</p>
      </h1>
    </header>

    <section class="mt-8 container mx-auto">
      <div id="form" v-once>読み込み中</div>
    </section>
  </main>
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          hid: 'hubspot',
          src: 'https://js.hsforms.net/forms/embed/v2.js',
          defer: true,
          callback: () => { this.onLoadHubspot() }
        },
        {
          id: 'hs-script-loader',
          src: `//js-na1.hs-scripts.com/${this.$config.HUBSPOT_PORTALID}.js`,
          defer: true,
          async: true,
        }
      ],
    }
  },
  methods: {
    onLoadHubspot() {
      console.log(this.$config)
      hbspt.forms.create({
        region: 'na1',
        portalId: this.$config.HUBSPOT_PORTALID,
        formId: this.$config.HUBSPOT_FORMID,
        target: '#form'
      });
    }
  },
  mounted() {
  }
}
</script>
