import Vue from 'vue'
import Router from 'vue-router'
import page1 from '@/components/page1'
import page2 from '@/components/page2'

Vue.use(Router)

var router= new Router({
  routes: [
    {
      path: '/',
      name: 'page1',
      component: page1
    },
    {
      path: '/page2',
      name: 'page2',
      component: page2
    }
  ]
})


//Vue2.0在采集a标签的点击事件时，由于路由切换会早于事件的采集，采集到的url为跳转后的url，所以需要将路由切换改成异步的
router.beforeEach(function (to,from,next) {
  setTimeout(function () {
    next()
  },0);
});


export default router;
