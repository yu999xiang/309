<template>
  <div id="particulars">
    <nut-navbar class="header"
    @on-click-back="back" 
      >机械档案
      <i slot="back-icon" class="iconfont icon-zuo"></i>
      <i slot="more-icon" class="iconfont icon-202"></i>
    </nut-navbar>
    <div class="top">
      <div class="main-item-one">
        <span class="blue">使用中</span>
        <div class="one-text">{{ list.machineryTypeName }}</div>
        <div>{{ list.specification }}</div>
      </div>
      <div class="main-item-two">
        <div>{{ list.projectEquipmentCode }}</div>
        <span class="special" v-if="list.remark.includes('特')">特种</span>
        <span class="big" v-if="list.remark.includes('大')">大型</span>
        <span class="noperfect">信息未完善</span>
      </div>
      <div class="main-item-three">
        <div class="main-ever">所属工点{{ list.projectName }}</div>
        <div class="main-ever">进场日期:{{ list.actualApproachDate }}</div>
      </div>
      <div class="main-item-three">
        <div class="main-ever">申报人:{{ list.createBy }}</div>
        <div class="main-ever">申报时间:{{ list.createTime }}</div>
      </div>
    </div>
    <div class="main-content">
      <div class="main-header">
        <div class="main-header-every click">设备信息</div>
        <div class="main-header-every">设备资料</div>
        <div class="main-header-every">检查及维保</div>
        <div class="main-header-every">更多信息</div>
      </div>
      <div class="main-main">
        <div class="item">
          基本信息
          <div class="item-every" v-for="item in arr" :key="item.name">
            <div class="left">{{item.name}}</div>
            <div class="right">{{list[item.value]}}</div>
          </div>
        </div>
        <div class="item">
          基本信息
          <div class="item-every" v-for="item in arr" :key="item.name">
            <div class="left">{{item.name}}</div>
            <div class="right">{{list[item.value]}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: {
        remark: '',
      },
      arr:[
        {
          name: '机械名称',
          value: 'machineryTypeName'
        },
        {
          name: '规格型号',
          value: 'specification'
        },
        {
          name: '项目设备编码',
          value: 'projectEquipmentCode'
        },
        {
          name: '属性',
          value: 'remark'
        },
      ],
      array:[
        {
        name: '实际进场日期',
        value: 'updateTime',
        },
        {
        name: '拟退场日期',
        value: '',
        },
        {
        name: '设备管理员',
        value: 'updateBy',
        },
        {
        name: '使用单位',
        value: '',
        },
      ]
    }
  },
  methods:{
    back(){
      this.$router.go(-1)
    }
  },
  mounted() {
    this.list = this.$route.params.list
  },
}
</script>

<style lang="less">
#particulars {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .header {
    background: #2a87fe;
    color: #fff;
  }
  .iconfont {
    font-size: 20px;
  }
  .top {
    flex-shrink: 0;
    height: 180px;
    padding: 0px 10px;
    box-sizing: border-box;
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
      .main-ever {
        flex: 1;
      }
    }
  }
  .main-content{
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .main-header{
      height: 45px;
      display: flex;
      font-size: 15px;
      .main-header-every{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .click{
        color: #2988fe;
        border-bottom: 2px solid #2988fe;
        box-sizing: border-box;
      }
    }
    .main-main{
      overflow: scroll;
      flex: 1;
      background: #f6f6f6;
      padding: 10px;
      box-sizing: border-box;
      .item{
        padding: 30px 15px;
        box-sizing: border-box;
        margin-bottom: 10px;
        border-radius: 10px;
        background: #fff;
        .item-every{
          margin-top: 20px;
          display: flex;
          .left{
            flex: 4;
            color: #ccc;
          }
          .right{
            flex: 6;
          }
        }
      }
    }
  }
}
</style>