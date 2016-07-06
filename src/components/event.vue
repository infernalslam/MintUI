<template lang="html">
  <br><br><br>
  <div class="ui container">
    <br>
    <button class="ui green button" @click="add(input)">+ สร้าง</button>
    <br>
    name : <input type="text" v-model="input.name"> <br>
    date : <input type="date" v-model="input.date"> <br>
    location : <input type="text" v-model="input.location"> <br>
  </div>
  <div v-for="show in data">
      {{show.event_name}} <br>
      {{show.event_location}} <br>
      {{show.request_id}}
  </div>
<button @click="modal()">test</button>

<div class="ui basic modal">
  <i class="close icon"></i>
  <div class="header">
    Archive Old Messages
  </div>
  <div class="image content">
    <div class="image">
      <i class="archive icon"></i>
    </div>
    <div class="description">
      <p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>
    </div>
  </div>
  <div class="actions">
    <div class="two fluid ui inverted buttons">
      <div class="ui cancel red basic inverted button">
        <i class="remove icon"></i>
        No
      </div>
      <div class="ui ok green basic inverted button">
        <i class="checkmark icon"></i>
        Yes
      </div>
    </div>
  </div>
</div>
</template>
<script>
/*globals $:false */
export default {
  data: function () {
    return {
      input: {},
      data: []
    }
  },
  computed: {},
  ready: function () {
    this.$http.get('http://192.168.100.113:10000/event').then(function (res) {
      console.log(res)
      this.data = res.data
    })
  },
  attached: function () {},
  methods: {
    add: function (input) {
      var data = {
        event_name: input.name,
        event_date: input.date,
        event_location: input.location,
        request_id: 1
      }
      console.log(data)
      this.$http.post('http://192.168.100.113:10000/event', data).then(function (res) {
        console.log(res)
      })
    },
    modal: function () {
      console.log('test')
      $('.ui.basic.modal').modal('show')
    }
  },
  components: {}
}
</script>

<style lang="css">
</style>
