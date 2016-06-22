<template lang="html">
  <match></match>
  <br><br>
  <div class="ui divided items" v-for="show in querydis">
  <div class="item">
    <div class="image">
      <!-- show picture -->
      <!-- <img src="/images/wireframe/image.png"> -->
    </div>
    <div class="content">
      <a class="header">ชื่อ {{show.name}} {{show.surname}} อายุ {{show.age}}</a>
      <div class="meta">
        <span class="cinema">{{show.description}}</span>
      </div>
      <div class="description">
        <p></p>
      </div>
      <div class="extra">
        <div class="ui label">{{show.distance_runner}} km.</div>
      </div>
    </div>
  </div>
</div>


<!-- <v-modal v-ref:modal>
  <div class="ui segments">
    <div class="ui segment">
      <h3 class="ui header">Modal header</h3>
    </div>
    <div class="ui segment content">
      <p>Content</p>
    </div>
    <div class="ui segment">
      <button class="ui button" @click="$refs.modal.hide">Hide modal</button>
    </div>
  </div>
</v-modal> -->


</template>

<script>
import Match from './match.vue'
// import $ from 'jquery'
// $('.ui.basic.modal').modal('show')
export default {
  data: function () {
    return {
      querydis: [],
      queryrun: []
    }
  },
  computed: {},
  ready: function () {
    this.$http.get('http://localhost:5000/api/disable/querydis').then(function (res) {
      console.log(res.data)
      this.querydis = res.data
    })
    this.$http.get('http://localhost:5000/api/disable/queryrun').then(function (res) {
      console.log(res.data)
      this.queryrun = res.data
    })
  },
  attached: function () {},
  methods: {
    // model: function () {
    //   $('.ui.basic.modal').modal('show')
    // }
  },
  components: {
    Match
  }
}
</script>

<style lang="css">
</style>
