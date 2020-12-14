<template>
  <div id="routineTree">
    <div class="routineTree-top"></div>
    <div class="routineTree-center">
        <div class="dady1" v-if="name" >
            <span>(2020-3-21)</span>
        </div>
      <div class="box1">
        <div class="routineTree-center-top">
          <span>日常检查表</span>
          <span class="span"> 执行中(0/78)</span>
        </div>
        <div class="routineTree-center-center">
          <div class="examine">
            <span class="test">日检</span>
            <span>2012.12.23</span>
          </div>
          <div class="examine1">
            <span class="check">待检查</span>
          </div>
        </div>
        <div class="routineTree-center-foot">
          <span>设备项目编码:1234-543-23-23</span>
        </div>
      </div>
      <div class="box2">
        <div class="routineTree-center-center">
          <div class="examine">
            <span class="test">日检</span>
            <span>2012.12.23</span>
          </div>
          <div class="examine1">
            <span class="check">待检查</span>
          </div>
        </div>
        <div class="routineTree-center-foot">
          <span>设备项目编码:1234-543-23-23</span>
        </div>
      </div>
      <div class="box2">
        <div class="routineTree-center-center">
          <div class="examine">
            <span class="test">日检</span>
            <span>2012.12.23</span>
          </div>
          <div class="examine1">
            <span class="check">待检查</span>
          </div>
        </div>
        <div class="routineTree-center-foot">
          <span>设备项目编码:1234-543-23-23</span>
        </div>
      </div>
      <div class="box4"></div>
      <div class="box3">
        <span>查看更多</span>
      </div>
      <div class="box5"></div>
      <div class="box1">
        <div class="routineTree-center-top">
          <span>日常检查表</span>
          <span class="span"> 执行中(0/78)</span>
        </div>
        <div class="routineTree-center-center">
          <div class="examine">
            <span class="test">日检</span>
            <span>2012.12.23</span>
          </div>
          <div class="examine1">
            <span class="check">待检查</span>
          </div>
        </div>
        <div class="routineTree-center-foot">
          <span>设备项目编码:1234-543-23-23</span>
        </div>
      </div>
      <div class="box2">
        <div class="routineTree-center-center">
          <div class="examine">
            <span class="test">日检</span>
            <span>2012.12.23</span>
          </div>
          <div class="examine1">
            <span class="check">待检查</span>
          </div>
        </div>
        <div class="routineTree-center-foot">
          <span>设备项目编码:1234-543-23-23</span>
        </div>
      </div>
      <div class="box2">
        <div class="routineTree-center-center">
          <div class="examine">
            <span class="test">日检</span>
            <span>2012.12.23</span>
          </div>
          <div class="examine1">
            <span class="check">待检查</span>
          </div>
        </div>
        <div class="routineTree-center-foot">
          <span>设备项目编码:1234-543-23-23</span>
        </div>
      </div>
    </div>
    <div class="routineTree-foot"></div>
  </div>
</template>

<script>
export default {
    props:{name:Boolean}
}
</script>

<style lang='less'>
#routineTree {
  width: 100%;
  height: 100%;
  background: #f2f4f3;
  .routineTree-center {
    background: #fff;
    margin-top: 10px;
    box-sizing: border-box;
    border-bottom: solid 1px #ccc;
    .dady1{
        font-size: 17px;
    }
    .box1 {
      border-bottom: #ccc solid 1px;
      padding: 15px;

      .routineTree-center-top {
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        .span {
          color: #eca44b;
        }
      }
      .routineTree-center-center {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        .examine,
        .examine1 {
          font-size: 17px;
          display: flex;
          align-items: center;
          .test {
            display: flex;
            width: 50px;
            height: 30px;
            background: #d7e8f8;
            color: #6797d9;
            justify-content: center;
            margin-right: 10px;
          }
          .check {
            color: #cd706b;
          }
        }
      }
      .routineTree-center-foot {
        margin-top: 10px;
        span {
          font-size: 17px;
        }
      }
    }
    .box2 {
      border-bottom: solid 1px #ccc;
      padding: 15px;

      .routineTree-center-center {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        .examine,
        .examine1 {
          font-size: 17px;
          display: flex;
          align-items: center;
          .test {
            display: flex;
            width: 50px;
            height: 30px;
            background: #d7e8f8;
            color: #6797d9;
            justify-content: center;
            margin-right: 10px;
          }
          .check {
            color: #cd706b;
          }
        }
      }
      .routineTree-center-foot {
        margin-top: 10px;
        span {
          font-size: 17px;
        }
      }
    }
    .box4 {
      width: 100%;
      height: 5px;
      background: #ccc;
    }
    .box3 {
      padding: 15px;

      margin-top: 15px;

      display: flex;
      justify-content: center;
      // align-items: center;
      span {
        height: 20px;
        width: 120px;
        background: #f2f2f2;
        color: #717171;
        font-size: 15px;
        border-radius: 10px;
        text-align: center;
      }
    }
    .box5 {
      width: 100%;
      height: 5px;
      background: #ccc;
    }
  }
}
</style>