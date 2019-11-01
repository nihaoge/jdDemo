<template>
<div class="sp-box">
  <mt-swipe :auto="4000">
  <mt-swipe-item v-for='(item,idx) in swipe' :key='idx'>
      <img :src="item.src" alt="lbt" >
      </mt-swipe-item>

</mt-swipe>
</div>
</template>

<script>
import {swipe} from '../../../assets/img'
export default {
data() {
    return {
        swipe
    }
},
}
</script>

<style lang="scss" scoped>
div{
  

    width:100%;
    height:3.733333rem;
    display: inline-block;
        text-align: center;
        
    img{
        height:100%;
        border-radius: 12px;
       
        
    }
    
}
</style>