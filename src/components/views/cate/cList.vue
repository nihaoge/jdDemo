<template>
  <div class="list-box">
      <div  v-for="(item,idx) in cateArr " :key="idx" class="list" :class="{'on':idx==index}" @click="click(idx)">
          <span v-text="item.cate"></span>
      </div>


  </div>
</template>

<script>
import {mapState,mapActions,mapMutations} from "vuex"

export default {
    data() {
        return {
            index:0
        }
    },
methods: {
    ...mapActions(['getCate']),
    ...mapMutations(['updatacaArr']),

    click (idx) {
       this.index=idx;
      this.updatacaArr(idx)
        
    },

},
computed: {
    ...mapState(['cateArr'])
},
mounted(){
    this.getCate()
}

}
</script>

<style lang="scss" scoped>
.list-box{
    width:2.4rem;
    height: 100%;
    overflow: scroll;
    position: fixed;
    left: 0;
    bottom: 1.38rem;
    top:1.08rem;
    
    .list{
        height: 1.2rem;
    width:2.4rem;

        background: rgb(223, 223, 223);
        font-size: .35rem;
        line-height: 1.28rem;
        text-align: center;

    }
    .list.on{
        background: #fff;
        color: red;
        border-bottom:rgb(214, 85, 85) solid 1px;
    }
}
</style>