<template>
  <div>
    <router-link to="/home" tag="span">
      <img :src="img.icon1" alt />
    </router-link>
    <router-link to="/cate" tag="span">
      <img :src="img.icon2" alt />
    </router-link>
    <router-link to="/jdm" tag="span">
      <img :src="img.icon3" alt />
    </router-link>
    <router-link to="/cart" tag="span">
      <img :src="img.icon4" alt />
    </router-link>
    <router-link to="/user" tag="span">
      <img :src="img.icon5" alt />
    </router-link>
  </div>
</template>

<script>
import { navicons } from "../assets/img";

export default {
  data() {
    return {
      img: navicons
    };
  }
};
</script>

<style lang="scss" scoped>
div {
  height: 1.333333rem;
  background: #ffffff;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;

  span {
    width: 20%;
    height: 100%;
    background: rgb(255, 255, 255);
    display: flex;
    justify-content: center;
    img {
      height: 100%;
      text-align: center;
    }
  }
}
</style>