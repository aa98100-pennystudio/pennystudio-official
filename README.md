# Penny Studio 官方網站第一版

這是一個可直接部署到 GitHub Pages 或 Cloudflare Pages 的純靜態網站版本，不需要 React、Vue、Next.js 或任何 build 流程。

## 檔案結構

```text
/
├── index.html
├── about.html
├── bridal.html
├── lash-keratin.html
├── brow.html
├── facial-care.html
├── works.html
├── faq.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   ├── images/
│   │   └── placeholder.jpg
│   └── icons/
│       └── favicon.svg
├── robots.txt
├── sitemap.xml
└── README.md
```

## 頁面

- `index.html`：首頁，品牌入口、服務入口、作品精選、評價摘要、FAQ 精選與 BeautySalon Schema。
- `about.html`：品牌故事、美感理念、適合與不適合的客人。
- `bridal.html`：桃園南崁新娘秘書與婚禮造型服務頁，含 Service Schema。
- `lash-keratin.html`：韓式角蛋白美睫服務頁。
- `brow.html`：自然霧眉與眉型設計服務頁。
- `facial-care.html`：臉部撥筋與韓系保養服務頁，含保守免責文字。
- `works.html`：作品案例索引頁，含分類篩選與 CollectionPage Schema。
- `faq.html`：四大服務 FAQ，含 FAQPage Schema。
- `contact.html`：預約諮詢與 LINE 詢問格式。

## 上線前需要替換

請在正式部署前替換以下 placeholder：

- 官方 LINE：所有 LINE CTA 已連至 `https://lin.ee/zKgRbTT`。
- `INSTAGRAM_URL`：目前 Instagram 連結為 `#`。
- `GOOGLE_BUSINESS_URL`：Google 商家連結為 `https://maps.app.goo.gl/C7DK2LivzjPGuZda6?g_st=ifm`。
- 正式網域：目前 canonical、Open Graph、Schema、robots.txt、sitemap.xml 使用 `https://aa98100-pennystudio.github.io/pennystudio-official/`。
- 地址：目前使用「桃園市南崁區（正式地址待補）」。
- 電話：目前使用 `PHONE_PLACEHOLDER`。
- 真實作品圖片：目前使用 `assets/images/placeholder.jpg`。
- 真實顧客評價：首頁評價目前為 placeholder 文案。
- 服務方案與價格：新娘秘書方案區目前為 placeholder。

## 部署到 GitHub Pages

1. 將整個資料夾內容提交到 GitHub repository。
2. 到 repository 的 Settings → Pages。
3. Source 選擇 `Deploy from a branch`。
4. Branch 選擇 `main`，資料夾選擇 `/root`。
5. 儲存後等待 GitHub Pages 發佈。

## 部署到 Cloudflare Pages

1. 建立 Pages project 並連接 GitHub repository。
2. Framework preset 選擇 `None`。
3. Build command 留空。
4. Build output directory 留空或使用 `/`。
5. 發佈後替換正式網域與 sitemap。

## 技術說明

- 全站使用純 HTML、CSS、JavaScript。
- 不使用外部 CDN。
- CSS 集中於 `css/style.css`。
- JavaScript 集中於 `js/main.js`。
- 互動包含手機導覽列、FAQ accordion、作品分類篩選、返回頂部按鈕與 LINE CTA 事件 placeholder。
- 所有頁面皆有 title、meta description、canonical、Open Graph、Twitter Card、Breadcrumb 與 JSON-LD Schema。
