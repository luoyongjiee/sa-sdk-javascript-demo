// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


//JS SDK的初始化
import sensors from 'sa-sdk-javascript'
sensors.init({
  server_url: '您的数据接收地址',
  heatmap_url:'您的heatmap.min.js文件的相对路径',
  //将heatmap设置为空对象表示开启$WebClick和$WebStay事件的采集
  heatmap: {},
  //设置该属性后SDK在url切换后自动采集$pageview事件
  is_track_single_page:true
});

//首次进入页面不会触发$pageview，需要手动调用一次
sensors.quick('autoTrack');

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


