module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        components: '@/components',
        cn: '@/components/common',
        ct: '@/components/content',
        network: '@/network',
        common: '@/common',
        views: '@/views',
      }
    }
  }
}