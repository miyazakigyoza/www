<template>
  <div class="grid sm:grid-cols-2 py-4">
    <div class="relative flex flex-col justify-center items-center">
      <h1>{{ spot.title }}</h1>
      <p>{{ spot.start }} ~ {{ spot.end }}</p>
      <a v-if="spot.url" :href="spot.url" target="_blank" class="absolute inset-0 w-full h-full"></a>
    </div>
    <div v-if="spot.pos" class="w-full aspect-video">
      <div ref="map" class="w-full h-full"></div>
    </div>
  </div>
</template>

<script>
import { Loader } from '@googlemaps/js-api-loader';

export default {
  props: ['spot'],
  data: () => ({
    map: null,
    google: null,
    marker: null,
  }),
  mounted() {
    if (!this.spot.pos) return;
    new Loader({
      apiKey: this.$config.GOOGLE_MAP,
      version: 'Release',
      //libraries: ["places", "drawing", "geometry", "visualization"],
      language: 'ja',
    })
    .load()
    .then((google) => {
      this.google = google;
      this.map = new google.maps.Map(this.$refs.map, {
        zoom : this.spot.zoom,
        center: this.spot.pos,
        fullscreenControl: true, // 全画面モードで地図を開くコントロールを無効
        mapTypeControl: false, // 地図タイプ（地図や航空写真など）を切り替える地図タイプのコントロールを無効
        streetViewControl: false, // ユーザーがストリートビュー パノラマの有効
        streetViewControlOptions: {
          position: google.maps.ControlPosition.RIGHT_BOTTOM
        },
        zoomControl: true, // ズーム コントロールの有効
        zoomControlOptions: {
          position: google.maps.ControlPosition.RIGHT_BOTTOM
        },
        scaleControl: true, // 簡単な地図の縮尺調整機能を表示するスケール コントロールを有効
      });
      this.marker = new google.maps.Marker({
        position: this.spot.pos,
        map: this.map,
        animation: google.maps.Animation.BOUNCE,
      });

    })
    .catch(e => {
      console.error(e);
    });
  },
}
</script>
