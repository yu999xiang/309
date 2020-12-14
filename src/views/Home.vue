<template>
  <div id="home">
    <nut-navbar class="header"
    @on-click-back="back"
      >现场机械管理系统
      <i slot="back-icon" class="iconfont icon-weibiaoti6"></i>
      <i slot="more-icon" class="iconfont icon-202"></i>
    </nut-navbar>
    <nut-navbar class="header" :leftShow="false" :rightShow="false" 
      >
      <div @click="click">
        <span>{{name? name : '地铁12号线建设工程'}}</span> 
      <i class="iconfont icon-xiangxia"></i>
      </div>
      
    </nut-navbar>
    <div class="body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { jixie } from '@/api/httpApi'
import BScroll from 'better-scroll'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  data() {
    return {
      list: [],
    }
  },
  computed:{
    ...mapState({
      name: (state) => state.name
    })
  },
  methods: {
    back(){
      this.$router.go(-1)
    },
    async getlist() {
      let data = await jixie()
      this.list = data.data.result.content
    },
    click(){
      this.$router.push({path:'/about'})
    },
    particul(data){
      this.$router.push({name:'Particulars',params: {list:data} })
    },
  },
  mounted() {
    // this.$nextTick(() => {
    //   this.scroll = new BScroll(this.$refs.wrapper, {
    //     click: true,
    //   })
    // })
    this.getlist()
  },
}
</script>

<style lang="less">
#home {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, #2988fe, #fffffd);
  .iconfont {
    font-size: 20px;
  }
  .header {
    color: #fff;
  }
  .nut-navbar {
    background-color: transparent;
  }
  .body{
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  .top {
    flex-shrink: 0;
    margin: 0px 10px;
    height: 42px;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    padding: 0px 10px;
    box-sizing: border-box;
    .red {
      color: red;
    }
  }
  .main {
    flex: 1;
    overflow: scroll;
    margin: 0px 10px;
    margin-top: 10px;
    border-radius: 10px;
    background: #fff;
    padding-top: 10px;
    box-sizing: border-box;
    .content {
      .main-top {
        padding: 0px 10px;
        box-sizing: border-box;
        height: 20px;
        display: flex;
        align-items: center;
        font-weight: 600;
      }
      .main-item {
        border-bottom: 1px solid #c7c7c7;
        padding: 0px 10px;
        box-sizing: border-box;
        height: 110px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        .main-item-one {
          display: flex;
          align-items: center;
          .blue {
            background: #2988fe;
            padding: 2px 5px;
            box-sizing: border-box;
            border-radius: 5px;
            margin-right: 5px;
          }
          .one-text {
            margin-right: 5px;
          }
        }
        .main-item-two {
          display: flex;
          align-items: center;
          .special {
            margin-left: 5px;
            padding: 0px 5px;
            border: 1px solid #b95758;
            color: #b95758;
            box-sizing: border-box;
            background: #fdebf4;
            border-radius: 15px;
            font-size: 12px;
          }
          .big {
            margin-left: 5px;
            padding: 0px 5px;
            border: 1px solid #7d4eb9;
            color: #7d4eb9;
            box-sizing: border-box;
            background: #e9e9f9;
            border-radius: 15px;
            font-size: 12px;
          }
          .noperfect {
            margin-left: 5px;
            padding: 0px 5px;
            border: 1px solid #c7c7c7;
            color: #c7c7c7;
            box-sizing: border-box;
            background: #fdfdfd;
            border-radius: 15px;
            font-size: 12px;
          }
        }
        .main-item-three {
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
   }
}
</style>
