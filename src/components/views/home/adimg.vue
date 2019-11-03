<template>
<div class="box" >
<div class="img-box">
<div class="ad-box" v-for='(item,idx) in adimg' :key="idx">
    <img :src="item.src" alt="">
</div>
</div>
</div>
</template>

<script>
import {adimg} from "../../../assets/img"
export default {
data() {
    return {
        adimg
    }
},
  methods: {
   
  },
}
</script>
<style lang="scss" scoped>
.img-box{
    width: 95%;
    margin-left:2.5%;
    height: 2.8rem;
    display: flex;
    .ad-box{
        width:33.33333%

    }
}
img{
    width: 100%;
}
.box{
    width: 100%;
  background: rgb(245, 245, 245);

}
</style>