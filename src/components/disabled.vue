<template lang="html">
  <insert></insert>
  <h4 class="ui dividing header">หน้ากรอกข้อมูล(คนพิการ)</h4>
  <div class="ui container">
    <form class="ui form">
      <div class="field">
        <label>gender</label>
        <select class="ui fluid dropdown" v-model="input.gender">
          <option value="ชาย">male</option>
          <option value="หญิง">female</option>
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
        <label>tel</label>
        <input type="text"placeholder="tel" v-model="input.tel">
      </div>
      <div class="field">
        <label>distance_runner</label>
        <input type="number"placeholder="distance_runner" v-model="input.distance_runner">
      </div>
        <div class="ui form">
          <div class="field">
            <label>description</label>
            <textarea v-model="input.description"></textarea>
          </div>
      <div class="field">
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
        gender: input.gender,
        name: input.name,
        surname: input.surname,
        age: input.age,
        tel: input.tel,
        distance_runner: input.distance_runner,
        description: input.description,
        date: input.date,
        type: 'disable',
        match: 'null'
      }
      this.$http.post('http://localhost:5000/api/disable', setData).then(function (res) {
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
