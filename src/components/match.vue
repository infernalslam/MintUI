<template lang="html">
<br><br><br><br>
<div class="ui container">
  <div class="field">
    <button class="ui green basic button" v-link="{path:'/dismatch'}">หาคู่(คนพิการ)</button>
    <button class="ui blue basic button" v-link="{path:'/runmatch'}">หาคู่(อาสาสมัคร)</button>
    <button class="ui violet basic button" v-link="{path:'/matching'}">จับคู่(match)</button>
  </div>
</div>
</template>

<script>
export default {
  data: function () {
    return {
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
</style>
