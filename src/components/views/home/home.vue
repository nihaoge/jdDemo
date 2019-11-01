<template>
  <div>
    <seek></seek>
    <div class="spbox">
      <swipe></swipe>
    </div>
    <bannerNav></bannerNav>
    <ad></ad>
    <sKill></sKill>
    <foot></foot>
  </div>
</template>

<script>
import foot from "../../foot-nav";
import seek from "./seek";
import swipe from "./swipe";
import bannerNav from "./bannerNav";
import ad from "./adimg";
import sKill from "./sKill";
import {mapActions} from "vuex";
//引入组件

export default {
  components: {
    //导入组件
    foot,
    seek,
    swipe,
    bannerNav,
    ad,
    sKill
  },
  mounted() {
    this.getSkill()

  },
  methods: {
    ...mapActions(["getsKill"])
  }
};
</script>

<style lang="scss" scoped>
div {
  font-size: 1rem;
  .spbox {
    height: 3.82rem;

    margin-top: 1.2rem;
    background: rgb(255, 0, 0);
  }
}
</style>