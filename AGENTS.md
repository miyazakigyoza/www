# miyazakigyoza — CLAUDE.md

## プロジェクト概要

宮崎県ひなた餃子連合会の公式サイト（https://www.miyazakigyoza.jp/）。
宮崎県内の餃子店舗情報・マップ・ニュース・キャンペーン情報を提供する静的サイト。
Nuxt 2 の `target: 'static'` による静的サイト生成（SSG）で構築されており、Cloudflare Pages で配信される。

> **Newt CMS は廃止済み（2026年6月）**
> 店舗データはかつてヘッドレス CMS の Newt から取得していたが、Newt のサービス終了に伴い
> `scripts/fetch-newt.mjs` で全データを取り込み、`content/*.json` と `static/cms/`（画像）に
> ローカル保存した。データ参照は `lib/cms.js` 経由で行う。Newt API はもう存在しない。
> 店舗情報を更新する場合は `content/*.json` を直接編集する。

---

## 技術スタック

| 項目 | 詳細 |
|---|---|
| フレームワーク | **Nuxt.js 2** (^2.15.8) |
| UI ライブラリ | **Vue.js 2** (^2.7.10) |
| CSS | Tailwind CSS (@nuxtjs/tailwindcss ^6.0.0) |
| アイコン | Font Awesome 6 (@nuxtjs/fontawesome) |
| API | Cloudflare Pages Functions（`functions/note.js` — note.com プロキシ） |
| 地図 | Google Maps JS API (@googlemaps/js-api-loader) |
| アナリティクス | Google Tag Manager (@nuxtjs/google-gtag) |
| パッケージマネージャー | Yarn |
| ビルド出力 | 静的ファイル（`dist/`） |
| デプロイ | Cloudflare Pages |
| 店舗データ | ローカル JSON（`content/`、旧 Newt CMS から取り込み済み） |

> ⚠️ **重要: Nuxt 2 / Vue 2 は EOL（サポート終了済み）**
> Nuxt 2 は 2023年12月31日、Vue 2 は 2023年12月31日にサポートが終了しています。
> セキュリティアップデートは提供されません。将来的には **Nuxt 3 / Vue 3** へのアップグレードが必要です。
> アップグレードの際は Options API から Composition API への移行、および Nuxt 2 固有の書き方の見直しが必要になります。

---

## ディレクトリ構成

```
miyazakigyoza/
├── content/                # 店舗データ（旧 Newt CMS から取り込んだ JSON）
│   ├── areas.json          # エリア（order 順で保存済み）
│   ├── shops.json          # 店舗（depth=2 で参照解決済み、furigana 順）
│   ├── products.json       # 商品
│   └── originals/          # 画像の原寸アーカイブ（配信には使わない）
├── functions/              # Cloudflare Pages Functions
│   └── note.js             # GET /note — note.com マガジン記事一覧のプロキシ（旧 AWS Lambda の置き換え）
├── lib/
│   ├── cms.js              # content/*.json を旧 Newt API 互換の形（{items}）で返すヘルパー
│   └── note.js             # note マガジン ID 定数（サイト側と functions/ の共通参照）
├── scripts/
│   └── fetch-newt.mjs      # Newt からの取り込みスクリプト（サービス終了済みのため記録用）
├── pages/                  # ページコンポーネント（Nuxt のルーティング自動生成）
│   ├── index.vue           # トップページ
│   ├── about.vue           # 連合会について
│   ├── campaign.vue        # キャンペーン
│   ├── contact.vue         # お問い合わせ（HubSpot フォーム）
│   ├── list.vue            # 店舗一覧
│   ├── map.vue             # 店舗マップ（Google Maps）
│   ├── news.vue            # ニュース一覧
│   ├── policy.vue          # プライバシーポリシー
│   └── shop/
│       ├── index.vue       # ショップ一覧
│       ├── _id.vue         # ショップ詳細（動的ルート）
│       └── area/
│           └── _area.vue   # エリア別ショップ一覧（動的ルート）
├── components/             # 共通コンポーネント
│   ├── Areas.vue           # エリア選択
│   ├── Card.vue            # 店舗カード
│   ├── Map.vue             # Google Maps コンポーネント
│   ├── Range.vue           # 範囲・距離
│   ├── Spot.vue            # スポット表示
│   └── Tour.vue            # ツアー情報
├── layouts/
│   └── default.vue         # デフォルトレイアウト
├── plugins/
│   └── v-scroll.js         # スクロールプラグイン
├── store/
│   ├── note.js             # Note API 関連ストア
│   └── shops.js            # 店舗データストア
├── assets/
│   └── img/                # 画像アセット
├── static/                 # 静的ファイル（そのまま配信）
│   ├── favicon.ico
│   ├── cms/                # 店舗・商品画像（旧 Newt の画像を最大 1600px に縮小して保存）
│   └── img/
├── nuxt.config.js          # Nuxt 設定
├── tailwind.config.js      # Tailwind CSS 設定
├── buildspec.yml           # AWS CodeBuild 設定（旧デプロイ。現在は Cloudflare Pages）
└── package.json
```

---

## コーディングルール

### Vue / Nuxt 2 固有のルール

- **Options API** を使用する（Composition API は Nuxt 2 / Vue 2 では標準ではない）
- コンポーネントは `export default { data(), methods(), computed(), ... }` の形式で記述する
- `asyncData()` / `fetch()` はページコンポーネント（`pages/`）のみで使用可能
- `this.$axios` でAPIリクエストを行う（`@nuxtjs/axios` 経由）
- `this.$config` で環境変数にアクセスする（`publicRuntimeConfig` 経由）
- Vuex ストアは `store/` ディレクトリに配置する（Nuxt 2 の自動登録）

### コンポーネント記述スタイル

```vue
<template>
  <div>...</div>
</template>

<script>
export default {
  name: 'ComponentName',
  props: {
    // プロパティ定義
  },
  data() {
    return {
      // リアクティブデータ
    }
  },
  computed: {
    // 算出プロパティ
  },
  methods: {
    // メソッド
  },
}
</script>

<style scoped>
/* スコープ付きスタイル */
</style>
```

### スタイル

- Tailwind CSS ユーティリティクラスを優先して使用する
- カスタムスタイルが必要な場合は `<style scoped>` に記述する

### 環境変数

- `.env.local` に開発用の環境変数を定義する（`yarn dev` 時に自動読み込み）
- 環境変数は `nuxt.config.js` の `publicRuntimeConfig` で公開される

---

## コマンド

```bash
# 依存関係のインストール
yarn install

# 開発サーバー起動（.env.local を使用、localhost:3000）
yarn dev

# 静的ファイル生成（dist/ に出力）
yarn generate

# プロダクションビルド（SSR 用、静的サイトでは基本不使用）
yarn build

# SSR サーバー起動（静的サイトでは基本不使用）
yarn start
```

---

## デプロイフロー

このプロジェクトは `target: 'static'` による**静的サイト生成（SSG）**を使用しています。

### ローカルでの静的サイト生成

```bash
# .env.local に必要な環境変数を設定した上で実行
yarn generate
# → dist/ ディレクトリに静的ファイルが生成される
```

### Cloudflare Pages によるデプロイ

Cloudflare Pages のプロジェクト設定:

| 項目 | 値 |
|---|---|
| ビルドコマンド | `yarn generate` |
| ビルド出力ディレクトリ | `dist` |
| Node バージョン | `.nvmrc`（v18）が自動で使用される |

404 ページは `generate.fallback: '404.html'` で生成済み。

### お知らせ（note.com 連携）

ニュース欄は note.com のマガジン（https://note.com/miyazakigyoza/m/mb1f3f7f5c14d）の記事を
Cloudflare Pages Functions の `GET /note`（`functions/note.js`）経由でクライアント側から取得して表示する。
旧 AWS Lambda プロキシ（`NOTE_API`）は廃止済み。マガジン ID を変更する場合は `lib/note.js` を編集する。
Pages Functions はローカルでは `npx wrangler pages dev dist` で確認できる（`yarn dev` では `/note` は 404 になる）。

### 必要な環境変数（Cloudflare Pages のビルド環境変数に設定）

店舗データはローカル JSON、note 連携は Pages Functions のため API 系の変数は不要。以下は引き続き必要:

| 変数名 | 用途 |
|---|---|
| `HUBSPOT_PORTALID` | HubSpot ポータル ID |
| `HUBSPOT_FORMID` | HubSpot フォーム ID |
| `GOOGLE_MAP` | Google Maps API キー |
| `GTAG_ID` | Google Tag Manager / GA4 の ID |

> `API_URL` / `API_TOKEN`（旧 Newt）、`NOTE_API` / `NOTE_MAGAZINE_ID`（旧 Lambda プロキシ）は廃止済み。
> ローカルビルドでは `.env` が自動読み込みされる（Nuxt 2.13+ の標準機能）。
