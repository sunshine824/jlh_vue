<template>
    <transition-group tag="div" name="alert-fade">
        <div class="bill-show" v-show="alertShow" key="erweima">
          <img class="erweima" :src="endImg" alt="Alternate Text" />
        </div>
        <div class="bill-mask" v-show="alertShow" @click="hide()" key="mask"></div>
    </transition-group>
</template>
<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        endImg:'../static/images/end.png',
        alertShow:false
      }
    },
    methods:{
      show(){
        this.alertShow=true
      },
      hide(){
        this.alertShow=false
      }
    }
  }
</script>
<style scoped lang="less">
  .erweima {
    width: 50%;
    padding: 10% 0;
  }
  .alert-fade-enter-active, .alert-fade-leave-active{
    transition: opacity .5s;
  }
  .alert-fade-enter, .alert-fade-leave-to{
    opacity: 0;
  }
</style>
