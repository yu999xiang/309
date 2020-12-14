<template>
  <div id="names">
    <nut-cell
      :title="item.name+ '  ' + item.specification"
      :desc=" '单位：' + item.unit"
      v-for="item in list"
      :key="item.id"
      @click-cell="clickEvnt(item)"
    ></nut-cell>
  </div>
</template>

<script>
import { names } from '@/api/httpApi'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      list: [],
      switches: {},
    }
  },
  computed:{
    ...mapState({
      id: (state) =>state.id
    })
  },
  methods: {
    clickEvnt(data) {
      sessionStorage.setItem('facilityCode', JSON.stringify(data.specification))
      sessionStorage.setItem('categoryCode', JSON.stringify(data.name + '  ' + data.specification))
      this.$router.go(-1)
    },
    backPage(e) {
      this.$router.go(-1)
    },
    async names() {
      let data = await names({
        id: this.id
      })
      this.list = data.data.data.result.records
      console.log(data.data.data.result.records);
      this.list.forEach((item) => {
        this.switches[item.name] = true
      })
    },
  },
  mounted() {
    this.names()
  },
}
</script>

<style>
</style>