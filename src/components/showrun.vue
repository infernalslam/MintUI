<template lang="html">
  <br>
  <table class="ui fixed single line celled table">
    <thead>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>surname</th>
        <th>tel</th>
        <th>age</th>
        <th>dis</th>
        <th>des</th>
      </tr>
      <tr>
        <thead v-for="show in data">
          <tr><th>{{show._id}}</th>
          <td>{{show.name}}</td>
          <td>{{show.surname}}</td>
          <td>{{show.tel}}</td>
          <td>{{show.age}}</td>
          <td>{{show.distance_runner}}</th>
          <td>{{show.description}}</td>
      </tr>
    </thead>
  </table>
</template>

<script>
export default {
  data: function () {
    return {
      data: []
    }
  },
  computed: {},
  ready: function () {
    this.$http.get('http://localhost:5000/api/disable/queryrun').then(function (res) {
      this.data = res.data
      console.log('load getquery')
    })
  },
  attached: function () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
</style>
