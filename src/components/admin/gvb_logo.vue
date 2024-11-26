

<template>
  <div class="gvb_logo">
    <img src="../../../public/image/logo.jpg" alt="logo" />
    <div class="log_head">
      <div>席应情</div>
      <div>Xyq777</div>
    </div>
  </div>
</template>

<style>
.gvb_logo {
  height: 90px;
  display: flex;
  padding: 20px;
  align-items: center;
  border-bottom: 1px solid var(--bg);
  img {
    width: 60px;
    height: 60px;
  }
  .log_head {
    margin-left: 20px;
    > div:nth-child(1) {
      font-size: 22px;
    }
    > div:nth-child(2) {
      font-size: 12px;
    }
  }
}
</style>
