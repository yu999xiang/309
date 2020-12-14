<template>
  <div id="dendrogram">
    <template v-for="item in data">
      <nut-subsidenavbar
        :title="item.name"
        ikey=""
        v-if="item.childNodes"
        :key="item.id"
      >
        <Dendrogram :data="item.childNodes" />
      </nut-subsidenavbar>
      <nut-sidenavbaritem
        ikey=""
        :title="item.name"
        v-else
        :key="item.id"
        @click="gohast(item.name)"
      ></nut-sidenavbaritem>
    </template>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Dendrogram',
  props: {
    data: Array,
  },
  data() {
    return {
      icon: '',
      is: false,
      look: {},
      arr: {},
    }
  },
  mounted() {
    this.data.forEach((item) => {
      this.look[item.name] = true
    })
  },
  methods: {
    click(e) {
      this.is = !this.is
      this.look[e] = !this.look[e]
    },
    gohast(name) {
      this.setname(name)
      this.$router.push({ path: '/host' })
    },
    ...mapMutations({
      setname: 'setname',
    }),
  },
}
</script>

<style lang="less">
#dendrogram {
  margin-left: 30px;
  // margin-top: 5px;
  .nut-subsidenavbar .item-title{
    background: #fff;
  }
}
</style>
