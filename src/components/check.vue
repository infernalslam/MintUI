<template>
  <div class="ui equal width center aligned padded grid">
    <div class="row">
      <div class="orange column item" v-link="{ path: '/runner' }">
        อาสาสมัคร
      </div>
      <div class="black column item" v-link="{ path: '/disable' }">
        ผู้พิการ
      </div>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'Check page'
    }
  }
}
</script>
