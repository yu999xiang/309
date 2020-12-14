<template>
  <div id="about">
    <nut-navbar class="header" :style="{marginLeft: num * 40 }" @on-click-back="back" 
      >组织结构
      <i slot="back-icon" class="iconfont icon-zuo"></i>
      <i slot="more-icon" class="iconfont icon-202"></i>
    </nut-navbar>
    <div class="search">
      <div class="search-main">
        <i class="iconfont icon-search"></i>
        <input type="text" class="input" placeholder="按名称过滤" />
      </div>
    </div>
    <div class="main" >
      <Dendrogram :data="list" ref="dendrogram" />
    </div>
  </div>
</template>

<script> 
import Dendrogram from '@/components/dendrogram'
import { navigate } from '@/api/httpApi'
export default {
  components:{
    Dendrogram
  },
  data() {
    return {
      list: [],
      show1: true,
      val: '',
      local: '',
      num: 1,
    }
  },
  methods: {
    async getlist() {
      let data = await navigate()
      this.list = data.data.result.childNodes
      console.log(data.data.result)

      // this.$refs.dendrogram.click()

      //   <div class="main-item">
      //    <div class="main-item-header">
      //       <i class="iconfont icon-xiangshang" v-show="true"></i>
      //       <i class="iconfont icon-xiangxia1" v-show="false"></i>
      //       <span>{{}}</span>
      //    </div>
      //  </div>

    },
    back(){
      this.$router.go(-1)
    }
  },
  mounted() {
    this.getlist()
  },
}
</script>

<style lang="less">
#about {
  width: 100%;
  height: 100%;
  .header {
    background: #2a87fe;
    color: #fff;
  }
  .iconfont {
    font-size: 20px;
  }
  .search {
    width: 100%;
    height: 50px;
    padding: 10px 20px;
    box-sizing: border-box;
    background: #f2f1f7;
    .search-main {
      height: 100%;
      background: #ffffff;
      border-radius: 2px;
      padding: 0px 5px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      .input {
        font-size: 15px;
        height: 100%;
        flex: 1;
        border: none;
        outline: none;
      }
    }
  }
  .main{
    .main-item{
      .main-item-header{
        margin-left: 20px;
      }
    }
  }
}
</style>
