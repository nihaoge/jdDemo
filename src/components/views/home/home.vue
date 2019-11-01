<template>
  <div>
    <seek></seek>
    <div class="spbox">
      <swipe></swipe>
    </div>
    <bannerNav></bannerNav>
    <ad></ad>
    <sKill></sKill>
    <div class="ads">
      <div class="t">
        <img class="timg" src="../../../assets/xy.png" alt srcset />
      </div>
    </div>
    <!-- //东家小园 -->
    <div class="dbox">
    <div class="dx" v-for="(item,idx) in adArr" :key='idx'>
    <adstort :item='item'></adstort>
    </div>
   </div>
   <div class="sp">
   <rcmd></rcmd>
   </div>

    <foot index="1"></foot>
  </div>
</template>

<script>
import foot from "../../foot-nav";
import seek from "./seek";
import swipe from "./swipe";
import bannerNav from "./bannerNav";
import ad from "./adimg";
import sKill from "./sKill";
import { mapActions,mapState} from "vuex";
import adstort from "./adstort";
import rcmd from './rcmd'
import BScroll from '@better-scroll/core'

//引入组件

export default {
  components: {
    //导入组件
    foot,
    seek,
    swipe,
    bannerNav,
    ad,
    sKill,
    adstort,
    rcmd
  },
  mounted() {
    this.getAds();
    this.getRcmd();
    let bs = new BScroll('.sp',{
      probeType: 3,
  pullUpLoad: true
    })
    bs.on('scroll',()=>{
      console.log(scroll);
      
    })
    bs.on('scrollEnd',()=>{
      console.log('scroll end');
      this.getRcmd()


      


    })
  },
  computed: {
    ...mapState(['adArr','rcArr'])
  },
  methods: {
    ...mapActions(["getAds",'getRcmd'])
  }
};
</script>


<style lang="scss" scoped>
.dbox{
  width: 100%;
  height: 6.666667rem
}
.dx{
  width: 95%;
  margin-left:2.5%;
 
}
.t{
  height: 1rem;
}
div {
  font-size: 1rem;
  .spbox {
    height: 3.82rem;

    margin-top: 1.2rem;
    background: rgb(255, 0, 0);
  }
}
.ads {
  width: 100%;

  background: rgb(245, 245, 245);
  text-align: center;

  .timg {
    width: 95%;
    height:1rem;
    display: inline-block;
  }
}
</style>