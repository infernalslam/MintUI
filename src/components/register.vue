<template>
  {{msg}} <br>
  <a class="active item" v-link="{ path: '/Disable' }">คนพิการ</a>
  <a class="item" v-link="{ path: '/Runner' }">อาสาสมัคร</a>
</template>
<script>
// import Field from 'mint-ui'
// import 'mint-ui/lib/cell/style.css'
export default {
  data () {
    return {
      msg: 'สมัครสมาชิก'
    }
  }
}
</script>
