<template>
  <div class="nav">
    <mt-swipe  :continuous='false' :auto='0' :showIndicators='false'>
      <mt-swipe-item>
        <div class="box-nav"  v-for="(item,idx) in arr1" :key="idx">
          <img :src="item.src" alt="lbt" />
          <p v-text="item.cate"></p>
        </div>
      </mt-swipe-item>
      <mt-swipe-item>
        <div class="box-nav"  v-for="(item,idx) in arr2" :key="idx">
          <img :src="item.src" alt="lbt" />
          <p v-text="item.cate"></p>
        </div>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import {cates} from "../../../assets/img";
export default {
  data() {
    return {
      cates
    }
  },
  computed: {
      arr1:function(){
          return this.cates.slice(0,10)
      },
      arr2:function(){
          return this.cates.slice(10)

      }
  },

  }

</script>

<style lang="scss" scoped>
.nav {
  height: 4.32rem;
  width: 100%;
  background: rgb(245, 245, 245);
  overflow: hidden;
  .box-nav{
      width:20%;
      float: left;
      font-size: .306667rem;
      color: #666;
      text-align: center;
     margin-top:.4rem;
     line-height: .4rem;
      
      img{
          width: 1.093333rem;
          
      }
  }
}
</style>