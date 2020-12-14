<template>
  <div id="host">
    <div class="search">
      <i class="iconfont icon-saomiao"></i>
      <div class="search-main">
        <input
          type="text"
          class="search-arr"
          placeholder="搜索机械名称/规格型号/项目设备编码"
          :value="val"
        />
      </div>
      <i class="iconfont icon-loudou" :showIcon="true" @click="showPopup"></i>
    </div>
    <div class="top">
      <div @click="num = 0" class="active every">全部</div>
      <div @click="num = 1" class="every">未申报</div>
      <div @click="num = 2" class="every">待审核</div>
    </div>
    <div id="main">
      <Son1 v-if="num === 0" />
      <Son2 v-if="num === 1" />
      <Son3 v-if="num === 2" />
      
    </div>
    <div class="footer">
      <div class="footer-text" @click="wancheng" >
        <i class="iconfont icon-wancheng"></i>
        日常检查
      </div>
      <div class="circle">
        <div class="circle-main" @click="click">
          <i class="iconfont icon-jia"></i>
        </div>
      </div>
      <div class="footer-text" @click="fengkuan">
        <i class="iconfont icon-fengkuangdaqiqiu"></i>
        吊装作业
      </div>
    </div>
    <nut-popup
      :style="{ padding: '30px 50px', height: '100%', width: '60%' }"
      v-model="show"
      position="right"
    >
      <div class="hostList">
        状态
        <ul>
          <li
            v-for="(item,key) in page"
            :key="key"
            :class="item.flag ? 'active' : ''"
            @click="active(key)"
          >
            {{ item.name }}
          </li>
        </ul>
        属性
        <ul>
          <li
            v-for="item in arr1"
            :key="item"
          >
            {{ item }}
          </li>
        </ul>
        来源
        <ul>
          <li
            v-for="item in arr2"
            :key="item"
          >
            {{ item }}
          </li>
        </ul>
      </div>
      <nut-buttongroup style="position:absolute,bottom:0">
        <nut-button type="light" style="background: #eee"> 重置 </nut-button>
        <nut-button @click="sure"> 确定 </nut-button>
      </nut-buttongroup>
    </nut-popup>
  </div>
</template>

<script>
import Son1 from '@/components/host-son/son1'
import Son2 from '@/components/host-son/son2'
import Son3 from '@/components/host-son/son3'
export default {
  data() {
    return {
      components:{
        Son1,
        Son2,
        Son3
      },
      num: 0,
      val: "",
      show: false,
      page: {
        str: {
          name: "未申报",
          flag: false,
        },
        str1: {
          name: "待审核",
          flag: false,
        },
        str2: {
          name: "使用中",
          flag: false,
        },
        str3: {
          name: "已停用",
          flag: false,
        },
        str4: {
          name: "正在维保",
          flag: false,
        },
        str5: {
          name: "已退场",
          flag: false,
        },
      },
      arr1: ["特种机械", "大型机械", "其他机械"],
      arr2: ["自有", "租赁", "分包自带"],
    };
  },
  methods: {
    click() {
      this.$router.push({ path: "/add" });
    },
    showPopup() {
      this.show = true;
    },
    active(key) {
      for(let i in this.page){
      this.page[i].flag = false
      }
      this.val =  this.page[key].name
      this.page[key].flag = true
    },
    sure(){
      this.show = false
    },
    wancheng(){
      this.$router.push({
        path:'/routine'
      })
    },
    fengkuan(){
      
    },
  },
};
</script>

<style lang="less">
#host {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, #2988fe, #fffffd);
  .search {
    height: 40px;
    background: #fff;
    padding: 5px 0px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-evenly;
    .search-main {
      width: 270px;
      .search-arr {
        width: 100%;
        height: 100%;
        padding: 0px 10px;
        box-sizing: border-box;
        outline: none;
        border: none;
        background: #f6f6f6;
        border-radius: 50px;
      }
    }
    .iconfont {
      color: #f6f6f6;
    }
  }
  .top {
    justify-content: space-evenly !important;
    margin: 0px !important;
    border-radius: 0px !important;
    .active {
      border-bottom: 1px solid #2988fe;
    }
    .every {
      flex: 1;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  #main {
    flex: 1;
    overflow: scroll;
    background: #fff;
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
  .footer {
    height: 30px;
    background: #f6f6f6;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
    color: #2988fe;
    .footer-text {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .circle {
      width: 50px;
      height: 50px;
      border-radius: 75px;
      background: #f6f6f6;
      display: flex;
      justify-content: center;
      align-items: center;
      .circle-main {
        width: 40px;
        height: 40px;
        background: #2988fe;
        border-radius: 75px;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
      }
    }
  }
  .hostList {
    & > ul {
      height: 100px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-content: space-around;
      & > li {
        width: 60px;
        height: 20px;
        background: #eee;
        text-align: center;
        line-height: 20px;
        border-radius: 20px;
      }
      .active {
        background: blue;
        color: #fff;
      }
    }
  }
  .nut-buttongroup {
    position: absolute !important;
    bottom: 30px !important;
    left: 0;
  }
}
</style>
