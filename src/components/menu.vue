<template>
  <div class="menu">
    <div class="menu-top">
      <img :src="menu_banner" alt="" />
      <a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.pthola.coach" class="m-a1 iphone"></a>
      <a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.pthola.coach" class="m-a2 android"></a>
    </div>
    <div class="use clearfix">
      <a href="http://mp.weixin.qq.com/s?__biz=MzIwNDA3MDgyNA==&mid=400054413&idx=2&sn=5bc272e888d137a6d24e6587632ad6a9&scene=18#wechat_redirect" class="float-left">如何使用<em>How to use</em></a>
      <a href="http://mp.weixin.qq.com/s?__biz=MzIwNDA3MDgyNA==&mid=400854961&idx=1&sn=5936e34854edbd34f8fcfeebfc30c68b#rd" class="float-right">为什么用<em>Why use</em></a>
    </div>
    <div class="m-ul">
      <ul class="clearfix">
        <li v-for="(item,index) in m_ul" :key="item.id">
          <a :href="item.href">
            <img :src="item.imgUrl" alt="Alternate Text" />
            <p>{{item.zh_title}}<em>{{item.en_title}}</em></p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        menu_banner:'../static/images/menu_banner.jpg',
        m_ul:[
          {id:0,href:'/dried/2',imgUrl:'../static/images/menu1.png',zh_title:'健身干货',en_title:'Boutique'},
          {id:1,href:'/video/3',imgUrl:'../static/images/menu2.png',zh_title:'健身视频',en_title:'Video'},
          {id:2,href:'/job/1',imgUrl:'../static/images/menu3.png',zh_title:'健身招聘',en_title:'Recruit'},
          {id:3,href:'/train/4',imgUrl:'../static/images/menu4.png',zh_title:'健身培训',en_title:'Train'},
          {id:4,href:'/cn-rank',imgUrl:'../static/images/menu5.png',zh_title:'中国教练排行',en_title:'Ranking List'},
          {id:5,href:'javascript:;',imgUrl:'../static/images/menu6.png',zh_title:'讨论群',en_title:'Discuss'},
        ]
      }
    }
  }
</script>

<style lang="less" scoped>
  .menu{min-height: calc(100vh);background: #f9f9f9;overflow: auto}.m-ul ul li{float:left;margin-right:3%;margin-bottom:3%;position:relative;text-align:center;border-radius:5px;width:30%;box-shadow:0 0 5px #f5f5f5;background:#fff;padding-top:2%}.m-ul ul li p{line-height:20px}.m-ul ul li a{width:100%;height:100%}.menu-top{position:relative}.m-ul ul{margin:.34rem 0;padding:0 0 .27rem .27rem}.v-l-text{position:absolute;color:#fff;z-index:999;width:100%;text-align:center;top:50%;font-size:.45rem;transform:translateY(-50%)}.v-l-text p{font-size:.5rem;color:#fff}.v-mask{position:absolute;top:0;left:0;z-index:998;width:100%;height:100%;background:rgba(0,0,0,.2);border-radius:5px}.erweima{width:100%;display:block}.menu-top img{max-width:100%;height:auto;display:block}.use{margin:.4rem 0;padding:0 .34rem}.use a:first-child{background:#fff url(../../static/images/user1.png) no-repeat;background-position:90% center;background-size:18%}.use a:last-child{background:#fff url(../../static/images/user2.png) no-repeat;background-position:90% center;background-size:18%}.use a{width:48%;font-size:.4rem;text-align:center;padding:5px 0;color:#5b5b5b;display:block;border-radius:5px;text-indent:-1em;box-shadow:0 0 5px #f5f5f5}.m-ul ul li p{font-size:.4rem;color:#5b5b5b}.m-ul ul li p em,.use a em{color:#d9d9d9;display:block;font-size:.32rem}.m-a1,.m-a2{position:absolute;width:3rem;height:.93rem}.m-a1{bottom:25%;left:35%}.m-a2{right:2%;bottom:25%}.m-ul ul li img{max-width:50%}.safari{background:#505050;color:#fff;text-align:center;padding:5% 0;display:block;position:relative}.safari img{width:45px;position:absolute;right:10%;top:15px}
</style>
