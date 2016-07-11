<template lang='html'>
  <br><br>
  <h4 class='ui dividing header'>หน้ากรอกข้อมูล(อาสาสมัคร)</h4>

  <div class="ui grid">
    <div class="four wide column">
      <div class="ui vertical fluid tabular menu">
        <a class="active item" v-link="{ path: '/runner' }">อาสาสมัคร</a>
        <a class="item" v-link="{ path: '/disabled' }">คนพิการ</a>
      </div>
    </div>

    <div class="twelve wide stretched column">
      <div class="ui segment">
        <div class='ui container'>
          <div class='ui form'>
            <div class='field'>
              <label>เข้าร่วมโครงการ &nbsp; (โครงการ)</label>
              <hr> <br>
              <select class='ui fluid dropdown' v-model='input.event'>
                <option v-for= "(key, show) in data" :value="show.event_id"
                selected="selected">{{show.event_name}}</option>
              </select>
            </div>



            <div class='field'>
              <!-- <label>ข้อมูลส่วนตัว &nbsp; (Personal)</label>
              <hr> <br>
              <label>เพศ</label>
              <select class='ui fluid dropdown' v-model='input.gender'>
                <option value='m'>male</option>
                <option value='f'>female</option>
              </select> -->
              <label>ข้อมูลส่วนตัว &nbsp; (Personal)</label>
              <hr> <br>
              <div class="inline fields">
                  <label>เพศ</label>
                  <div class="field">
                    <div class="ui radio checkbox">
                      <input type="radio" name="frequency" checked="checked" v-model="input.gender">
                      <label>ผู้ชาย</label>
                    </div>
                  </div>
                  <div class="field">
                    <div class="ui radio checkbox">
                      <input type="radio" name="frequency" v-model="input.gender">
                      <label>ผู้หญิง</label>
                    </div>
                  </div>
                </div>
            </div>





            <div class='field'>
              <label>ชื่อ</label>
              <input type='text'placeholder='ชื่อ' v-model='input.name'>
            </div>




            <div class='field'>
              <label>นามสกุล</label>
              <input type='text' placeholder='นามสกุล' v-model='input.surname'>
            </div>


            <div class='field'>
              <label>อายุ</label>
              <input type='number'placeholder='อายุผู้สมัคร' v-model='input.age'>
            </div>


            <div class='field'>
              <label>E-mail</label>
              <input type='email'placeholder='email' v-model='input.email'>
            </div>

            <div class='field'>
              <label>เบอร์</label>
              <input type='text'placeholder='เบอร์ที่สะดวก' v-model='input.tel'>
            </div>

            <div class='field'>
              <label>วันที่สมัคร</label>
              <input type='date'placeholder='วันที่สมัคร' v-model='input.date'>
            </div>


            <div class='field'>
              <label>ระยะทาง</label>
              <input type='number'placeholder='ระยะทาง' v-model='input.distance_runner'>
            </div>

              <div class='ui form'>
                <div class='field'>
                  <label>โปรดระบุหากมีความสำคัญที่ผู้จัดงานต้องทราบ</label>
                  <textarea v-model='input.description'placeholder="โปรดระบุหากมีความสำคัญที่ผู้จัดงานต้องทราบ"></textarea>
                </div>
            <button class='ui blue button' type='submit' v-on:click='add(input)'>สมัครเข้าร่วมวิ่ง</button>
          </form>
      </div>
    </div>
  </div>
</template>

<script>
import Insert from './insert.vue'
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
      this.data = res.data
    })
    this.setPage(3)
  },
  attached: function () {},
  methods: {
    add: function (input) {
      console.log('test')
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
      //   group_id: 1,
      //   mem_type: 'normal',
      //   mem_status: 'unactive',
      //   mem_pay: 'null'
      // }
      // console.log(input.event)
      var setData = {
        mem_name: 'สนุกจุง',
        mem_surname: 'ที่ทำงาน',
        mem_gender: 'm',
        mem_age: '21',
        mem_email: 'mint-sly@hotmail.com',
        mem_tel: '029110020',
        mem_date: '2016-06-05T17:00:00.000Z',
        mem_pic: 'hyuhyhyhy',
        mem_discription: 'so good',
        mem_type: 'normal',
        event_id: input.event
      }
      this.$http.post('http://192.168.100.113:10000/members', setData).then(function (res) {
        console.log('insert data')
        console.log(res)
      })
    }
  },
  components: {
    Insert
  }
}
</script>

<style lang='css'>
.ui.segment {
  position: relative;
  background: rgba(250, 160, 30, 0.91) !important;
  box-shadow: 0 1px 2px 0 rgba(34,36,38,.15);
  margin: 1rem 0;
  padding: 1em;
  border-radius: .28571429rem;
  border: 1px solid rgba(34,36,38,.15);
}
</style>
