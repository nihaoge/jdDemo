<template>
  <div class="data-box">
    <div class="top" v-for="(item,idx) in cucateArr.list " :key="idx">
      <strong>
        <p v-text="item.title">热门品牌</p>
      </strong>
      <div class="main">
        <div class="img" v-for="(item2,idx2) in item.list " :key="idx2">
          <img :src="item2.img" />
          <div>
            <span v-text="item2.name">Apple</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["cucateArr"])
  }
};
</script>

<style lang="scss" scoped>
.data-box {
  width: 7.6rem;
  height: 100%;
  background: rgb(255, 255, 255);
  position: fixed;
  right: 0;
  bottom: 8rem;
  top: 1.08rem;
  overflow: scroll;

  .top {
    width: 100%;
    background: rgb(255, 255, 255);
    font-size: 0.346667rem;
    line-height: 1.2rem;
    display: inline-block;

    p {
      text-indent: 0.2rem;
      font-size: 0.35rem;
    }
  }
  .main {
    width: 100%;

    background: rgb(255, 255, 255);

    .img {
      height: 2.666667rem;
      width: 33.333%;
      display: inline-block;
      background: rgb(255, 255, 255);
      line-height: 0.5rem;
      text-align: center;

      img {
        width: 80%;
      }
    }
  }
}
span {
  font-size: 0.32rem;
  text-align: center;
  color: rgb(73, 73, 73);
}
</style>