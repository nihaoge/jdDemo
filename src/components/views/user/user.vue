<template lang="html">
  <div>


    <div class="user_data">
      <div>
        <span>35</span><span>订单</span>
      </div>
      <div>
        <span>100</span><span>商品收藏</span>
      </div>
      <div>
        <span>100</span><span>店铺收藏</span>
      </div>
      <div>
        <span>100</span><span>我的足迹</span>
      </div>
    </div>

    <div class="user_data">
      <div>
        <span>35</span><span>订单</span>
      </div>
      <div>
        <span>100</span><span>商品收藏</span>
      </div>
      <div>
        <span>100</span><span>店铺收藏</span>
      </div>
      <div>
        <span>100</span><span>我的足迹</span>
      </div>
    </div>

    <div class="user_logout">
      <span  @click="click">退出登录</span>
    </div>
    <foot index="3"></foot>
  </div>
</template>

<script>
import foot from "../../foot-nav";
export default {
  components:{
    foot
  },
  beforeRouteEnter (to, from, next) {
    let res = localStorage.getItem('login')
    if(res){
      let islogin = JSON.parse(res).islogin
        if(islogin===1){
          next()
        }else{
          next('/login')
        }

    }else{
       next('/login')
    }
    
  },
  methods: {
    click(){
       localStorage.removeItem('login')
       this.$router.push('/')
    }
  },
}
</script>

<style lang="scss" scoped>
.user_data {
  width: 100%;
  height: 1.87rem;
  display: flex;
  background-color: white;
  margin-bottom: .67rem;
  > div {
    flex: 1;
    text-align: center;
    > span:first-child {
      font-size: .43rem;
      color: #333333;
      display: block;
      font-weight: bold;
      line-height: 1.07rem;
      color: rgb(255, 49, 9);
    }
    > span:last-child {
      font-size: .32rem;
      color: #666666;
      display: block;
      line-height: .67rem;
    }
  }
}
.user_logout {
  margin-top: 1.07rem;
  width: 100%;
  box-sizing: border-box;
  padding: 0 .4rem;
  > span {
    display: block;
    width: 100%;
    height: 1.33rem;
    line-height: 1.33rem;
    text-align: center;
    font-size: .4rem;
    border: 1px solid rgb(255, 49, 9);
    border-radius: .67rem;
    margin-top: .53rem;
    color: rgb(255, 49, 9);
    background-color: rgb(255, 49, 9);
    color: white;
  }
}
</style>
