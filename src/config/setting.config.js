/**
 * @description 导出通用配置
 */
module.exports = {
  // 接口版本号
  version: 'v1',
  // 标题，
  title: 'Magnetar',
  // 标题分隔符
  titleSeparator: ' - ',
  // pro版本copyright可随意修改
  copyright: '磁星v2.0-Beta',
  // logo，
  logo: '',
  baseURL: 'https://test.api.cixing.io/',
  // baseURL: 'http://127.0.0.1:1314/',
  // 消息框消失时间
  messageDuration: 4000,
  // 分页条数
  pageSize: 20,
  // 是否启用pwa
  pwa: true,
  // 搜索页面组件
  searchPageComponent: {
    polyList: 'on',
    relatedSearch: 'off',
    hotSearch: 'off',
  },
  // 搜索引擎
  searchEngine: {
    jav: 'on',
    actress: 'off',
    douban: 'on',
  }

}
