<template>
  <div class="hello">
    <view-box>

      <scroller 
        class="my-scroll" 
        :on-refresh="refresh"
        refresh-text="loading"
        ref="my_scroller"
      >
        <swiper
          :list="swiperList"
          v-model="swiperIndex"
          :loop="true"
        >
        </swiper>

        <marquee class="marquee">
            <marquee-item class="marquee-item" v-for="(item, index) in marlist" :key=index>
              {{item.title}}
            </marquee-item>
          </marquee>

        <panel 
          :list="datalist" 
        >
        </panel>
      </scroller>
    </view-box>
  </div>
</template>

<script>
var datalist = []
    for(var i=0; i<10; i++){
      datalist.push({
        src: '../assets/icon_nav_button.png',
        fallbackSrc: '../assets/icon_nav_article.png',
        title: '标题一',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: '/component/cell'
      })
    }


  //接受后台函数式数据
     const artiList = (json) => {
       console.log(json,'-----');
       return json;
     }

import { ViewBox, XHeader, Tabbar, TabbarItem, Tab, TabItem, Swiper, Marquee, MarqueeItem, Panel } from 'vux'

export default {
  name: 'Music',
  components: {
    ViewBox,
    XHeader,
    Tabbar,
    TabbarItem,
    Tab,
    TabItem,
    Swiper,
    Marquee,
    MarqueeItem,
    Panel
  },
  created(){
    this.axios.get('https://api.apiopen.top/musicRankingsDetails?type=1').then( data => {

    //轮播图数据
      this.swiperList = data.data.result.map( item => {
        return {
          url: item.lrclink,
          img: item.album_1000_1000,
          title: item.title
        }
      } )



    //首屏列表新闻数据
    this.datalist = data.data.result.map( item => {
      return {
        src: item.album_1000_1000,
        title: item.title,
        desc: item.si_proxycompany,
        url: item.lrclink
      }
    } )


    //滚动新闻数据
    this.marlist = data.data.result.map( item => {
      return {
        title: item.title
      }
    } )


    } )

  //音乐接口
    // this.axios.get('https://api.apiopen.top/musicRankingsDetails?type=1').then( data => {
    // console.log(data,'=====');

  //段子接口
    // this.axios.get('https://www.apiopen.top/satinApi?type=1&page=1').then( data => {
    // console.log(data,'=====');
// })
  },
  data () {
    
    return {
      swiperList: [],
      swiperIndex:0,
      datalist:[],
      marlist:[],
      title_show:true,
      search_show:false,
      design:"MF Design"
    }
  },
  methods: {
    refresh(){
      // console.log("1");
      this.$jsonp('https://3g.163.com/touch/jsonp/sy/recommend/0-9.html').then( data => {
     
console.log(data);
        //刷新首屏列表新闻数据
        this.datalist = data.news.filter( item => {
          return item.addata === null;
        } ).map( item => {
          return {
            src: item.picInfo[0].url,
            title: item.title,
            desc: item.digest,
            url: item.link
          }
        } )
        this.$refs.my_scroller.finishPullToRefresh();
      })




    },
    modal_show(){
      this.title_show=false,
      this.search_show=true,
      this.$refs.search_focus.focus()
    },
    close_modal(){
      this.title_show=true,
      this.search_show=false,
      this.design="sorry,暂无此功能"
    }
  }
}
</script>

<style scoped lang="less">

  @import '~vux/src/styles/reset.less';

  html,body{
    margin: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
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
    margin-top: 46px;
  }
  .marquee{
    margin: 10px auto;
  }
   .marquee li{
    text-align: left;
    box-sizing: border-box;
    padding-left: 10px;
  }
  .weui-media-box_appmsg .weui-media-box__thumb {
    vertical-align: middle !important;
  }
  .my-scroll{
    padding-bottom: 70px;
    overflow-y: visible;
    height: auto !important;
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



