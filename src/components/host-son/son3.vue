<template>
  <div class="son">
    <div class="list">
        <p>履带式起重机 QUY80A</p>
        <div>QZJ-08-082-Z390 <p>信息完善</p></div>
        <ul>
            <li>机械来源: 租赁</li>
            <li>进厂日期: 2020-11-12</li>
        </ul>
    </div>
    <div class="list">
        <p>履带式起重机 QUY80A</p>
        <div>QZJ-08-082-Z390 <p>信息完善</p></div>
        <ul>
            <li>机械来源: 租赁</li>
            <li>进厂日期: 2020-11-12</li>
        </ul>
    </div>
    <div class="list">
        <p>履带式起重机 QUY80A</p>
        <div>QZJ-08-082-Z390 <p>信息完善</p></div>
        <ul>
            <li>机械来源: 租赁</li>
            <li>进厂日期: 2020-11-12</li>
        </ul>
    </div>
    <div class="list">
        <p>履带式起重机 QUY80A</p>
        <div>QZJ-08-082-Z390 <p>信息完善</p></div>
        <ul>
            <li>机械来源: 租赁</li>
            <li>进厂日期: 2020-11-12</li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
*{
    margin: 0;
    padding: 0;
}
.son {
  .list {
    height: 110px;
    width: 100%;
    border-bottom: #ccc solid 2px;
    padding-top: 18px;
    padding-left: 15px;
    box-sizing: border-box;
    padding-right: 18px;
    &>p{
        font-size: 15px;
    }
    &>div{
        display: flex;
        font-size: 13px;
        margin-top: 5px;
        &>p{
            width: 55px;
            height: 17px;
            border: solid 2px #cccccc;
            color: #cccccc;
            margin-left: 5px;
            text-align: center;
            line-height: 17px;
            border-radius: 10px;
        }
    }
    &>ul{
        display: flex;
        justify-content: space-between;
        font-size: 15px;
        margin-top: 5px;
    }
  }
}
</style>