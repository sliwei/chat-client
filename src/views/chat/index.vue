<template>
  <!--<div class="chat">-->

  <!--<el-button v-for="(item, i) in userList" :key="i" @click="setRoom(item)">{{item.name}}</el-button>-->

  <!--<el-card style="height: 400px;overflow: auto">-->
  <!--<div v-for="(item, i) in list" :key="i">-->
  <!--<div>-->
  <!--{{item.name}}：<span style="font-size: 12px">{{item.time}}</span>-->
  <!--</div>-->
  <!--<el-tag>{{item.text}}</el-tag>-->
  <!--</div>-->
  <!--</el-card>-->

  <!--<el-button @click="room('f1')">房间1</el-button>-->
  <!--<el-button @click="room('f2')">房间2</el-button>-->
  <!--<el-button @click="room('f3')">房间3</el-button>-->

  <!--<el-input v-model="val"></el-input>-->
  <!--{{roomName}}-->
  <!--<el-button @click="send">发送</el-button>-->
  <!--</div>-->

  <!--http://www.17sucai.com/preview/776331/2018-07-23/AmazeWeixin/index.html#-->
  <div class="box">
    <div class="wechat">

      <div class="sidestrip">
        <div class="am-dropdown" data-am-dropdown="">
          <!--头像插件-->
          <div class="own_head am-dropdown-toggle">
            <img width="34" height="34" :src="head_img || require('./img/own_head.jpg')" alt="">
          </div>
          <div class="am-dropdown-content">
            <div class="own_head_top">
              <div class="own_head_top_text">
                <p class="own_name">彭于晏丶plus<img src="./img/icon/head.png" alt=""></p>
                <p class="own_numb">微信号：jsk8787682</p>
              </div>
              <img src="./img/own_head.jpg" alt="">
            </div>
            <div class="own_head_bottom">
              <p><span>地区</span>江西 九江</p>
              <div class="own_head_bottom_img">
                <a href=""><img src="./img/icon/head_1.png"></a>
                <a href=""><img src="./img/icon/head_2.png"></a>
              </div>
            </div>
          </div>
        </div>
        <!--三图标-->
        <div class="sidestrip_icon">
          <a id="si_1" :style="`background: url(${require('./img/icon/head_2_1.png')}) no-repeat;`"></a>
          <a id="si_2"></a>
          <a id="si_3"></a>
        </div>

        <!--底部扩展键-->
        <div id="doc-dropdown-justify-js">
          <div class="am-dropdown" id="doc-dropdown-js" style="position: initial;">
            <div class="sidestrip_bc am-dropdown-toggle"></div>
            <ul class="am-dropdown-content" style="">
              <li>
                <a href="#"
                   data-am-modal="{target: '#doc-modal-1', closeViaDimmer: 0, width: 400, height: 225}">意见反馈</a>
                <div class="am-modal am-modal-no-btn" tabindex="-1" id="doc-modal-1">
                  <div class="am-modal-dialog">
                    <div class="am-modal-hd">Modal 标题
                      <a href="javascript: void(0)" class="am-close am-close-spin" data-am-modal-close="">×</a>
                    </div>
                    <div class="am-modal-bd">
                      Modal 内容。本 Modal 无法通过遮罩层关闭。
                    </div>
                  </div>
                </div>
              </li>

              <li><a href="#">备份与恢复</a></li>
              <li><a href="#">设置</a></li>
            </ul>
          </div>
        </div>
      </div>

      <!--聊天列表-->
      <div class="middle on">
        <div class="wx_search">
          <input type="text" placeholder="搜索">
          <button>+</button>
        </div>
        <div class="office_text">
          <ul class="user_list" style="top: 0px; position: absolute;">
            <li v-if="user !== item.user" :class="{line: !item.line, user_active: roomName.indexOf(item.user) >= 0}"
                v-for="(item, i) in userList" @click="setRoom(item)" :key="i">
              <div class="user_head"><img :src="item.head_img"></div>
              <div class="user_text">
                <p class="user_name">{{item.name}}</p>
                <p class="user_message">最新的一条消息！{{item}}</p>
              </div>
              <div class="user_time">下午 2：54</div>
              <span class="msg_sta" v-if="item.num > 0">{{item.num}}</span>
            </li>
          </ul>
        </div>
      </div>

      <!--好友列表-->
      <div class="middle">
        <div class="wx_search">
          <input type="text" placeholder="搜索">
          <button>+</button>
        </div>
        <div class="office_text" style="overflow: hidden;">
          <ul class="friends_list" style="top: 0px; position: absolute;">
            <li>
              <p>新的朋友</p>
              <div class="friends_box">
                <div class="user_head"><img src="./img/head/1.jpg"></div>
                <div class="friends_text">
                  <p class="user_name">新的朋友</p>
                </div>
              </div>
            </li>
            <li>
              <p>公众号</p>
              <div class="friends_box">
                <div class="user_head"><img src="./img/head/2.jpg"></div>
                <div class="friends_text">
                  <p class="user_name">公众号</p>
                </div>
              </div>
            </li>
            <li>
              <p>A</p>
              <div class="friends_box">
                <div class="user_head"><img src="./img/head/3.jpg"></div>
                <div class="friends_text">
                  <p class="user_name">彭于晏丶plus</p>
                </div>
              </div>
              <div class="friends_box">
                <div class="user_head"><img src="./img/head/4.jpg"></div>
                <div class="friends_text">
                  <p class="user_name">陈依依</p>
                </div>
              </div>
              <div class="friends_box">
                <div class="user_head"><img src="./img/head/5.jpg"></div>
                <div class="friends_text">
                  <p class="user_name">毛毛</p>
                </div>
              </div>
            </li>
            <li>
              <p>B</p>
              <div class="friends_box">
                <div class="user_head"><img src="./img/head/6.jpg"></div>
                <div class="friends_text">
                  <p class="user_name">苏笑言</p>
                </div>
              </div>
              <div class="friends_box">
                <div class="user_head"><img src="./img/head/7.jpg"></div>
                <div class="friends_text">
                  <p class="user_name">往事不再提</p>
                </div>
              </div>
            </li>
            <li>
              <p>C</p>
              <div class="friends_box">
                <div class="user_head"><img src="./img/head/8.jpg"></div>
                <div class="friends_text">
                  <p class="user_name">夏继涛</p>
                </div>
              </div>
              <div class="friends_box">
                <div class="user_head"><img src="./img/head/9.jpg"></div>
                <div class="friends_text">
                  <p class="user_name">早安无恙</p>
                </div>
              </div>
              <div class="friends_box">
                <div class="user_head"><img src="./img/head/10.jpg"></div>
                <div class="friends_text">
                  <p class="user_name">王鹏</p>
                </div>
              </div>
            </li>
            <li>
              <p>D</p>
              <div class="friends_box">
                <div class="user_head"><img src="./img/head/11.jpg"></div>
                <div class="friends_text">
                  <p class="user_name">涨了潮了</p>
                </div>
              </div>
              <div class="friends_box">
                <div class="user_head"><img src="./img/head/12.jpg"></div>
                <div class="friends_text">
                  <p class="user_name">Ktz丶中融资</p>
                </div>
              </div>
            </li>
          </ul>
          <div style="position:absolute;display:none;line-height:0;" class="zUIpanelScrollBox"></div>
          <div style="position: absolute; display: none; line-height: 0;" class="zUIpanelScrollBar"></div>
        </div>
      </div>

      <!--程序列表-->
      <div class="middle">
        <div class="wx_search">
          <input type="text" placeholder="搜索收藏内容">
          <button>+</button>
        </div>
        <div class="office_text" style="overflow: hidden;">
          <ul class="icon_list" style="top: 0px; position: absolute;">
            <li class="icon_active">
              <div class="icon"><img src="./img/icon/icon.png" alt=""></div>
              <span>全部收藏</span>
            </li>
            <li>
              <div class="icon"><img src="./img/icon/icon1.png" alt=""></div>
              <span>链接</span>
            </li>
            <li>
              <div class="icon"><img src="./img/icon/icon2.png" alt=""></div>
              <span>相册</span>
            </li>
            <li>
              <div class="icon"><img src="./img/icon/icon3.png" alt=""></div>
              <span>笔记</span>
            </li>
            <li>
              <div class="icon"><img src="./img/icon/icon4.png" alt=""></div>
              <span>文件</span>
            </li>
            <li>
              <div class="icon"><img src="./img/icon/icon5.png" alt=""></div>
              <span>音乐</span>
            </li>
            <li>
              <div class="icon"><img src="./img/icon/icon6.png" alt=""></div>
              <span>标签</span>
            </li>
          </ul>
          <div style="position:absolute;display:none;line-height:0;" class="zUIpanelScrollBox"></div>
          <div style="position: absolute; display: none; line-height: 0;" class="zUIpanelScrollBar"></div>
        </div>
      </div>

      <!--聊天窗口-->
      <div class="talk_window">
        <div class="windows_top">
          <div class="windows_top_box">
            <span>{{choice.name}}</span>
            <ul class="window_icon">
              <li><a href=""><img src="./img/icon/icon7.png"></a></li>
              <li><a href=""><img src="./img/icon/icon8.png"></a></li>
              <li><a href=""><img src="./img/icon/icon9.png"></a></li>
              <li><a href=""><img src="./img/icon/icon10.png"></a></li>
            </ul>
            <div class="extend" data-am-offcanvas="{target: '#doc-oc-demo3'}"></div>
            <!-- 侧边栏内容 -->
            <div id="doc-oc-demo3" class="am-offcanvas">
              <div class="am-offcanvas-bar am-offcanvas-bar-flip">
                <div class="am-offcanvas-content">
                  <p><a href="http://music.163.com/#/song?id=385554" target="_blank">网易音乐</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--聊天内容-->
        <div class="windows_body">
          <div class="office_text" ref="chatbox" style="height: 100%;">
            <ul class="content" id="chatbox" style="top: 0px; position: absolute;">
              <li v-for="(item, i) in messageList" class="me" v-if="user === item.user.user" :key="i">
                <img :src="item.user.head_img" :title="name"><span>{{item.text}}</span>
              </li>
              <li class="other" v-else><img :src="item.user.head_img" :title="item.user.user" :key="i">
                <span>{{item.text}}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="windows_input" id="talkbox">
          <div class="input_icon">
            <a href="javascript:;"></a>
            <a href="javascript:;"></a>
            <a href="javascript:;"></a>
            <a href="javascript:;"></a>
            <a href="javascript:;"></a>
            <a href="javascript:;"></a>
          </div>
          <div class="input_box">
            <textarea name="" rows="" cols="" id="input_box" v-model="val" @keyup.enter="send"></textarea>
            <button id="send" @click="send">发送(Enter)</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import io from 'socket.io-client'
  import {room_chat, chat_list} from '@/api/chat'

  export default {
    data() {
      return {
        user: sessionStorage.getItem('user'), //
        name: sessionStorage.getItem('name'), //
        head_img: sessionStorage.getItem('head_img'), //
        socket: io.connect(URL.socketUrl + '/chat-namespace', {
          path: '/chat-ws'
        }),
        messageList: [],
        val: '',
        userList: [],
        roomName: '',
        choice: {},
      }
    },
    methods: {
      // room(index) {
      //   this.socket.emit('join', {roomName: index, userName: sessionStorage.getItem('name')});
      // },
      setRoom(dat) {
        console.log(dat);
        this.roomName = `${this.user}+${dat.user}`;
        this.choice = dat;
        let param = {
          rommName: this.roomName
        };
        this.userList.map(item => {
          if (dat.user === item.user) {
            item.num = 0;
          }
        });
        room_chat(param).then(res => {
          if (res.code === 200) {
            this.messageList = res.data;
            this.goBottom();
          } else {
            this.$message.error(res.message);
          }
        })
      },
      send() {
        if (this.roomName) {
          this.socket.emit('room', this.roomName, this.user, this.val);
          this.val = '';
        } else {
          this.$message.warning('没有对象');
        }
      },
      allChatList(list, sta = false) {
        let haveUser = [];
        this.userList.map(item => {
          haveUser.push(item.user);
        });
        list.map(item => {
          if (haveUser.indexOf(item.user) >= 0) {
            this.userList[haveUser.indexOf(item.user)].line = sta;
          } else {
            this.userList.push({...item, line: sta});
          }
        });
        this.userList = [...this.userList];
        console.log(this.userList);
      },
      init() {

        // 大厅全局消息(所有人)
        this.socket.on('all', (code, res) => {
          console.log(res);
          switch (code) {
            case 0:
              this.$message.success(res);
              break;
            case 1:
              let chat = JSON.parse(res);
              this.allChatList(chat, true);
              break;
            default:
              this.$message.info(txt);
          }
        });

        // 个人系统提示
        this.socket.on('tips', (code, txt) => {
          console.log(code, txt);
          switch (code) {
            case 0:
              this.$message.error(txt);
              break;
            default:
              this.$message.info(txt);
          }
        });

        // 房间消息
        this.socket.on('roomMessage', (user, txt) => {
          console.log(user, txt);
          if (this.roomName.indexOf(user) >= 0) {
            this.messageList.push({
              user: {
                user: user,
                head_img: this.userList.filter(item => item.user === user)[0].head_img
              },
              text: txt,
            });
            this.goBottom();
          } else {
            this.userList.map(item => {
              if (item.user === user) {
                !('num' in item) ? item.num = 0 : '';
                item.num += 1;
              }
            });
            this.userList = [...this.userList];
          }
        });

        // 链接大厅
        this.socket.emit('hall', this.user, this.name);

      },
      goBottom() {
        this.$nextTick(() => {
          let chatbox = this.$refs.chatbox;
          chatbox.scrollTop = chatbox.scrollHeight
        });
      },
      getChatList() {
        chat_list().then(res => {
          if (res.code === 200) {
            this.allChatList(res.data);
            this.init();
          } else {
            this.$message.error(res.message);
          }
        })
      }
    },
    created() {
      this.getChatList();
    },
  }
</script>

<style lang="less" scoped>
  @import "http://www.17sucai.com/preview/776331/2018-07-23/AmazeWeixin/css/amazeui.min.css";
  @import "./less/chat.less";
</style>
