module.exports = {
  title: '橘子的自留地',
  base: '/space/',
  description: 'There are a lot of oranges here ！',
  themeConfig: {
    logo: `/space/images/orange.png`,
    lastUpdated: 'Last Updated'
  },
  themeConfig: {
    sidebar: {
      '/front-end/': [
        'front-end',
      ],
      '/reading/': [
        'reading',
        'radio-notes',
        {
          title: '得到 笔记',   // 必要的
          path: '/reading/igetget/gaokao',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            '../reading/igetget/gaokao',
            '/reading/igetget/test2'
          ]
        }
      ],
      '/life/': [
        'cooking',
        'movie',
        'cooking-roadmap',
        'shanghai'
      ]
    },
    nav: [
      { text: '前端', link: '/front-end/' },
      { text: '阅读', link: '/reading/' },
      { text: '生活', link: '/life/' },
      { text: 'github', link: 'https://github.com/wangshengfei' },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      }
    ]
  }
}
