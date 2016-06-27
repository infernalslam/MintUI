<template lang="html">
  <insert></insert>
  <h4 class='ui dividing header'>หน้ากรอกข้อมูล(คนพิการ)</h4>
  <div class='ui container'>
    <form class='ui form'>
      <div class='field'>
        <label>gender</label>
        <select class='ui fluid dropdown' v-model='input.gender'>
          <option value='m'>male</option>
          <option value='f'>female</option>
        </select>
      </div>
      <div class='field'>
        <label>First Name</label>
        <input type='text'placeholder='First Name' v-model='input.name'>
      </div>
      <div class='field'>
        <label>Last Name</label>
        <input type='text' placeholder='Last Name' v-model='input.surname'>
      </div>
      <div class='field'>
        <label>Age</label>
        <input type='number'placeholder='Age' v-model='input.age'>
      </div>
      <div class='field'>
        <label>email</label>
        <input type='email'placeholder='email' v-model='input.email'>
      </div>
      <div class='field'>
        <label>tel</label>
        <input type='text'placeholder='tel' v-model='input.tel'>
      </div>
      <div class='field'>
        <label>Date</label>
        <input type='date'placeholder='tel' v-model='input.date'>
      </div>
      <div class='field'>
        <label>distance_runner</label>
        <input type='number'placeholder='distance_runner' v-model='input.distance_runner'>
      </div>
        <div class='ui form'>
          <div class='field'>
            <label>description</label>
            <textarea v-model='input.description'></textarea>
          </div>
      <button class='ui button' type='submit' v-on:click='add(input)'>Submit</button>
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
      // var setData = {
      //   mem_name: input.name,
      //   mem_surname: input.surname,
      //   mem_gender: input.gender,
      //   mem_age: input.age,
      //   mem_email: input.email,
      //   mem_tel: input.tel,
      //   mem_date: input.date,
      //   mem_distance: input.distance_runner,
      //   mem_pic: '',
      //   mem_discription: input.description,
      //   group_id: 2,
      //   mem_type: 'disabled',
      //   mem_status: 'unactive'
      // }
      var setData = {
        mem_name: 'กมลภพ',
        mem_surname: 'เเพงวังทอง',
        mem_gender: 'm',
        mem_age: '21',
        mem_email: 'infernal-slam@gmail.com',
        mem_tel: '029110020',
        mem_date: '2016-06-06',
        mem_distance: '4',
        mem_pic: 'hyuhyhyhy',
        mem_discription: 'so good',
        group_id: 1,
        mem_type: 'disabled',
        mem_status: 'unactive'
      }
      this.$http.post('http://192.168.2.130:10000/members', setData).then(function (res) {
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
