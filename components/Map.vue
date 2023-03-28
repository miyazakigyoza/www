<template>
  <div ref="map"></div>
</template>

<script>
import { Loader } from '@googlemaps/js-api-loader';

export default {
  props: ['position', 'zoom'],
  data: () => ({
    map: null,
    google: null,
    marker: null,
  }),
  mounted() {
    if (!this.position) return;
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
        zoom : this.zoom || 14,
        center: this.position,
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
        position: this.position,
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
