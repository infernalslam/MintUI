<template lang="html">
  <match></match>
  <br>
  <button class="ui red basic button" @click="" v-show="activeBtnMatch">Matching Name</button>
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
          <tr v-bind:class="{ 'actives': active1 === $index && test1 }" @click="check1($index)">
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
          <tr v-bind:class="{ 'actives': active2 === $index && test2}" @click="check2($index)">
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
      select: [],
      activeBtn1: false,
      activeBtn2: false,
      activeBtnMatch: false
    }
  },
  computed: {},
  ready: function () {
    this.$http.get('http://localhost:5000/api/disable').then(function (res) {
      this.querydis = res.data
    })
    // this.$http.get('http://localhost:5000/api/disable/queryrun').then(function (res) {
    //   this.queryrun = res.data
    // })
    this.$http.get('http://localhost:5000/api/runner').then(function (res) {
      this.queryrun = res.data
    })
  },
  attached: function () {},
  methods: {
    check1: function (index) {
      if (this.active1 === index) {
        this.test1 = !this.test1
        this.activeBtn1 = false
      }
      if (this.active1 !== index) {
        this.test1 = true
        this.activeBtn1 = true
      }
      if (this.activeBtn1 === true && this.activeBtn2 === true) {
        this.activeBtnMatch = true
      }
      if (this.activeBtn1 === false || this.activeBtn2 === false) {
        this.activeBtnMatch = false
      }
      this.active1 = index
    },
    check2: function (index) {
      if (this.active2 === index) {
        this.test2 = !this.test2
        this.activeBtn2 = false
      }
      if (this.active2 !== index) {
        this.test2 = true
        this.activeBtn2 = true
      }
      if (this.activeBtn1 === true && this.activeBtn2 === true) {
        this.activeBtnMatch = true
      }
      if (this.activeBtn1 === false || this.activeBtn2 === false) {
        this.activeBtnMatch = false
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
.disable {

}
</style>
