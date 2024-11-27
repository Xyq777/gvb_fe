

<template>
  <div class="gvb_logo">
    <img src="/image/logo.jpg" alt="logo" />
    <div class="log_head">
      <div>席应情</div>
      <div>Xyq777</div>
    </div>
  </div>
</template>

<style  lang="scss">
.gvb_logo {
  height: 90px;
  display: flex;
  padding: 20px;
  align-items: center;
  border-bottom: 1px solid var(--bg);
  img {
    width: 60px;
    height: 60px;
    transition: all .3s;
  }
  .log_head {

    margin-left: 20px;
    transition: all .3s;
    transform: scale(1);
    transform-origin: left;
    > div:nth-child(1) {
      font-size: 22px;
      white-space: nowrap;
    }
    > div:nth-child(2) {
      font-size: 12px;
      white-space: nowrap;
    }
  }
}
.collapsed {
  .gvb_logo{
  padding: 2px;
  img {
    width: 42px;
    height: 42px;
  }

  .log_head {
    transform: scale(0);
  }
  }
}
</style>
