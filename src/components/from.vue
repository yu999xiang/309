<template>
  <div id="from">
    <div class="left">
      <div :class=" name == '租凭' ? 'left-item active':'left-item'" @click="click('租凭')">租凭</div>
      <div :class=" name == '私有' ? 'left-item active':'left-item'" @click="click('私有')">私有</div>
      <div :class=" name == '分包自带' ? 'left-item active':'left-item'" @click="click('分包自带')">分包自带</div>
    </div>
    <div class="right">
      <div class="right-item" v-for="item in list[name]" :key="item.name" @click="close(item.name)">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      name: '租凭',
      list:{
        '租凭':[
          {
            name:'无'
          },
          {
            name:'临时'
          }
        ],
        '私有':[
          {
            name:'无'
          },
          {
            name: '调拨'
          }
        ],
        '分包自带':[
          {
            name:'无'
          },
          {
            name:'临时'
          }
        ],
      }
    }
  },
  methods:{
    click(name){
      this.name = name
    },
    ...mapMutations({
      setfromName: 'setfromName'
    }),
    close(name){
      this.setfromName(this.name + '-' + name)
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less">
#from {
  width: 100%;
  height: 100%;
  display: flex;
  .left {
    flex-shrink: 0;
    flex: 3;
    background: #f4f6f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    .left-item {
      margin-top: 10px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .active {
      color: #2988fe;
      border-bottom: 1px solid #2988fe;
    }
  }
  .right {
    flex: 7;
    padding: 10px;
    box-sizing: border-box;
    .right-item {
      margin-top: 20px;
    }
  }
}
</style>