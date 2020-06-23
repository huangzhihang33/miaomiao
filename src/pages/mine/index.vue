<template>
  <div id="main">
      <Header title="我的喵喵" />
      <div id="content">
        <Login />
      </div>
      <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header/index.vue'
import Footer from '@/components/Footer/index.vue'
import Login from '@/components/Login/index.vue'

export default {
  name:'mine',
  components:{
    Header,
    Footer,
    Login
  },
  data() {
    return {};
  },
  created() {},
  mounted() {}
};
</script>
<style scoped>
</style>