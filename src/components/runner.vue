<template lang="html">
  <insert></insert>
  <h4 class="ui dividing header">หน้ากรอกข้อมูล(อาสาสมัคร)</h4>
  <div class="ui container">
    <form class="ui form">
      <div class="field">
        <label>type</label>
        <select class="ui fluid dropdown" v-model="input.gender">
          <option value="m">male</option>
          <option value="f">female</option>
        </select>
      </div>
      <div class="field">
        <label>First Name</label>
        <input type="text"placeholder="First Name" v-model="input.name">
      </div>
      <div class="field">
        <label>Last Name</label>
        <input type="text" placeholder="Last Name" v-model="input.surname">
      </div>
      <div class="field">
        <label>Age</label>
        <input type="number"placeholder="Age" v-model="input.age">
      </div>
      <div class="field">
        <div class="ui checkbox">
          <input type="checkbox" tabindex="0" class="hidden">
          <label>ยืนยันข้อมูล</label>
        </div>
      </div>
      <button class="ui button" type="submit" v-on:click="add(input)">Submit</button>
    </form>
</template>

<script>
import Insert from './insert.vue'
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
      var setData = {
        name: input.name,
        surname: input.surname,
        age: input.age,
        gender: input.gender,
        type: 'normal'
      }
      this.$http.post('http://192.168.2.130:10000/users', setData).then(function (res) {
        console.log(res)
      })
    }
  },
  components: {
    Insert
  }
}
</script>

<style lang="css">
</style>
