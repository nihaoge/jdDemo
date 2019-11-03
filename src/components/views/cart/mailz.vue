<template>
<div class="xinxi" >
        <van-swipe-cell :on-close="onClose" >
          <van-card
            style="background: #fff;border:1px solid rgb(221, 250, 240)"
            num="1"
            :price="item.rmb"
            :desc="item.ms"
            :title="item.ms"
            
           
            :thumb="item.src"
          />
          <template slot="right" >
            <van-button style="height:100%;" square type="danger" text="删除" :item="item"/>
          </template>
        </van-swipe-cell>
      </div>
  
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
     props: ["item"],
     methods: {
    ...mapMutations(["upcaArr"]),
    // clickPosition 表示关闭时点击的位置
    onClose(clickPosition) {
      if (clickPosition === "right") {
        
      this.$messagebox.confirm('确定删除该商品?').then(action=>{
        if(action==='confirm'){
           console.log("right");
        this.upcaArr({ type: "delete", item: this.item});
        }
      })
      
    
       
        
      } else {
        console.log(1);
      }
    }
  },
  computed: {
    ...mapState(["userinfo", "caArr"])
  }

}
</script>

<style>

</style>