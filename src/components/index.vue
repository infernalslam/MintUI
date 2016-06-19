<template>
  <div class="ui container">
    <div class="ui large top fixed hidden menu">
     <div class="ui container">
       <a class="active item" v-link="{ path: '/' }">Runtogether logo</a>
       <div class="right menu">
         <a class="item">ประสบการณ์ที่ผ่านมา</a>
         <a class="item" v-link="{ path: '/check' }">ตรวจสอบสถานะ</a>
         <div class="item">
           <a class="ui primary button" v-link="{ path: '/register' }">สมัครวิ่ง</a>
         </div>
       </div>
     </div>
   </div>
 </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'Index page'
    }
  }
}
</script>
