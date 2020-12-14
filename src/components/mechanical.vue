<template>
  <div id="mechanical">
    <div v-for="item in list" :key="item.id" class="item">
      <i
        class="iconfont icon-xiangxia1"
        v-show="switches[item.name]"
        @click="swith(item.name)"
      ></i>
      <i
        class="iconfont icon-xiangshang"
        v-show="!switches[item.name]"
        @click="swith(item.name)"
      ></i
      >{{ item.name }}
      <div
        class="item-every"
        v-for="ever in item.children"
        :key="ever.id"
        @click="backPage(ever)"
      >
        {{ ever.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { category } from '@/api/httpApi'
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      list: [],
      switches: {},
    }
  },
  computed:{
    // list: [],
    // switches: {},
    // ...mapState({
    //   id:(state) => state.id
    // })
  },
  methods: {
    swith(e) {
      this.switches[e] = !this.switches[e]
    },
    backPage(e) {
      sessionStorage.setItem('categoryName', JSON.stringify(e.name))
      this.setId(e.id)
      // sessionStorage.setItem('id',JSON.stringify(e.id))
      this.$router.go(-1)
    },
    async category() {
      let data = await category()
      this.list = data.data.result
      this.list.forEach((item) => {
        this.switches[item.name] = true
      })
      console.log(this.id);
    },
    ...mapMutations({
      setId: 'setid'
    })
  },
  mounted() {
    this.category()
  },
}
</script>

<style lang="less">
#mechanical {
  width: 100%;
  height: 100%;
  overflow: scroll;
  .item {
    margin: 10px 0px;
    margin-left: 20px;
    .iconfont {
      color: #ddd;
    }
    .item-every {
      margin: 10px 0px;
      margin-left: 40px;
    }
  }
}
</style>