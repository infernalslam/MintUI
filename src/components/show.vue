<template lang="html">
  <br><br><br><br>
  <table class="ui fixed single line celled table">
    <thead>
      <tr>
        <th>mem_id</th>
        <th>ชื่อ</th>
        <th>นามสกุล</th>
        <th>เพศ</th>
        <th>อายุ</th>
        <th>เบอร์</th>
        <th>วันที่สมัคร</th>
        <th>ระยะทาง</th>
        <th>รูปภาพ</th>
        <th>รายละเอียด</th>
        <th>กลุ่มที่จับ</th>
        <th>สถานะ</th>
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
      this.data = res.data
    })
  },
  attached: function () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
</style>
