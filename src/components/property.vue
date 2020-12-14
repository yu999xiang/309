<template>
  <div id="property">
    <nut-cell
      :title="item.name"
      v-for="item in list"
      :key="item.name"
      @click-cell="clickEvnt(item.name)"
    ></nut-cell>
  </div>
</template>

<script>
import { property } from '@/api/httpApi'
import { mapMutations } from 'vuex'
export default {
  props:{
    num:Number
  },
  data() {
    return {
      list: [],
      switches: {},
    }
  },
  methods: {
    ...mapMutations({
      setNum:'setNum'
    }),
    clickEvnt(name) {
      if(this.num == 3){
        sessionStorage.setItem('equityName', JSON.stringify(name))
      }else{
        this.setNum(name)
      }
      this.$router.go(-1)
    },
    backPage(e) {
      this.$router.go(-1)
    },
    async property() {
      let data = await property()
      this.list = data.data.result.records
      this.list.forEach((item) => {
        this.switches[item.name] = true
      })
    },
  },
  mounted() {
    this.property()
  },
}
</script>

<style>
</style>