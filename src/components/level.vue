<template>
  <div id="level">
    <div class="top">
      <span slot="back-icon">待办事项</span>
      <span slot="more-icon" class="red">·待审核机械40</span>
    </div>
    <div class="main" ref="wrapper">
      <div class="content">
        <div class="main-top">最新登记机械</div>
        <div class="main-item" v-for="item in list" :key="item.id" @click="particul(item)">
          <div class="main-item-one">
            <span class="blue">使用中</span>
            <div class="one-text">{{ item.machineryTypeName }}</div>
            <div>{{ item.specification }}</div>
          </div>
          <div class="main-item-two">
            <div>{{ item.projectEquipmentCode }}</div>
            <span class="special" v-if="item.remark.includes('特')">特种</span>
            <span class="big" v-if="item.remark.includes('大')">大型</span>
            <span class="noperfect">信息未完善</span>
          </div>
          <div class="main-item-three">
            <div>{{ item.projectName }}</div>
            <div>进场时间:{{ item.actualApproachDate }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { jixie } from '@/api/httpApi'
export default {
data() {
    return {
      list: [],
    }
  },
  methods: {
    async getlist() {
      let data = await jixie()
      this.list = data.data.result.content
    },
    particul(data){
      this.$router.push({name:'Particulars',params: {list:data} })
    },
  },
  mounted() {
    this.getlist()
  },
}
</script>

<style>
#level{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
</style>