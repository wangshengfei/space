module.exports = {
  title: '橘子的自留地',
  base: '/space/',
  description: 'Just playing around',
  themeConfig: {
    logo: 'orange.png',
    lastUpdated: 'Last Updated'
  },
  themeConfig: {
    sidebar: {
      '/front-end/': [
        'front-end',
      ],
      '/reading/': [
        'reading',
      ],
      '/life/': [
        // '',     /* /foo/ */
        'cooking',
        'movie',
        'cooking-roadmap'
      ]
    }
    ,
    // sidebar: [
    //   {
    //     title: '记录',
    //     path: '/',
    //     collapsable: false,
    //     sidebarDepth: 1,
    //     children: [
    //       '/home/reading',
    //       '/home/front-end'
    //     ]
    //   },
    //   {
    //     title: '生活',
    //     path: '/life/',
    //     collapsable: false,
    //     sidebarDepth: 1,
    //     children: [
    //       '/life/cooking',
    //       '/life/cooking-roadmap'
    //     ]
    //   },
    //   {
    //     title: '在魔都',   // 必要的
    //     path: '/life/shanghai',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    //     collapsable: false, // 可选的, 默认值是 true,
    //     sidebarDepth: 1,    // 可选的, 默认值是 1
    //     children: [
    //       '/shanghai/shanghai'
    //     ]
    //   }
    // ],
    nav: [
      { text: '前端', link: '/front-end/' },
      { text: '读书', link: '/reading/' },
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
