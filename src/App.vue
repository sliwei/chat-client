<template>
  <div class="main">
    <awei-chat v-if="loginSta === 1"/>
    <awei-login v-if="loginSta === 2" :init="init"/>
  </div>
</template>

<script>
  import Chat from './views/chat'
  import Login from './views/login'
  import {info} from '@/api/login'

  export default {
    components: {
      'awei-chat': Chat,
      'awei-login': Login,
    },
    data() {
      return {
        loginSta: 0,
      }
    },
    methods: {
      over() {
        let indexLoading = document.querySelector('.indexLoading');
        indexLoading.style.opacity = 0;
        setTimeout(() => {
          indexLoading.style.display = 'none';
        }, 300);
      },
      init() {
        info().then(res => {
          if (res.code === 200) {
            sessionStorage.setItem('name', res.data.name);
            sessionStorage.setItem('head_img', res.data.head_img);
            sessionStorage.setItem('user', res.data.user);
            sessionStorage.setItem('id', res.data.id);
            this.loginSta = 1;
          } else {
            this.loginSta = 2;
          }
        }).catch(e => {
          this.loginSta = 2;
        })
      }
    },
    created() {
      this.over();
      this.init();
    }
  }
</script>

<style lang="less">
  @import "./assets/less/def.less";
  .main {
    background-color: #eeeeee;
    width: 100%;
    height: 100vh;
    flex: 1;
    padding: 0px;
    display: flex;
    flex-direction: column;
    overflow: auto;
  }
</style>
