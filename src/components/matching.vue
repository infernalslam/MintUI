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
            <td>{{show.name}} {{show.surname}}</td>
            <td>{{show.description}}</td>
            <td>{{show.age}}</td>
            <td>{{show.distance_runner}}</td>
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
            <td>{{show.name}} {{show.surname}}</td>
            <td>{{show.description}}</td>
            <td>{{show.age}}</td>
            <td>{{show.distance_runner}}</td>
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
      passpost1: false,
      passpost2: false
    }
  },
  computed: {},
  ready: function () {
    this.$http.get('http://localhost:5000/api/disable').then(function (res) {
      this.querydis = res.data
    })
    this.$http.get('http://localhost:5000/api/runner').then(function (res) {
      this.queryrun = res.data
    })
  },
  attached: function () {},
  methods: {
    check1: function (index, show) {
      if (this.active1 === index) {
        this.test1 = !this.test1
      } else {
        this.test1 = true
      }
      this.active1 = index
      // function post //
      this.postMatcing(show._id, null)
    },
    check2: function (index, show) {
      if (this.active2 === index) {
        this.test2 = !this.test2
      } else {
        this.test2 = true
      }
      this.active2 = index
      this.postMatcing(null, show._id)
    },
    postMatcing: function (data1, data2) {
      console.log('data1:' + data1, 'data2:' + data2)
      if (data1 !== null) {
        this.data1 = data1
        this.passpost1 = true
        console.log('data1:' + this.data1)
      }
      if (data2 !== null) {
        this.data2 = data2
        this.passpost2 = true
        console.log('data2:' + this.data2)
      }
    },
    post: function () {
      console.log('post function')
      if ((this.passpost1 && this.passpost2) === true) {
        var data = {
          disable_id: this.data1,
          runner_id: this.data2
        }
        this.$http.post('http://localhost:5000/api/Match', data).then(function (res) {
          console.log(res)
        })
      }
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
