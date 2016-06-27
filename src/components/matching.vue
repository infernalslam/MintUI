<template lang="html">
  <match></match>
  <br>
  <button class="ui red basic button" @click="post()">Matching Name</button>
  <br><br>

  <div class="ui equal width center aligned padded grid">
    <div class="row">
      <div class="column">
        ผู้พิการ
        <table class="ui green table">
        <thead>
          <tr><th>ชื่อนามสกุล</th>
          <th>ผู้พิการ</th>
          <th>อายุ</th>
          <th>ระยะทาง</th>
        </tr>
      </thead>
        <tbody v-for="(key, show) in querydis">
          <tr v-bind:class="{ 'actives': active1 === $index && test1 }" @click="check1($index, show)">
            <td>{{show.mem_name}} {{show.mem_surname}}</td>
            <td>{{show.mem_description}}</td>
            <td>{{show.mem_age}}</td>
            <td>{{show.mem_distance}}</td>
          </tr>
        </tbody>
      </table>
      </div>
      <div class="column">
        อาสาสมัคร
        <table class="ui blue table">
        <thead>
          <tr><th>ชื่อนามสกุล</th>
          <th>ผู้พิการ</th>
          <th>อายุ</th>
          <th>ระยะทาง</th>
        </tr>
      </thead>
        <tbody v-for="show in queryrun">
          <tr v-bind:class="{ 'actives': active2 === $index && test2}" @click="check2($index, show)">
            <td>{{show.mem_name}} {{show.mem_surname}}</td>
            <td>{{show.mem_description}}</td>
            <td>{{show.mem_age}}</td>
            <td>{{show.mem_distance}}</td>
          </tr>
        </tbody>
      </table>
      </table>
      </div>
  </div>
</template>

<script>
import Match from './match.vue'
export default {
  data: function () {
    return {
      querydis: [],
      queryrun: [],
      active1: '',
      active2: '',
      test1: true,
      test2: true,
      data1: '',
      data2: '',
      activeBtnMatch: false,
      dataID: []
    }
  },
  computed: {},
  ready: function () {
    this.$http.get('http://192.168.2.130:10000/members/disabled').then(function (res) {
      this.querydis = res.data
    })
    this.$http.get('http://192.168.2.130:10000/members/normal').then(function (res) {
      this.queryrun = res.data
    })
  },
  attached: function () {},
  methods: {
    check1: function (index, show) {
      if (this.active1 === index) {
        this.test1 = !this.test1
        this.dataID.splice(index, 1)
        console.log(this.dataID)
      } else {
        this.test1 = true
        var data = {
          disabled_id: show.mem_id
        }
        this.dataID.push(data)
        console.log(this.dataID)
      }
      this.active1 = index
    },
    check2: function (index, show) {
      if (this.active2 === index) {
        this.test2 = !this.test2
        this.dataID.splice(index, 1)
        console.log(this.dataID)
      } else {
        this.test2 = true
        var data = {
          runner_id: show.mem_id
        }
        this.dataID.push(data)
        console.log(this.dataID)
      }
      this.active2 = index
    }
  },
  components: {
    Match
  }
}
</script>

<style lang="css">
.actives {
  background-color: yellow;
}
/*.disable {

}*/
</style>
