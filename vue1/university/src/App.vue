<template>
  <div class="index">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'indexComponents',
  data() {
    return {}
  },
  // 挂载，钩子函数
  mounted() {
    this.$store.commit('extraFun')
  },
  components: {
    Header,
    Footer
  }
}
</script>
<style lang="less">
body {
  margin: 0;
  padding: 90px 0 0 0;
  background-color: #ecf2f6;
}

div.home .el-card__body {
  padding: 0;
}

.el-card__header {
  background-color:#3574b8;;
  // padding: 5px 20px 5px 15px;
}

.el-card__body {
  padding: 0;
}
</style>