<script setup lang="ts">
  import { reactive, ref , defineProps} from 'vue'
  interface Props {
    msg: string
    time?: number
}
  defineProps<Props> ()

  const attributeName = 'wq w'
  const proxy = reactive({})
  // 响应式对象内的嵌套对象依然是代理
  // 当 ref 的值是一个对象时，ref() 也会在内部调用reactive
  const raw = {}
  proxy.nested = raw
  const age = ref()
  console.log(proxy.nested === raw) // false

  const classObject = reactive({
    active: true,
    'text-danger': false
  })
  // 一个 ref 会在作为响应式对象的属性被访问或修改时自动解包
  const count = ref(0)
  const state = reactive({
    count
  })

  console.log(state.count) // 0

  state.count = 1
  console.log(count.value) // 1
</script>

<template>
  <div class="greetings">
    {{time}}
    <input v-model.number="age" />{{age}}
    <!-- 绑定的对象并不一定需要写成内联字面量的形式，也可以直接绑定一个对象： -->
    <button :class="classObject" @click="count">{{count}}</button>
    <!-- 仅当 event.target 是元素本身时才会触发事件处理器 -->
    <!-- 例如：事件处理器不来自子元素 -->
    <!-- 使用修饰符时需要注意调用顺序，因为相关代码是以相同的顺序生成的。
    因此使用 @click.prevent.self 会阻止元素及其子元素的所有点击事件的默认行为，
    而 @click.self.prevent 则只会阻止对元素本身的点击事件的默认行为。 -->
    <div @click.self="doThat">...</div>
    <!-- 添加事件监听器时，使用 `capture` 捕获模式 -->
    <!-- 例如：指向内部元素的事件，在被内部元素处理前，先被外部处理 -->
    <div @click.capture="doThis">...</div>

    <!-- 点击事件最多被触发一次 -->
    <a @click.once="doThis"></a>

    <!-- 滚动事件的默认行为 (scrolling) 将立即发生而非等待 `onScroll` 完成 -->
    <!-- 以防其中包含 `event.preventDefault()` -->
    <div @scroll.passive="onScroll">...</div>
    <h3>
      You’ve successfully created a project with
      <!-- 动态参数 -->
      <!-- 动态参数中表达式的值应当是一个字符串，或者是 null。特殊值 null 意为显式移除该绑定。其他非字符串的值会触发警告。 -->
      <!-- 动态参数表达式因为某些字符的缘故有一些语法限制，比如空格和引号，在 HTML attribute 名称中都是不合法的。 -->
      <!-- 我们推荐使用计算属性替换复杂的表达式 -->
      <!-- 当使用 DOM 内嵌模板 (直接写在 HTML 文件里的模板) 时，我们需要避免在名称中使用大写字母，因为浏览器会强制将其转换为小写 -->
      <a v-bind:[attributeName]="'https://vite.dev/'"> ... </a>
      <!-- 简写 -->
      <a :[attributeName]="'https://vite.dev/'"> ... </a>
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
    </h3>
  </div>
</template>

<style scoped>
  h1 {
    font-weight: 500;
    font-size: 2.6rem;
    position: relative;
    top: -10px;
  }

  h3 {
    font-size: 1.2rem;
  }

  .greetings h1,
  .greetings h3 {
    text-align: center;
  }

  @media (min-width: 1024px) {

    .greetings h1,
    .greetings h3 {
      text-align: left;
    }
  }
</style>