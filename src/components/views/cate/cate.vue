<template>
  <div>
    <div class="head">
     <mt-header style="background:#fff;color:#000;height:1.06rem;font-size:.4rem;" title="商品分类">
      <router-link to="/" slot="left">
        <mt-button icon="back">back</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
</div>
      <clist></clist>

      <cdata></cdata>

      <foot index="2"></foot>
  </div>
</template>

<script>
import foot from '../../foot-nav'
import clist from './cList'
import cdata from './cData'

export default {
  components:{
    foot,
    clist,
    cdata
  },

}
</script>

<style lang="scss" scoped>
.head{
  border-bottom:2px solid rgb(151, 129, 129);

}
</style>