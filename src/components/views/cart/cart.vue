<template>
  <div class="cat">
    <mt-header style="background:#fff;color:#000;height:1.06rem;font-size:.4rem;" title="购物车">
      <router-link to="/" slot="left">
        <mt-button icon="back">back</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <div v-if="islogin" class="login">
      登入后可同步购物车商品
      <span @click="click">登入</span>
    </div>
    <div v-else>
      <div v-if="caArr.length > 0">
        <mailz v-for="(item,idx) in caArr" :key="idx" :item="item"></mailz>
        <footer>
          <van-submit-bar :price="total" button-text="提交订单" @submit="onSubmit" />
        </footer>
      </div>
      <div v-else style="text-align:center;line-height:800%;color:#666;font-size:0.8rem;">
        购物车暂无商品...
        <br />
        <a class="ts" href="./home">立即选购商品</a>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";

import mailz from "./mailz.vue";
export default {
  components: {
    //导入组件
    mailz
  },
  methods: {
    ...mapMutations(["upcaArr"]),
    onSubmit() {
      this.upcaArr({ type: "delAll" });
    },
    click() {
      this.$router.push("./login");
    }
  },

  computed: {
    ...mapState(["userinfo", "caArr"]),
    total() {
      let t = 0;
      this.caArr.map(ele => {
        t += ele.rmb;

        console.log(t);
      });
      return t * 100;
    }
  },
  islogin() {
    let res = localStorage.getItem("login");
    return res && JSON.parse(res).islogin === 1;
  }
};
</script>

<style lang="scss" scoped>
.cat {
  .xinxi {
    margin-top: 0.16rem;
  }
  .login {
    width: 100%;
    height: 1.44rem;
    border-top: 1px solid rgb(221, 185, 185);
    border-bottom: 1px solid rgb(221, 185, 185);
    text-align: center;
    background: rgb(255, 255, 255);
    font-size: 0.38rem;
    line-height: 0.746667rem;
    span {
      display: inline-block;
      height: 0.746667rem;
      background: rgb(255, 0, 0);
      color: #fff;
      border-radius: 5px;
      width: 1.5rem;
      margin-top: 0.373333rem;
      margin-left: 0.186rem;
    }
  }
}
.ts {
  display: inline-block;
  background: rgb(241, 53, 53);
  border-radius: 15px;
  height: 1rem;
  border: 1px solid #666;
  font-size: 0.58rem;
  line-height: 1rem;
  color: rgb(243, 217, 217);
}
</style>