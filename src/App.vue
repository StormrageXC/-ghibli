<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import { ref, onMounted, computed } from "vue";
import "@/app.scss";

const firstName = ref("John");
const lastName = ref("Doe");

const fullName = computed({
  // getter
  get() {
    return firstName.value + " " + lastName.value;
  },
  // setter
  set(newValue) {
    // 注意：我们这里使用的是解构赋值语法
    [firstName.value, lastName.value] = newValue.split(" ");
  },
});
setTimeout(() => {
  fullName.value = "123 123";
  firstName.value = "345";
}, 1000);
</script>
<template>
  <RouterView></RouterView>
</template>

<style scoped lang="scss"></style>
