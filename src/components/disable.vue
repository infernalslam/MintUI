<template>
  <a class="active item" v-link="{ path: '/disable' }">คนพิการ</a>
  <a class="item" v-link="{ path: '/runner' }">อาสาสมัคร</a>
  <br><br>
  {{msg}}
</template>
<script>
  export default {
    data () {
      return {
        msg: 'คนพิการ'
      }
    }
  }
</script>
