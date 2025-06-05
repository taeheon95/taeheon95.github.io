import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "taeheon's blog",
  description: "개발, 일상 블로그",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "홈", link: "/" },
      { text: "개발", link: "/dev" },
      { text: "일상", link: "/daily" },
    ],
    search: {
      provider: "local",
    },
    sidebar: [
      {
        text: "일상의 끄적임",
        link: "/daily",
        items: [],
      },
      {
        text: "개발",
        link: "/dev",
        items: [
          {
            text: "vitepress",
            link: "/dev/vitepress",
          },
          {
            text: "log4j2",
            link: "/dev/log4j2",
          },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/taeheon95" }],
  },
});
