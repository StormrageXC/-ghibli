<script setup lang="ts">

import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import {ref, onMounted,computed } from 'vue';

const firstName = ref('John')
const lastName = ref('Doe')

const fullName = computed({
  // getter
  get() {
    return firstName.value + ' ' + lastName.value
  },
  // setter
  set(newValue) {
    // 注意：我们这里使用的是解构赋值语法
    [firstName.value, lastName.value] = newValue.split(' ')
  }
})
setTimeout(() => {
  fullName.value = '123 123' ;
  firstName.value = '345'
},1000)
</script>
<template>
  <div class="common-layout">
    {{ fullName }}
    <el-container>
      <el-aside width="240px">
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
          <el-sub-menu index="1">
            <template #title>
              <el-icon>
                <location />
              </el-icon>
              <span>Navigator One</span>
            </template>
            <el-menu-item index="1-1">
                <RouterLink to="/">
                  home
                </RouterLink>
              </el-menu-item>
              <el-menu-item index="1-2">
                <RouterLink to="/about">
                  about
                </RouterLink>
              </el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-main>
        <RouterView></RouterView>
      </el-main>
    </el-container>
  </div>

</template>

<style scoped lang="scss">
.common-layout {
  height: 100vh;

  .el-container {
    height: inherit;
  }
  a {
    text-decoration: none;
    color: var(--el-text-color-primary);
  }
  .el-main{
    padding: 0;
  }
}
</style>