

<template>
  <div class="gvb_tabs">
    <span
      v-for="tab in tabList"
      :class="{gvb_tab:true,active:route.name===tab.name}"
      :key="tab.name"
      @click.middle="closeTab(tab)"
      @click="clickTab(tab)"
    >
      {{tab.title}}
      <icon-close v-if="tab.name!=='home'" @click.stop="closeTab(tab)"></icon-close>
    </span>
    <span class="gvb_tab close_all" @click="closeAll">全部关闭</span>
  </div>
</template>
<script setup lang="ts">
import { IconClose } from '@arco-design/web-vue/es/icon';
import {  type Ref, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
interface tabType {
  name: string;
  title: string;
}
const DefaultTabs :tabType[]= [{name: 'home', title: '首页'}]

const route = useRoute()
const router =useRouter()
const tabList :Ref<tabType[]>=ref([
  {name: 'home', title: '首页'},
])
function persistentTabs(){
  localStorage.setItem('tabs',JSON.stringify(tabList.value))
}
function loadTabs(){
  const tabsData = localStorage.getItem('tabs')
  if(tabsData){
    let tabs = []
    try {
       tabs=JSON.parse(tabsData )as tabType[]
    }catch (e){
      console.error(e)
      return
    }
    tabList.value = tabs
  }
}
function clickTab(tab :tabType){
  router.push({name: tab.name})
}
function closeTab(tab: tabType){
  if (tab.name === 'home') return
  const index=tabList.value.findIndex((item)=>item.name===tab.name)
  tabList.value.splice(index,1)
  //home不会被关闭，这里的index永远大于0
  if (route.name === tab.name){
    router.push({name: tabList.value[index-1].name})
  }



}
function closeAll(){
  tabList.value = DefaultTabs
  router.push({name: 'home'})
}
//
loadTabs()
watch(()=>tabList.value.length,()=>{
  persistentTabs()
})

watch(()=>route.name,()=>{
  if(!tabList.value.find(item=>item.name===route.name)){
    tabList.value.push({name: route.name, title: route.meta.title} as tabType)
  }

},{immediate:true})
</script>
<style>
.gvb_tabs {
  display: flex;
  align-items: center;
  height: 30px;
  width: 100%;
  border-bottom: 1px solid var(--bg);
  padding: 0 20px;
  position: relative;
  .gvb_tab {
    border: 1px solid var(--bg);
    border-radius: 5px;
    padding: 2px 6px;
    margin-right: 10px;
    cursor: pointer;
    &.active {
      background-color: var(--active);
      color: white;
      svg{
        &:hover{
          background-color: rgb(var(--arcoblue-5));
        }

      }
    }
    &.close_all {
      position: absolute;
      right: 20px;
      margin-right: 0;
    }
    svg{
      font-size: 12px;
      border-radius: 50%;
      &:hover{
        background-color: var(--bg);
      }
    }
  }
}
</style>
