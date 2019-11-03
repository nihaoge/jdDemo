<template>
  <div class="rcmd" >
    <img src="../../../assets/123.png" alt srcset />
    <div class="rcmd-box">
      <div v-for="(item,idx) in rcArr" :key="idx">
        <div class="sp-box">
          <img :src="item.src" />
          <p v-text="item.desc" class="p">123456789发生的发生的大</p>
          <span v-text="item.current_price">00000</span>
          <span>看相似</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  
  computed: {
    ...mapState(["rcArr"])

  }
};
</script>

<style lang="scss" scoped>
.rcmd {
  text-align: center;
  height: 100%;
  position: relative;

  img {
    width: 95%;
  }
  width: 100%;
  .rcmd-box {
    width: 95%;
    margin-left: 2%;
    display: flex;
    flex-wrap: wrap;

    .sp-box {
      width: 4.638rem;
      margin-top: 0.106667rem;
      margin-left: 0.106667rem;
      height: 6.906667rem;
      background: rgb(255, 255, 255);
      img {
        width: 100%;
      }
      p {
        font-size: 0.28rem;
        height: 0.733333rem;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: left;
      }
      span:nth-child(3) {
        font-size: 0.423333rem;
        position: relative;
        left: -1rem;
      }
      span:nth-child(4) {
        font-size: 0.323333rem;
        border: 1px solid #666;
        border-radius: 5px;
        position: relative;
        right: -1rem;
        color: rgb(223, 47, 47);
      }
    }
  }
}
</style>