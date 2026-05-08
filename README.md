<div align="center">
<img width="602" height="381" alt="Снимок экрана 2026-05-08 212203" src="https://github.com/user-attachments/assets/b88e00d4-3d1a-4706-bd5a-fac5b7ae1b8d" />
<img width="821" height="619" alt="Снимок экрана 2026-05-08 212431" src="https://github.com/user-attachments/assets/a8921f55-48f3-4dd4-ba1e-d00bb1c18279" />

# 🏠 Roomify

**[English](#english) · [Русский](#русский) · [日本語](#日本語)**

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React_Router_v7-CA4245?style=flat&logo=react&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)

</div>

---

## English

### What is Roomify?

Roomify is an **AI-powered floor plan visualizer**. Upload a black-and-white 2D blueprint and the AI transforms it into a photorealistic bird's-eye 3D render — complete with furniture, materials, and labeled room dimensions.

A built-in **before/after comparison slider** lets you drag to see the original plan side-by-side with the AI result. All projects are saved to a **community feed** where users can browse and share their renders.

### Features

| Feature | Description |
|---|---|
| 🏗️ 2D → 3D rendering | Black-and-white blueprint to photorealistic top-down view |
| ↔️ Before/After slider | Drag to compare original vs AI-rendered result |
| 📐 Room dimensions | Each room labeled with measurements in the output |
| 🌐 Community feed | Public project gallery — browse and share renders |

### Getting Started

```bash
# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev

# Production build
npm run build
```

Configure your API keys in `.env.local` before running.

### Docker

```bash
docker build -t roomify .
docker run -p 3000:3000 roomify
```

Compatible with AWS ECS, Google Cloud Run, Railway, Fly.io, and any Docker-capable platform.

### Tech Stack

- **Framework**: React Router v7 (SSR mode)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Bundler**: Vite
- **Deployment**: Docker

---

## Русский

### Что такое Roomify?

Roomify — это **AI-визуализатор планировок помещений**. Загрузите чёрно-белый 2D-чертёж, и ИИ превратит его в фотореалистичный рендер сверху — с мебелью, отделкой и подписанными размерами каждой комнаты.

Встроенный **слайдер «до/после»** позволяет перетаскиванием сравнить исходный чертёж с готовым результатом. Все проекты сохраняются в **публичный фид**, где можно просматривать и шерить работы других пользователей.

### Возможности

| Функция | Описание |
|---|---|
| 🏗️ Рендеринг 2D → 3D | Из чёрно-белого плана — в фотореалистичный вид сверху |
| ↔️ Слайдер до/после | Сравнение оригинала и AI-результата перетаскиванием |
| 📐 Размеры комнат | Габариты каждого помещения подписаны на рендере |
| 🌐 Лента проектов | Публичная галерея — смотреть и делиться работами |

### Быстрый старт

```bash
# Установить зависимости
npm install

# Запустить дев-сервер (http://localhost:5173)
npm run dev

# Сборка для продакшна
npm run build
```

Перед запуском добавьте API-ключи в файл `.env.local`.

### Docker

```bash
docker build -t roomify .
docker run -p 3000:3000 roomify
```

Совместим с AWS ECS, Google Cloud Run, Railway, Fly.io и любой платформой с поддержкой Docker.

### Стек технологий

- **Фреймворк**: React Router v7 (SSR-режим)
- **Язык**: TypeScript
- **Стили**: TailwindCSS
- **Сборщик**: Vite
- **Деплой**: Docker

---

## 日本語

### Roomify とは？

Roomify は **AI を活用した間取り可視化プラットフォーム** です。白黒の 2D 平面図をアップロードすると、AI が家具・内装材・各部屋の寸法ラベル付きのフォトリアルな俯瞰 3D レンダリングに変換します。

内蔵の **ビフォー/アフター比較スライダー** でドラッグするだけで元の図面と AI 結果を並べて確認できます。すべてのプロジェクトは **コミュニティフィード** に保存され、他のユーザーの作品を閲覧・シェアすることができます。

### 主な機能

| 機能 | 説明 |
|---|---|
| 🏗️ 2D → 3D レンダリング | 白黒の平面図をフォトリアルな俯瞰ビューに変換 |
| ↔️ ビフォー/アフタースライダー | ドラッグで元の図面と AI 結果を比較 |
| 📐 部屋の寸法表示 | 各部屋の寸法がレンダリング上にラベル表示 |
| 🌐 コミュニティフィード | 公開プロジェクトギャラリー — 閲覧・シェア可能 |

### はじめ方

```bash
# 依存関係をインストール
npm install

# 開発サーバーを起動 (http://localhost:5173)
npm run dev

# 本番ビルド
npm run build
```

実行前に `.env.local` に API キーを設定してください。

### Docker

```bash
docker build -t roomify .
docker run -p 3000:3000 roomify
```

AWS ECS、Google Cloud Run、Railway、Fly.io など Docker 対応のあらゆるプラットフォームで動作します。

### 技術スタック

- **フレームワーク**: React Router v7（SSR モード）
- **言語**: TypeScript
- **スタイリング**: TailwindCSS
- **バンドラー**: Vite
- **デプロイ**: Docker

---

<div align="center">
  <sub>Built with ❤️ using React Router</sub>
</div>
