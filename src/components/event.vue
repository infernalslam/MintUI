<template lang="html">
  <br><br><br>
  <!-- menu -->
    <div class="ui right aligned grid">
       <div class="left floated right aligned two wide column">
          <button class="ui green button" @click="modal(input)">+ สร้าง</button>
       </div>
       <div class="left aligned one wide column">
          <center><button class="ui button" @click="changePage('one')"><i class="content icon"></i></button>
        </div>
        <div class="left aligned one wide column">
          <center><button class="ui button" @click="changePage('two')"><i class="list icon"></i></button>
        </div>
     </div>
     <br>

<!-- _showdata -->
<div v-show="activePage1 === true">
      <table class="ui orange table">
      <thead>
        <tr><th><center>ชื่อโครงการ</th>
        <th><center>สถานที่จัดการวิ่ง</th>
        <th><center>วันที่จัดงาน</th>
        <th><center>Detail</th>
        <th><center>Edit</th>
        <th><center>Delete</th>
      </tr>
      </thead>
      <tbody class="silde ui">
        <tr v-for="show in data">
            <td><center>{{show.event_name}}</td>
            <td><center>{{show.event_date_start}}</td>
            <td><center>{{show.event_location}}</td>
            <td><center><i class="zoom icon" @click="detail($index)"></i></td>
            <td><center><i class="edit icon" @click="updateEvent(show.event_id)"></i></td>
            <td><center><i class="remove icon" @click="delEvent(show.event_id)"></i></td>
        </tr>
      </tbody>
    </table>
  </div>

<!-- showdata_page2 -->
<div v-show="activePage2 === true">
   <center>
     <div class="ui one column doubling stackable grid container">
       <div class="column">
          <div class="ui cards">
            <div class="card" v-for="show in data">
              <div class="content">
                  <div class="header">{{show.event_name}}</div>
                  <div class="meta">{{show.event_date}}</div>
                  <div class="description">{{show.event_location}}</div>
             </div>
            <div class="extra content">
                <div class="ui two buttons">
                  <div class="ui basic green button" @click="updateEvent(show.event_id)">แก้ไข</div>
                  <div class="ui basic red button" @click="delEvent(show.event_id)">ลบ</div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
   </center>
</div>






<!-- modal_create -->
<!-- <div class="ui modal">
      <i class="close icon"></i><div class="header">สร้างEvent มาราธอน</div>
    <div class="image content">
      <div class="ui medium image"><img src="../../static/logo.png"></div>
      <div class="description">
        <div class="ui header">สร้าง event เเละการเเข่งขัน</div>
        <p>ข้อมูลสามารถว่างได้ถ้าไม่ต้องการให้มีในระบบ</p></div>
      </div>
      <form class="ui form">
          <div class="field">
            <label>การจัดการชื่อโครงการ</label>
            <input type="text" placeholder="การจัดการชื่อโครงการ" v-model="input.name">
          </div>
        </form>
    <div class="actions">
      <div class="ui black deny button">ยกเลิก</div>
      <div class="ui positive right labeled icon button">สร้าง Event<i class="checkmark icon"></i></div>
    </div>
  </div>
</div> -->

<!-- modal -->
<div class="ui modal">
  <i class="close icon"></i>
  <div class="header">
    จัดการเเข่งขัน
  </div>
  <div class="image content">
    <div class="ui medium image"><img src="../../static/logo.png"></div>
    <div class="description">
      <div class="ui header">จัดการสร้างการเเข่งขัน
      <p>สร้าง event เเละการเเข่งขัน  ข้อมูลสามารถว่างได้ถ้าไม่ต้องการให้มีในระบบ</p></div>
      <form class="ui form">
      <div class='field'>
        <label>การจัดการชื่อโครงการ</label>
        <input type="text" placeholder="การจัดการชื่อโครงการ" v-model="input.name"> <br>
        <label>สถานที่จัด</label>
        <textarea placeholder="สถานที่จัด" v-model="input.location"></textarea>
      </div>
        <div class="field">
          <label>วันที่เริ่มสมัคร</label>
          <input type="date" placeholder="วันที่เริ่มสมัคร" v-model="input.date_start">
        </div>
        <div class="field">
          <label>วันที่ปิดสมัคร</label>
          <input type="date" placeholder="วันที่ปิดสมัคร" v-model="input.date_end">
        </div>
        <div class="field">
          <label>วันที่จัดการเเข้งขัน</label>
          <input type="date" placeholder="วันที่จัดการเเข้งขัน" v-model="input.date">
        </div>
        <div class="field">
          <label>กำหนดค่าสมัคร/ระยะทาง</label>
        </div>
        <div class="field">
          <input type="number" placeholder="เงิน" v-model="input.money">
          <input type="number" placeholder="ระยะทาง" v-model="input.distance">
        </div>
      </form>
    </div>
  </div>
  <div class="actions">
    <div class="ui black deny button">ยกเลิก</div>
    <div class="ui positive right labeled icon button" @click="add(input)">ตกลง<i class="checkmark icon"></i>
    </div>
  </div>

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
      data: [],
      activePage1: true,
      activePage2: false
    }
  },
  computed: {},
  ready: function () {
    this.$http.get('http://192.168.100.111:10000/event').then(function (res) {
      console.log(res)
      this.data = res.data
    })
    this.setPage(1)
  },
  attached: function () {},
  methods: {
    get: function () {
      this.$http.get('http://192.168.100.111:10000/event').then(function (res) {
        console.log(res)
        this.data = res.data
      })
    },
    add: function (input) {
      var data = {
        event_name: 'วิ่งด้วยกัน ครั้้งที่ 2',
        event_date: input.date,
        event_location: 'Pracha Rat Sai 1 Rd, แขวง วงศ์สว่าง เขต บางซื่อ กรุงเทพมหานคร 10800',
        event_distance: '3,8,10',
        event_price: '200,300,400'
      }
      console.log(data)
      this.$http.post('http://192.168.100.111:10000/event', data).then(function (res) {
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
      this.$http.delete('http://192.168.100.111:10000/event/' + id).then(function (res) {
        console.log(res)
        this.get()
      })
    },
    updateEvent: function (id) {
      console.log(id)
    },
    changePage: function (page) {
      if (page === 'one') {
        this.activePage1 = true
        this.activePage2 = false
      } else {
        this.activePage1 = false
        this.activePage2 = true
      }
    },
    detail: function (index) {
      console.log(this.data[index])
    }
  },
  components: {}
}
</script>

<style lang="css">
.silde{
  width:100%; 
  height: 300px; 
  overflow: scroll; 
}
</style>
