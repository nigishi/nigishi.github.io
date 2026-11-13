// ポートフォリオに載せる作品の一覧。ここを編集するだけでサイトに反映されます。
// public: false の作品はリポジトリへのリンクを出さず「Private」と表示します。
// category: "app" | "web" | "tool"
window.PROJECTS = [
  {
    name: "TaskFlow",
    description: "自分専用のタスク管理デスクトップアプリ。TickTick 風のリスト、Toggl 風の時間計測、Sunsama 風の朝晩の振り返りを1つにまとめ、計測中のタスクを macOS のメニューバーに表示します。",
    category: "app",
    tags: ["Electron", "TypeScript", "Vite"],
    repo: "https://github.com/nigishi/taskflow",
    public: false,
    year: 2026
  },
  {
    name: "ここむすび助産院 公式サイト",
    description: "助産院の公式Webサイト。ケア内容・院長あいさつ・お知らせ（Markdown で更新）などのページを Astro で構築し、Cloudflare Workers で配信しています。",
    category: "web",
    tags: ["Astro", "Cloudflare Workers"],
    repo: "https://github.com/nigishi/kokomusubi-site",
    public: false,
    year: 2026
  },
  {
    name: "Next.js Pomodoro",
    description: "ブラウザで使えるポモドーロタイマー。Next.js で作成し Vercel にデプロイしています。",
    category: "app",
    tags: ["Next.js", "TypeScript", "Vercel"],
    repo: "https://github.com/nigishi/nextjs-pomodoro",
    demo: "https://nextjs-pomodoro-liard.vercel.app",
    public: false,
    year: 2025
  }
];
