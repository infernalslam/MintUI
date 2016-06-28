<template lang="html">
  <br><br>
  <div class="ui category search inverted segment">
    <button class="ui inverted purple button">(คนพิการ)</button>
    <button class="ui inverted green button">(อาสาสมัคร)</button>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    <div class="ui icon input">
      <input class="prompt" type="text" placeholder="Search ...">
      <i class="search icon"></i>
    </div>
    <div class="results"></div>
  </div>
  <table class="ui fixed single line  inverted table">
    <thead>
      <tr>
        <th><center>id</th>
        <th><center>name</th>
        <th><center>surname</th>
        <th><center>tel</th>
        <th><center>age</th>
        <th><center>dis</th>
        <th><center>des</th>
        <th><center>type</th>
        <th><center>pic</th>
        <th><center>รายละเอียด</th>
        <th><center>group</th>
        <th><center>type</th>
        <th><center>ลบ</th>
      </tr>
    </thead>
    <thead v-for="show in data">
      <tr><th><center>{{show.mem_id}}</th>
      <td><center>{{show.mem_name}}</td>
      <td><center>{{show.mem_surname}}</td>
      <td><center>{{show.mem_gender}}</td>
      <td><center>{{show.mem_age}}</th>
      <td><center>{{show.mem_email}}</td>
      <td><center>{{show.mem_tel}}</td>
      <td><center>{{show.mem_distance}}</td>
      <td><center>{{show.mem_pic}}</td>
      <td><center>{{show.mem_discription}}</td>
      <td><center>{{show.group_id}}</td>
      <td><center>{{show.mem_type}}</td>
      <td><center><i class="trash outline icon" v-on:click="del(show.mem_id, $index)"></i></td>
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
    this.$http.get('http://192.168.2.130:10000/members').then(function (res) {
      console.log(res.data)
      this.data = res.data
    })
  },
  attached: function () {},
  methods: {
    del: function (id, index) {
      console.log(id, index)
      this.$http.delete('http://192.168.2.130:10000/members/' + id).then(function (res) {
        console.log(res)
        this.get()
      })
    },
    get: function () {
      this.$http.get('http://192.168.2.130:10000/members').then(function (res) {
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
