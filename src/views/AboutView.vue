<script setup lang="ts">
  import { reactive, ref, defineProps } from 'vue'
  interface Props {
    id: string | number
  }
  const props = defineProps < Props > ();
  type a = {
    x: string
  }

</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
</style>
