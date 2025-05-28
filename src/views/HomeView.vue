<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { watch, onWatcherCleanup, ref, reactive } from 'vue'


const options = [
  '小红书',
  '得物',
  '微博',
  '知乎',
]

function logClassName(target: Function) {
  console.log(target.name);
}
const a = false;
const b = a ?? 5;

type NumberOrString = number | string;
interface item {
  x: string
}

const list : item[] = reactive([{x:'1'},{x:'3'},{x:'4'}]);
function handle() {
  list.unshift()
}
</script>

<template>
  <div>
    {{ list }}
    <div v-for="(val ,index) in list "  :key="index" >
      <input type="text" :class="val.x">
    </div>
    <div class="el-sub-menu__title" @click="handle">
      自动化营销
    </div>
    <TheWelcome :id="1"></TheWelcome>
    <div class="content">
      <el-segmented v-model="value" :options="options" block />
    </div>
  </div>
</template>
<style scoped lang="scss">
.content{
  padding: 10px 20px;
  box-sizing: border-box;
}
</style>