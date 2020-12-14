<template>
  <div class="operation">
    <nut-navbar
      class="header"
      :style="{ marginLeft: num * 40 }"
      @on-click-back="back"
      >吊装作业情况
      <i slot="back-icon" class="iconfont icon-zuo"></i>
      <i slot="more-icon" class="iconfont icon-202"></i>
    </nut-navbar>
    <div class="head">
      <div class="txtTime" @click="timex">
        2002.8.17 <i class="iconfont icon-xiangxia1"></i>
      </div>
      <nut-datepicker
        :is-visible="isVisible1"
        title="请选择日期"
        type="date"
        startDate="1991-11-10"
        endDate="2019-10-05"
        @close="switchPicker('isVisible1')"
        @choose="setChooseValue1"
      >
      </nut-datepicker>
      <div class="checkbox1">
        <nut-checkbox v-model="checkbox1"> 只看未生效 </nut-checkbox>
      </div>
    </div>
    <div class="Lifting">
      <div>汽车起重机吊装令</div>
      <div>(0)</div>
    </div>
    <div class="crawler">
      <div class="crawlertit">
        <div>履带式起重机吊装令</div>
        <div>(3)</div>
      </div>
      <div class="each">
        <div class="each-left">
          <p>11:00</p>
          <p class="cool">13:00</p>
        </div>
        <div class="each-right">
          <div class="each-right-top">
            <div>2020.11.30 履带式起重机 QUY50A</div>
            <div class="invalid" v-if="lefts">未生效</div>
          </div>
          <div class="each-right-bot">
            <div class="each-right-botL">项目设备编码：QZJ-08-078-Z386</div>
            <div class="each-right-botR">司机：袁大杰</div>
          </div>
        </div>
      </div>
      <div class="each">
        <div :class="lefts ? 'each-left' : 'each-lefts'">
          <p>11:00</p>
          <p class="cool">13:00</p>
        </div>
        <div class="each-right">
          <div class="each-right-top">
            <div>2020.11.30 履带式起重机 QUY50A</div>
            <div class="invalid" v-if="!lefts">未生效</div>
          </div>
          <div class="each-right-bot">
            <div class="each-right-botL">项目设备编码：QZJ-08-078-Z386</div>
            <div class="each-right-botR">司机：袁大杰</div>
          </div>
        </div>
      </div>
      <div class="portal">
            <div>门式起重机吊装令</div>
        <div>(0)</div>
      </div>
            <div class="tower">
            <div>塔式起重机吊装令</div>
        <div>(0)</div>
      </div>
   
    </div>
       <div class="bgcolor"></div>
  </div>
</template>

<script>
export default {
  name: "Operation",
  data() {
    return {
      num: 1,
      isVisible1: false,
      date: null,
      date1: null,
      datetime: "2018-11-02 11:08",
      time: "01:07",
      time1: "09:06",
      time2: "10:30",
      amOrPm: "PM",
      checkbox1: "",
      lefts:false
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    switchPicker(param) {
      this[`${param}`] = !this[`${param}`];
    },
    setChooseValue1(param) {
      this.date1 = param[3];
    },
    timex() {
      this.isVisible1 = true;
    },
  },
};
</script>

<style lang="scss">
.operation {
  width: 100%;
  height: 100%;
  .header {
    background: #2a87fe;
    color: #fff;
  }
  .head {
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .txtTime {
      font-size: 12px;
      color: #2b89fc;
      padding: 18px 0 22px 17px;
    }
  }
  .Lifting,.portal,.tower {
    border-bottom: 10px solid #f5f3f4;
    border-top: 10px solid #f5f3f4;
    padding: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    &:last-child{
        border-top: none;
    }
  }
  .crawler {
    display: flex;
    flex-direction: column;
    .crawlertit {
      padding: 17px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 12px;
    }
    .each {
      padding: 16px;
      display: flex;
      align-items: center;
      border-bottom: solid 2px #ececec;
      //   justify-content: space-between;
      .each-left {
        border-right: 3px #40ba00 solid;
        padding-right: 8px;
        .cool{
            color: #ccc;
        }
      }
      .each-lefts {
        border-right: 3px red solid;
        padding-right: 8px;
        .cool{
            color: #ccc;
        }
      }
      .each-right {
        flex: 1;
        padding-left: 8px;
        .each-right-top {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          .invalid{
              color: red;
          }
        }
      }
      .each-right-bot {
        display: flex;
        justify-content: space-between;
        .each-right-botR {
          width: 70px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
      }
    }
  }
//   .tower{
//          border-bottom: 10px solid #f5f3f4;
//     padding: 18px;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     font-size: 12px;
//   }
.bgcolor{
    height: 100%;
    background-color:#f5f3f4 ;
    flex: 1;
}
}
</style>