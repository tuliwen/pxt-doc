export default {
  lang: "zh-CN",
  title: "MakeCode(PXT)",
  description: "MakeCode(PXT).",
  base: "/pxt-doc/",
  cleanUrls: true,
  ignoreDeadLinks: true,
  lastUpdated: true,
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  themeConfig: {
    logo: "/logo.svg",
    smoothScroll: true,
    nav: [
      { text: "指南", link: "/guide/what-is-pxt", activeMatch: "/guide/" },
      { text: "来源", link: "https://makecode.com/docs" },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/tuliwen" }],
    sidebar: [
      {
        text: "介绍",
        collapsible: true,
        items: [
          { text: "什么是PXT？", link: "/guide/what-is-pxt" },
          { text: "创建目标", link: "/guide/target-creation" },
          { text: "paxtarget.json", link: "/guide/pxtarget" },
          { text: "定义积木块", link: "/guide/defining-blocks" },
          { text: "自动生成.d.ts", link: "/guide/simshim" },
          { text: "打包静态页面", link: "/guide/staticpkg" },
          { text: "模拟器", link: "/guide/simulator" },
          { text: "主题", link: "/guide/theming" },
          { text: "主板定义", link: "/guide/board" },
          { text: "异步和线程", link: "/guide/async" },
          { text: "部分闪烁", link: "/guide/partial-flashing" },
          { text: "源代码嵌入", link: "/guide/source-embedding" },
          { text: "SAMD21目标", link: "/guide/samd21targets" },
        ],
      },
      {
        text: "创建扩展",
        collapsible: true,
        items: [
          { text: "makecode扩展", link: "/guide/extensions" },
          { text: "pxt.json", link: "/guide/pxt-json" },
        ],
      },
      {
        text: "命令行界面",
        collapsible: true,
        items: [
          { text: "命令行工具", link: "/CL/cli" },
          { text: "build", link: "/CL/build" },
          { text: "bump", link: "/CL/bump" },
          { text: "cherrypick", link: "/CL/cherrypick" },
          { text: "deploy", link: "/CL/deploy" },
          { text: "login", link: "/CL/login" },
          { text: "staticpkg", link: "/CL/staticpkg" },
          { text: "update", link: "/CL/update" },
          { text: "pyconv", link: "/CL/pyconv" },
          { text: "hidserial", link: "/CL/hidserial" },
        ],
      },
      {
        text: "文档和翻译",
        collapsible: true,
        items: [
          { text: "编写文档", link: "https://makecode.com/writing-docs" },
          { text: "翻译", link: "https://makecode.com/translate" },
        ],
      },
      {
        text: "设备特有资源",
        collapsible: true,
        items: [{ text: "UF2文件格式", link: "http://github.com/microsoft/uf2" }],
      },
    ],
    editLink: {
      pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
      text: "在 GitHub 上编辑此页面",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
  },
};
