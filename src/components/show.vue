<template lang="html">
  <br><br>
  <div class="ui category search  segment heads">
    <button class="ui  blue button">(คนพิการ)</button>
    <button class="ui  black button">(อาสาสมัคร)</button>
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
  <table class="ui fixed single line   table">
    <thead>
      <tr>
        <th><center>seq</th>
        <th><center>ชื่อ</th>
        <th><center>นามสกุล</th>
        <th><center>เบอร์</th>
        <th><center>อายุ</th>
        <th><center>ระยะทาง</th>
        <th><center>รายละเอียด</th>
        <th><center>ประเภท</th>
        <th><center>รูปภาพ</th>
        <!-- <th><center>รายละเอียด</th> -->
        <th><center>จับคู่</th>
        <th><center>จ่ายเงิน</th>
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
      <!-- <td><center>{{show.mem_discription}}</td> -->
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
    this.$http.get('http://192.168.100.113:10000/members').then(function (res) {
      console.log(res.data)
      this.data = res.data
    })
  },
  attached: function () {},
  methods: {
    del: function (id, index) {
      console.log(id, index)
      this.$http.delete('http://192.168.100.113:10000/members/' + id).then(function (res) {
        console.log(res)
        this.get()
      })
    },
    get: function () {
      this.$http.get('http://192.168.100.113:10000/members').then(function (res) {
        console.log(res)
        this.data = res.data
      })
    }
  },
  components: {}
}
</script>

<style lang="css">
.heads {
    position: relative;
    background: rgb(252, 162, 30) !important;
    box-shadow: 0 1px 2px 0 rgba(34,36,38,.15);
    margin: 1rem 0;
    padding: 1em;
    border-radius: .28571429rem;
    border: 1px solid rgba(34,36,38,.15);
}
</style>
