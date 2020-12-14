<template>
  <div id="list">
    <nut-navbar
      @on-click-back="back"
      :leftShow="true"
      :rightShow="true"
      class="header"
    >
      {{name}}
      <i slot="back-icon" class="iconfont icon-zuo"></i>
      <i slot="more-icon" class="iconfont icon-202"></i>
    </nut-navbar>
    <div class="search">
      <div class="search-main">
        <i class="iconfont icon-search"></i>
        <input type="text" class="input" placeholder="按名称过滤" />
      </div>
    </div>
    <div class="main">
      <Mechanical v-if="code == 1" />
      <Names v-if="code == 2" />
      <Property v-if="code == 3 || code == 5" :num='code' />
      <From v-if="code == 4" />
      <Error v-else />
    </div>
  </div>
</template>

<script>
import Mechanical from '@/components/mechanical'
import Property from '@/components/property'
import Names from '@/components/names'
import From from '@/components/from'
import Error from '@/components/error'
export default {
  components:{
    Mechanical,
    Property,
    Names,
    From,
    Error
  },
  data(){
    return {
      code: 0,
      name: '',
    }
  },
  methods: {
    back(){
      this.$router.go(-1)
    },
  },
  mounted(){
    let code = this.$route.params.code
    this.code = code 
    if(code == 1){
      this.name = '机械类别'
    }else if(code == 2){
      this.name = '机械名称-型号'
    }else if(code == 3){
      this.name = '产权单位'
    }else if(code == 4){
      this.name = '机械来源'
    }else if(code == 5){
      this.name = '使用单位'
    }
  }
}
</script>

<style lang="less">
#list {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .main {
    flex: 1;
    overflow: scroll;
    
  }

  .header {
    background: #2a87fe;
    color: #fff;
  }
  .iconfont {
    font-size: 15px;
    margin-right: 10px;
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
}
</style>