<template>
  <div class="bg">
    <div class="mask"></div>
    <div class="login">
      <div class="title">登录</div>
      <el-form status-icon label-position="top" :model="dat" ref="login">
        <el-form-item prop="user" label="账号" :rules="[{ required: true, message: '账号不能为空'}]">
          <el-input v-model="dat.user" style="width: 220px" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="password" label="密码" :rules="[{ required: true, message: '密码不能为空'}]">
          <el-input v-model="dat.password" style="width: 220px" type="password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="code" label="验证码" :rules="[{ required: true, message: '验证码不能为空'}]">
          <el-input class="code_input" v-model="dat.code" style="width: 114px" autocomplete="off"></el-input>
          <div class="code" v-html="svg" @click="getCode"></div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm()">登录</el-button>
          <!--<el-button type="primary" @click="submitForm()" native-type="submit">登录</el-button>-->
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script>
  import MD5 from 'js-md5'
  import {login} from '@/api/login'
  import {code} from '@/api/verification'

  export default {
    props: {
      init: {
        type: Function,
        default: () => {console.log('need init function');}
      }
    },

    data() {
      return {
        svg: '',
        dat: {
          user: '',
          password: '',
          code: '',
          key: '',
        }
      }
    },
    created() {
      this.getCode();
    },
    methods: {
      getCode() {
        code({w: 100, h: 40}).then(res => {
          if (res.code === 200) {
            this.svg = res.data.svg;
            this.dat.key = res.data.key;
          } else {
            this.$message.error(res.message);
          }
        })
      },
      submitForm() {
        this.$refs.login.validate((valid) => {
          if (valid) {
            let dat = {
              user: this.dat.user,
              password: MD5(this.dat.password),
              code: this.dat.code,
              key: this.dat.key,
            };
            login(dat).then(res => {
              if (res.code === 200) {
                this.$message.success('登录成功');
                sessionStorage.setItem('token', res.data.token);
                sessionStorage.setItem('name', res.data.name);
                sessionStorage.setItem('head_img', res.data.head_img);
                sessionStorage.setItem('user', res.data.user);
                sessionStorage.setItem('id', res.data.id);
                this.init();
              } else if(res.code === 1) {
                this.getCode();
              }else {
                this.$message.error(res.message);
              }
            })
          } else {
            return false;
          }
        });
      },
    }
  }
</script>

<style lang="less" scoped>
  @import "./less/login.less";
</style>
