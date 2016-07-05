<template lang="html">
  <br><br><br>
  <div class="ui container">
    <button class="ui green button" @click="add(input)">+ สร้าง</button>
    <br>
    name : <input type="text" v-model="input.name"> <br>
    date : <input type="date" v-model="input.date"> <br>
    location : <input type="text" v-model="input.location"> <br>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      input: {}
    }
  },
  computed: {},
  ready: function () {},
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
    }
  },
  components: {}
}
</script>

<style lang="css">
</style>
