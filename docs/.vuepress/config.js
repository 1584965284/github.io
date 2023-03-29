module.exports = {
  title: '如雨的个人网站',
  description: 'ruyu\'s blog',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置
      {text: 'js系列', link: '/js/' },
      {text: 'React系列', link: '/react/'},
      {
        text: '诗词系列',
        link:'/poems/',
        items:[
          {
            text:'雨如烟',
            link:'/poems/mist/huanxisha-shaluoqiufeng'
          },
          {
            text:"雨如丝",
            link:"/poems/silk/shuidiaogetou-yuechuang"
          },
          {
            text: "花如雨",
            link:"/poems/petal/pusaman-richu"
          }
        ],
      },
      {text: 'GitHub', link: 'https://github.com/1584965284'}
    ],
    sidebar: require('./sidebar/zh'), // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
  }
};