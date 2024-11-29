<template>
  <div class="gvb-login">
    <div class="gvb-login-form-bg">
      <a-form
        ref="formRef"
        :model="form"
        :label-col-props="{ span: 0 }"
        :wrapper-col-props="{ span: 24 }"
      >
        <div class="form-title">用户登录</div>
        <a-form-item
          field="username"
          label="用户名"
          validate-trigger="blur"
          :hide-label="true"
          :rules="[{ required: true, message: '请输入用户名' }]"
          :style="{ width: inputWidth }"
        >
          <a-input v-model="form.username" placeholder="用户名">
            <template #prefix>
              <icon-user />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item
          field="password"
          label="密码"
          :hide-label="true"
          validate-trigger="blur"
          :rules="[{ required: true, message: '请输入密码' }]"
          :style="{ width: inputWidth }"
        >
          <a-input-password v-model="form.password" placeholder="密码" :invisible-button="false">
            <template #prefix>
              <icon-lock />
            </template>
          </a-input-password>
        </a-form-item>
        <a-form-item>
          <a-space>
            <a-button html-type="submit" :style="{ width: inputWidth }" class="form-button"
              >登录</a-button
            >
          </a-space>
        </a-form-item>
        <div class="other-login">
          <div class="label">第三方登录</div>
          <div class="icons">
            <a href="">
              <img
                src="https://cdn.jsdelivr.net/gh/justauth/justauth-oauth-logo@1.2/github.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </a-form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { IconLock, IconUser } from '@arco-design/web-vue/es/icon'
import { reactive } from 'vue'
import '@/assets/font.css'
const inputWidth = '320px'
const form = reactive({
  username: '',
  password: '',
})
</script>
<style lang="scss">
.gvb-login {
  background: url('/src/assets/image/qq-1.jpg') 50% / cover no-repeat;
  width: 100%;
  height: 100vh;
  .gvb-login-form-bg {
    display: flex;
    position: absolute;
    right: 0;
    width: 400px;
    height: 100%;
    background-color: var(--login_bg);
    justify-content: center;
    align-items: center;
    padding: 0 40px;
    .form-title {
      font-size: 24px;
      text-align: center;
      margin-bottom: 20px;
      font-weight: 700;
      color: var(--active);
      font-family: kuaikan, sans-serif;
    }
    .form-button {
      background-color: var(--active);
      color: white;
      font-weight: 700;
    }
    .other-login {
      margin-top: 0;
      text-align: center;
      .label {
        display: flex;
        align-items: center;
        justify-content: center;
        &::before {
          display: inline-flex;
          width: 35%;
          height: 1px;
          content: '';
          background-color: var(--color-text-3);
        }
        &::after {
          display: inline-flex;
          width: 35%;
          height: 1px;
          content: '';
          background-color: var(--color-text-3);
        }
      }
      .icons {
        display: flex;
        justify-content: center;
        margin-top: 10px;
        >a{
          margin-right: 10px;
          &:last-child{
            margin-right: 0;
          }
        }
        img {
          width: 40px;
          height: 40px;
        }
      }
    }
  }
}
</style>
