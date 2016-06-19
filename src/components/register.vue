<template>
    <index></index>
    <br><br><br>
    <div class="ui container">
      <check></check>
    </div>
</template>








<script>
import Index from './index.vue'
import Check from './check.vue'
export default {
  components: {
    Index,
    Check
  },
  data () {
    return {
      msg: 'Register page'
    }
  }
}
</script>
