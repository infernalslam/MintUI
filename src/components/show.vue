<template lang="html">
  <br><br><br><br>
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
        <th>type</th>
        <th>pic</th>
        <th>รายละเอียด</th>
        <th>group</th>
        <th>type</th>
        <th>ลบ</th>
      </tr>
    </thead>
    <thead v-for="show in data">
      <tr><th>{{show.mem_id}}</th>
      <td>{{show.mem_name}}</td>
      <td>{{show.mem_surname}}</td>
      <td>{{show.mem_gender}}</td>
      <td>{{show.mem_age}}</th>
      <td>{{show.mem_email}}</td>
      <td>{{show.mem_tel}}</td>
      <td>{{show.mem_distance}}</td>
      <td>{{show.mem_pic}}</td>
      <td>{{show.mem_discription}}</td>
      <td>{{show.group_id}}</td>
      <td>{{show.mem_type}}</td>
      <td><i class="trash outline icon" v-on:click="del(show.mem_id, $index)"></i></td>
    </tr></thead>
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
    this.$http.get('http://192.168.2.130:10000/users').then(function (res) {
      console.log(res.data)
      this.data = res.data
    })
  },
  attached: function () {},
  methods: {
    del: function (id, index) {
      console.log(id, index)
      this.$http.delete('http://192.168.2.130:10000/users/' + id).then(function (res) {
        console.log(res)
        this.get()
      })
    },
    get: function () {
      this.$http.get('http://192.168.2.130:10000/users').then(function (res) {
        console.log(res)
        this.data = res.data
      })
    }
  },
  components: {}
}
</script>

<style lang="css">
</style>
