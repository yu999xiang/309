<template>
  <div id="add">
    <nut-navbar
      @on-click-back="back"
      :leftShow="true"
      :rightShow="true"
      class="header"
    >
      新增机械
      <i slot="back-icon" class="iconfont icon-zuo"></i>
      <i slot="more-icon" class="iconfont icon-202"></i>
    </nut-navbar>
    <div class="step">
      <div class="step-top">
        <div class="step-top-item active"></div>
        <div class="step-top-wire"></div>
        <div class="step-top-item"></div>
      </div>
      <div class="step-top">
        <div>基本信息</div>
        <div class="step-bottom"></div>
        <div>完善信息</div>
      </div>
    </div>
    <div class="box"></div>
    <div class="main">
      <div class="mian-content">
        <div class="reminder" v-show="isclose">
          <div class="reminder-main">
            <div>
              <span class="red">*</span> 红色星号为必填项
              <span class="empty"></span>
              <span class="blue">*</span> 蓝色星号为完善项
            </div>
            <div @click="close">×</div>
          </div>
        </div>
        <div class="mian-item">
          <nut-cell :is-link="true" :show-icon="true">
            <span slot="title">机械类别<span class="red">*</span></span>
            <span slot="desc" @click="click(1)">{{
              obj.categoryName ? obj.categoryName : '请选择'
            }}</span>
          </nut-cell>

          <nut-cell :is-link="true" :show-icon="true">
            <span slot="title">机械名称-型号<span class="red">*</span></span>
            <span slot="desc" @click="click(2)">{{
              obj.categoryCode ? obj.categoryCode : '请选择'
            }}</span>
          </nut-cell>

          <nut-cell :is-link="true">
            <span slot="title">项目设备编码<span class="red">*</span></span>
            <span slot="desc">{{
              obj.facilityCode ? obj.facilityCode : '请填写'
            }}</span>
          </nut-cell>

          <nut-cell :is-link="true" :show-icon="true">
            <span slot="title">机械来源<span class="red">*</span></span>
            <span slot="desc" @click="click(4)">{{
              obj.fromName ? obj.fromName : '请选择'
            }}</span>
          </nut-cell>

          <nut-cell :is-link="true" :show-icon="true">
            <span slot="title">产权单位<span class="red">*</span></span>
            <span slot="desc" @click="click(3)">{{
              obj.equityName ? obj.equityName : '请选择'
            }}</span>
          </nut-cell>

          <nut-cell :is-link="true">
            <span slot="title">车牌号</span>
            <span slot="desc">{{
              obj.licenseCode ? obj.licenseCode : '请填写'
            }}</span>
          </nut-cell>

          <nut-cell :is-link="true">
            <span slot="title">现场照片</span>
          </nut-cell>
          <div class="picture">
            <nut-uploader
              :name="name"
              :url="url"
              :xhrState="stateNum"
              :isPreview="true"
              @success="demoSuccess"
              @fail="demoFail"
              @preview="preview"
              @showMsg="showMsg1"
            >
            <div class="pick">
              <i class="iconfont icon-mn_shangchuantupian"></i>
            </div>
            </nut-uploader>
          </div>
          <div class="box"></div>

          <nut-cell :is-link="true">
            <span slot="title">实际进场日期<span class="red">*</span></span>
            <span slot="desc" @click="date(1)"
              >{{ obj.datetime ? obj.datetime : '' }} <i class="iconfont icon-date"></i>
            </span>
          </nut-cell>

          <nut-cell :is-link="true">
            <span slot="title">拟退场日期</span>
            <span slot="desc" @click="date(-1)"
              >{{ exittime ? exittime : '' }} <i class="iconfont icon-date"></i>
            </span>
          </nut-cell>

          <nut-cell :is-link="true" :show-icon="true">
            <span slot="title">设备管理员</span>
            <span slot="desc" @click="click">{{
              obj.administrator ? obj.administrator : '请选择'
            }}</span>
          </nut-cell>

          <nut-cell :is-link="true" :show-icon="true">
            <span slot="title">使用单位<span class="red">*</span></span>
            <span slot="desc" @click="click(5)">{{
              obj.employName ? obj.employName : '请选择'
            }}</span>
          </nut-cell>

          <nut-cell :is-link="true" :show-icon="true">
            <span slot="title">安装拆除单位</span>
            <span slot="desc" @click="click">{{
              obj.dismantleName ? obj.dismantleName : '请选择'
            }}</span>
          </nut-cell>

          <div class="picture">
            用途
          </div>

          <div class="btn" @click="save">
            保存并继续
          </div>

          <nut-datepicker
            :is-visible="isVisible"
            type="date"
            title="请选择日期"
            @close="switchPicker('isVisible')"
            @choose="setChooseValue"
          >
          </nut-datepicker>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      isclose: true,
      isVisible: false,
      exittime: '',
      name: '',
      url: './',
      stateNum: 0,
      obj: {
        categoryName: JSON.parse(sessionStorage.getItem('categoryName')),
        categoryCode: JSON.parse(sessionStorage.getItem('categoryCode')),
        facilityCode: JSON.parse(sessionStorage.getItem('facilityCode')),
        fromName: '',
        equityName: JSON.parse(sessionStorage.getItem('equityName')),
        licenseCode: '',
        datetime: '',
        administrator: '',
        employName: '',
        dismantleName: '',
      },
      num: 0,
    }
  },
  computed:{
    ...mapState({
      fromName: (state)=> state.fromName,
      employName: (state)=> state.num 
    })
  },
  mounted(){
    this.obj.fromName = this.fromName
    this.obj.employName = this.employName
  },
  methods: {
    // 保存点击判断
    save(){
      if(!this.obj.categoryName){
        this.$notify.warn('机械类别为必选，请选择');
      }else if (!this.obj.categoryCode){
        this.$notify.warn('机械名称-型号为必选，请选择');
      }else if (!this.obj.facilityCode){
        this.$notify.warn('项目设备编码为必选，请选择');
      }else if (!this.obj.fromName){
        this.$notify.warn('机械来源为必选，请选择');
      }else if (!this.obj.equityName){
        this.$notify.warn('产权单位为必选，请选择');
      }else if (!this.obj.datetime){
        this.$notify.warn('实际进场日期为必选，请选择');
      }else if (!this.obj.employName){
        this.$notify.warn('使用单位为必选，请选择');
      }
    },
    // 日历出现
    date(code) {
      this.num = code
      this.isVisible = !this.isVisible
    },
    // 日历关闭
    switchPicker(param) {
      console.log(param);
      this[`${param}`] = !this[`${param}`]
    },
    // 日历关闭改变数据
    setChooseValue(param) {
      console.log(param);
      if (this.num > 0) {
        this.obj.datetime = param[3]
      } else {
        this.exittime = param[3]
      }
    },
    clickEvnt() {},
    // 返回上一级点击
    back() {
      this.$router.go(-1)
    },
    // 跳到下一级并拿到数据
    click(e) {
      this.$router.push({ name: 'List', params: { code: e } })
    },
    // 关闭提示*
    close(){
      this.isclose = false;
    },
    // 上传图片
    demoSuccess(e){
      console.log(e);
    },
    demoFail(e){
      console.log(e);
    },
    preview(e){
      console.log(e);
    },
    showMsg1(e){
      console.log(e);
    }
  },
}
</script>

<style lang="less">
#add {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .red {
    color: red;
  }
  .blue {
    color: blue;
  }
  .header {
    background: #2a87fe;
    color: #fff;
  }
  .iconfont {
    font-size: 15px;
  }
  .step {
    padding: 15px 30px;
    box-sizing: border-box;
    .step-top {
      margin-bottom: 10px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      .step-top-item {
        margin: 0px 20px;
        width: 15px;
        height: 12px;
        background: #ddd;
        border-radius: 10px;
      }
      .step-top-wire {
        width: 80%;
        height: 2px;
        background: #ddd;
      }
      .active {
        width: 15px;
        height: 12px;
        background: #2a87fe;
        box-shadow: 0px 0px 10px #2a87fe;
        border-radius: 10px;
      }
      .step-bottom {
        width: 69%;
      }
    }
  }
  .box {
    width: 100%;
    height: 8px;
    background: #ddd;
  }
  .main {
    flex: 1;
    overflow: scroll;
    .mian-content {
      overflow: scroll;
      .reminder {
        padding: 10px 20px;
        .reminder-main {
          height: 28px;
          width: 100%;
          background: #fff1d6;
          border-radius: 5px;
          border: 1px solid #000;
          padding: 0px 10px;
          box-sizing: border-box;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .empty {
            width: 10px;
          }
        }
      }
      .mian-item {
        .picture {
          height: 80px;
          padding: 10px 10px;
          color: #ddd;
          box-sizing: border-box;
          .pick{
            margin: 0px 10px;
          }
        }
        .btn{
          height: 50px;
          color: #fff;
          background: #2a87fe;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .date {
          height: 80px;
        }
      }
    }
  }
}
</style>