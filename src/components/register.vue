<template>
  {{msg}} <br>
<mt-field label="username" placeholder="Input username"></mt-field>
<mt-field label="email" placeholder="Input email" type="email"></mt-field>
<mt-field label="password" placeholder="Input password" type="password"></mt-field>
<mt-field label="phone" placeholder="Input tel" type="tel"></mt-field>
<mt-field label="website" placeholder="Input website" type="url"></mt-field>
<mt-field label="number" placeholder="Input number" type="number"></mt-field>
<mt-field label="birthday" placeholder="Input birthday" type="date"></mt-field>
<!-- <mt-field label="introduction" placeholder="introduction" type="textarea" rows="4"></mt-field>
<mt-field label="email" state="success"></mt-field>
<mt-field label="email" state="error"></mt-field>
<mt-field label="email" state="warning"></mt-field> -->
</template>
<script>
import Field from 'mint-ui'
import 'mint-ui/lib/cell/style.css'
export default {
  data () {
    return {
      msg: 'Register page',
      components: Field
    }
  }
}
</script>
