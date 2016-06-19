<template>
    <a class="item" v-link="{ path: '/disable' }">คนพิการ</a>
    <a class="item" v-link="{ path: '/runner' }">อาสาสมัคร</a>
</template>
<script>
export default {
  data () {
    return {
      msg: 'สมัครสมาชิก'
    }
  }
}
</script>
