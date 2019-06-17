<template>
  <div id="app">
    <view-box>
      <x-header
      slot="header"
        :left-options="{showBack:false}"
      >
      <div slot="left" @click="goBack">返回</div>
      <div>
        <span v-show="title_show">{{design}}</span>
        <div v-show="search_show"><input ref="search_focus" class="search" type="text" placeholder="MF Design">
          <span @click="close_modal">GO</span>
        </div>
      </div>
      <div slot="right" @click="modal_show">搜索</div>
      </x-header>


      <tab class="tab">
        <tab-item selected><router-link to="/" class="link">新闻</router-link></tab-item>
        <tab-item><router-link to="/music" class="link">音乐</router-link></tab-item>
        <tab-item><router-link to="/gaoxiao" class="link">搞笑</router-link></tab-item>
        <tab-item>环球</tab-item>
        <tab-item>视频</tab-item>
        <tab-item>搞笑</tab-item>
        <tab-item>更多</tab-item>
      </tab>

    <router-view/>

    <tabbar slot="bottom">
      <tabbar-item>
        <img src="./assets/icon_nav_button.png" slot="icon">
        <span slot="label">Wechat</span>
      </tabbar-item>
      <tabbar-item>
        <img src="./assets/icon_nav_cell.png" slot="icon">
        <span slot="label">shopping</span>
      </tabbar-item>
      <tabbar-item>
        <img src="./assets/icon_nav_msg.png" slot="icon">
        <span slot="label">technolege</span>
      </tabbar-item>
      <tabbar-item>
        <img src="./assets/icon_nav_article.png" slot="icon">
        <span slot="label">more</span>
      </tabbar-item>
    </tabbar>
    </view-box>
  </div>
</template>

<script>

import { ViewBox, XHeader, Tabbar, TabbarItem, Tab, TabItem } from 'vux'

export default {
  name: 'App',
  components: {
    ViewBox,
    XHeader,
    Tabbar,
    TabbarItem,
    Tab,
    TabItem
  },
  data (){
    return {
      title_show:true,
      search_show:false,
      design:"MF Design"
    }
  },
  methods: {
    modal_show(){
      this.title_show=false,
      this.search_show=true,
      this.$refs.search_focus.focus()
    },
    close_modal(){
      this.title_show=true,
      this.search_show=false,
      this.design="sorry,暂无此功能"
    },
    goBack(){
      window.history.length > 1 ? this.$router.go(-1):this.$router.push('/')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
    height: 100%;
    width: 100%;
}
html,body{
    margin: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }
  .weui-media-box__hd img, .weui-media-box__hd{
    width: 102px !important;
    height: 78px !important;
  }
  h4.weui-media-box__title{
    margin-top: 0;
  }
  
  .loading-layer{
    padding-bottom: 90px;
  }
  .weui-tabbar{
    position: fixed !important;
  }
  .weui-media-box__desc{
    text-decoration: none !important;
  }



  .link{
    color: #666;
    text-decoration: none;
  }

  .hello{
    height: 100%;
  }

  .vux-header{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .tab{
    overflow-x: visible;
    /* margin-top: 46px; */
  }
  
  .search{
    width: 140px;
    height: 25px;
    border: none;
    border-radius: 30px;
    box-sizing: border-box;
    padding-left: 10px;
    outline: none;
    margin-right: 10px;
  }
</style>
