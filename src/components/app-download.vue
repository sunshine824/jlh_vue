<template>
  <div class="app-download">
    <div class="download-main">
      <div class="bk3"></div>
      <div class="dowload-conetent clearfix">
        <div class="d-left">
          <img :src="headerImg" class="d-user" alt="Alternate Text" />
          <p>{{author}}</p>
          <strong>邀请您使用</strong>
          <img :src="logoImg" class="d-logo" alt="Alternate Text" />
        </div>
        <div class="d-right">
          <img :src="classImg" alt="Alternate Text" />
        </div>
      </div>
      <div class="bk2"></div>
      <div class="download-c-img">
        <img :src="textImg" alt="Alternate Text" />
      </div>
      <div class="bk2"></div>
      <div class="download-number">
        <div class="download-up">
          <p>使用邀请码<em>获得 50 条会员通知短信</em></p>
        </div>
        <div class="download-down">
          <strong>oj33</strong>
          <small>长按数字以复制邀请码</small>
        </div>
      </div>
      <div class="bk3"></div>
      <div class="download-cmd clearfix">
        <a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.pthola.coach" class="iphone"><img :src="iphoneImg" alt="Alternate Text" /></a>
        <a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.pthola.coach" class="android" @click.prevent="alertShow()"><img :src="androidImg" alt="Alternate Text" /></a>
      </div>
      <div class="bk1"></div>
      <p style="text-align:center;color:#505050;">请在右上菜单中选择"用Safari打开"</p>
      <div class="bk2"></div>
    </div>
    <!--二维码弹出层-->
    <show-e-w-m ref="erweima"></show-e-w-m>
  </div>
</template>

<script type="text/ecmascript-6">
  import showEWM from '../base/showEWM'

  export default {
    components:{
      showEWM
    },
    data() {
      return {
        headerImg:'../static/images/header.png',
        logoImg:'../static/images/logo.png',
        classImg:'../static/images/class.png',
        textImg:'../static/images/text.png',
        iphoneImg:'../static/images/iphone.png',
        androidImg:'../static/images/android.png',
        author:'九十五'
      }
    },
    methods:{
      alertShow(){
        this.$refs.erweima.show()
      }
    }
  }

</script>
<style scoped lang="less">
  .d-left {
    float: left;
    width: 40%;
    text-align: center;
  }

  .d-right {
    float: right;
    width: 60%;
    text-align: center;
  }

  .d-logo {
    width: 50%;
  }

  .d-right img {
    width: 80%;
  }

  .d-user {
    width: 50px;
    border-radius: 50%;
  }

  .download-c-img {
    text-align: center;
  }

  .download-c-img img {
    width: 70%;
  }

  .d-left p {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: #505050;
  }

  .d-left strong {
    font-size: 16px;
    font-weight: 700;
    color: #505050;
    display: block;
  }

  .download-up {
    text-align: center;
  }

  .download-up p {
    font-weight: 700;
    background: #505050;
    color: #fff;
    display: inline-block;
    padding: 10px;
    border-radius: 4px 4px 0 0;
    font-size: 18px;
    line-height: 20px;
  }

  .download-up p em {
    display: block;
    font-size: 12px;
    padding-top: 2px;
  }

  .download-down {
    text-align: center;
  }

  .download-down strong {
    font-weight: 700;
    display: inline-block;
    color: #505050;
    border: 1px solid #b5b5b5;
    border-radius: 4px;
    padding: 10px 54px;
    font-size: 24px;
  }

  .download-down small {
    display: block;
  }

  .download-cmd {
    padding: 0 10px;
  }

  .download-cmd a {
    font-weight: 700;
    width: 50%;
    float: left;
    color: #fff;
    text-align: center;
    display: block;
    padding: 0 5px;
    border-radius: 5px;
  }

  .download-a a em {
    font-weight: 400;
  }

  .download-cmd a img {
    max-width: 100%;
  }


  .share-show img {
    width: 50%;
  }

  .safari {
    background: #505050;
    color: #fff;
    text-align: center;
    padding: 5% 0;
    display: block;
    position: relative;
  }

  .safari img {
    width: 45px;
    position: absolute;
    right: 10%;
    top: 15px;
  }
</style>
