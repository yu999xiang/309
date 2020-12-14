<template>
  <div id="routine">
    <div class="routine-top">
      <nut-navbar
        @on-click-back="back"
        :leftShow="true"
        :rightShow="true"
        class="header"
        >日常检查
        <i slot="back-icon" class="iconfont icon-zuo"></i>
        <i slot="more-icon" class="iconfont icon-202"></i>
      </nut-navbar>
      <div class="routine-top-foot">
        <ul>
          <li :class="{ active: show == 1 }" @click="active1">今日任务</li>
          <li :class="{ active: show == 2 }" @click="active2">周任务</li>
        </ul>
      </div>
    </div>
    <div class="routine-center">
        <RoutineTree :name="false" v-if="show == 1 "/>
         <RoutineTree :name='true' v-else />
    </div>
    <div class="routine-foot"></div>
  </div>
</template>

<script>
import RoutineTree from '../components/routineTree.vue'
export default {
  components: { RoutineTree },
  data() {
    return {
      show:'',
    }
  },
   methods: {
     back(){
       this.$router.go(-1)
     },
    active1: function () {
      this.show = 1
    },
    active2: function () {
      this.show = 2
    },
  },
}
</script>

<style lang='less'>
#routine {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #ccc;
  .routine-top {
    .nut-navbar {
      height: 60px;
      background: #2988fc;
    }
    .iconfont {
      font-size: 15px;
    }

    .routine-top-foot {
      height: 40px;
      background: #fff;
      ul {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        li {
          height: 40px;
          flex: 1;
          font-size: 17px;
          color: #2988fc;
          display: flex;
          justify-content: center;
          align-items: center;
        }
         .active {
            width: 50px;
            height: 40px;
            text-align: center;
            line-height: 40px;
            border-bottom:2px solid #2988fc;
          }
      }
    }
  }
  .routine-center {
    flex: 1;
    overflow: scroll;
  }
  .routine-foot {
    height: 60px;
    background: yellow;
  }
}
</style>