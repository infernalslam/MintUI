<template lang="html">
  <br><br><br>
  <div class="ui container">
    <br>
    <button class="ui green button" @click="modal(input)">+ สร้าง</button>

    <br><br>
    <div class="ui cards">
      <div class="card" v-for="show in data">
        <div class="content">
          <img class="right floated mini ui image" src="/images/avatar/large/elliot.jpg">
          <div class="header">
            <!-- ชื่อ event -->
            {{show.event_name}}
          </div>
          <div class="meta">
            {{show.event_date}}
          </div>
          <div class="description">
            {{show.event_location}}
          </div>
        </div>
        <div class="extra content">
          <div class="ui two buttons">
            <div class="ui basic green button" @click="updateEvent(show.event_id)">แก้ไข</div>
            <div class="ui basic red button" @click="delEvent(show.event_id)">ลบ</div>
          </div>
        </div>
     </div>
<!-- modal -->
<div class="ui modal">
  <i class="close icon"></i>
  <div class="header">
    จัดการเเข่งขัน
  </div>
  <div class="image content">
    <div class="ui medium image">
      <img src="../../static/fav.png">
    </div>
    <div class="description">
      <div class="ui header">จัดการสร้างการเเข่งขัน</div>
      <!-- <div class='field'>
        <label>การจัดการชื่อโครงการ</label>  <input type="text" v-model="input.name"> <br>
        <label>เวลาที่จัด</label> <input type="date" v-model="input.date"> <br>
        <label>สถานที่จัด</label> <input type="text" v-model="input.location"> <br>
      </div> -->
      <form class="ui form">
        `<div class="field">
          <label>การจัดการชื่อโครงการ</label>
          <input type="text" placeholder="การจัดการชื่อโครงการ" v-model="input.name">
        </div>`
        <div class="field">
          <label>เวลาที่จัด</label>
          <input type="date" placeholder="เวลาที่จัด" v-model="input.date">
        </div>
        <div class="field">
          <label>สถานที่จัด</label>
          <!-- <input type="text" placeholder="สถานที่จัด" v-model="input.location"> -->
          <textarea name="name" rows="8" cols="40" v-model="input.location"></textarea>
        </div>
        <div class="field">
          <label>กำหนดค่าสมัคร</label>
          <input type="text" placeholder="กำหนดค่าสมัคร" v-model="input.money">
        </div>
        <div class="field">
          <label>กำหนดระยะการวิ่ง</label>
          <input type="text" placeholder="กำหนดระยะการวิ่ง" v-model="input.runner">
        </div>
        <!-- <button class="ui button" type="submit">สร้าง</button> -->
      </form>
    </div>
  </div>
  <div class="actions">
    <div class="ui black deny button">ยกเลิก</div>
    <div class="ui positive right labeled icon button" @click="add(input)">ตกลง<i class="checkmark icon"></i>
    </div>
  </div>
</div>
<!-- modal -->

</template>
<script>
/*globals $:false */
import store from '../vuex/store.js'
import {stateAction} from '../vuex/actions.js'
export default {
  store,
  vuex: {
    actions: {
      setPage: stateAction
    }
  },
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
    this.setPage(1)
  },
  attached: function () {},
  methods: {
    get: function () {
      this.$http.get('http://192.168.100.113:10000/event').then(function (res) {
        console.log(res)
        this.data = res.data
      })
    },
    add: function (input) {
      // var data = {
      //   event_name: input.name,
      //   event_date: input.date,
      //   event_location: input.location,
      //   event_distance: input.runner
      // }
      var data = {
        event_name: 'วิ่งด้วยกัน ครั้้งที่ 2',
        event_date: input.date,
        event_location: 'Pracha Rat Sai 1 Rd, แขวง วงศ์สว่าง เขต บางซื่อ กรุงเทพมหานคร 10800',
        event_distance: '3,8,10',
        event_price: '200'
      }
      console.log(data)
      this.$http.post('http://192.168.100.113:10000/event', data).then(function (res) {
        console.log(res)
        this.get()
      })
    },
    modal: function (input) {
      console.log(input)
      $('.ui.modal').modal('show')
    },
    delEvent: function (id) {
      console.log(id)
      this.$http.delete('http://192.168.100.113:10000/event/' + id).then(function (res) {
        console.log(res)
        this.get()
      })
    },
    updateEvent: function (id) {
      console.log(id)
    }
  },
  components: {}
}
</script>

<style lang="css">
</style>
