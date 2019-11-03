<template>
  <div class="sbox" >
    <div class="sk-box">
      <div class="sk-top">
        <div><img :src="icon.skicon" alt=""></div>
        <div class="pbox"><p>0点场</p></div>
        <div><p class="time">20:01:13</p></div>
        <div class="ms"><p >更多秒杀></p></div>
      </div>
      <div class="arr-box">
        <div class="box1">
        <div class="img-box" v-for="(item,idx) in skArr" :key="idx" @click="click(item)">
          <img :src="item.src" alt="" srcset="">

          <p class="text-p" v-text="item.original_price"></p>
          <p class="text-p" v-text="item.current_price"></p>

          </div>

        </div>

      </div>
    </div>
   
  </div>
</template>

<script>
import {icon} from '../../../assets/img'
import {mapActions,mapState,mapMutations} from 'vuex'
export default {

  data() {
    
    return {
      a:"123",
      icon
    }
  },
  computed: {
    ...mapState(['skArr'])
  },
  mounted() {
    this.getsKill()
  },
methods: {
  ...mapActions(['getsKill']),
    ...mapMutations(["upcaArr"]),

   click(item){
      this.$messagebox.confirm('确定添加到购物车?').then(action=>{
        if(action==='confirm'){
          this.upcaArr({type:'insert',item:item})
        }
      })
      
    }
},

};
</script>

<style lang="scss" scoped>
span{
  font-size: .51rem;
}
.sbox {
    width: 100%;
  background: rgb(245, 245, 245);
  overflow: hidden;

  .sk-box {
    width: 95%;
    height: 4rem;
    background: rgb(179, 163, 163);
    margin-left:2.5%;
   

    .arr-box{
      width: 100%;
      height: 100%;
      background: rgb(255, 255, 255);
        overflow:scroll;
        .text-p{
          font-size: .306667rem;
          font-weight: 900;
          color: rgb(218, 72, 72);
          text-align: center;
        }

      .box1{
        width: 230%;

      }
  
      .img-box{
        height: 2.866667rem;
        width: 1.8rem;
        display: inline-block;
        margin-right:.133333rem;
        img{
          width: 100%
        }
      }

    }
    .sk-top{
      height: .906667rem;
      background: rgb(255, 255, 255);
      display: flex;
      img{
        height: 95%;
      }
      p{
        font-size: .306667rem;
        line-height: .906667rem;
        font-weight: 900;
      }
      .time{
        // display: inline-block;
        border: 1px solid #666;
        height: .506667rem;
        line-height: .506667rem;
        margin-top:.16rem;
        margin-left: .16rem;
        font-weight: 100;
        border-radius: 3px;

      }
      .ms{
        position: relative;
        left: 2.766667rem;
        
      }
    }
  }
}
</style>