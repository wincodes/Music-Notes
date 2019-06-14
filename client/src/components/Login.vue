<template>
   <panel title="Login">
        <div class="pl-4 pr-4 pt-2 pb-2">
           <v-text-field
            label="Email"
            v-model="email"
          ></v-text-field>
          <br>
          <v-text-field
            label="Password"
            type="password"
            v-model="password"
          ></v-text-field>
          <br> 
          <!-- <input type="password" name="confirmPassword" placeholder="Confirm Password"> -->
          <div class="error" v-html="error" />
          <br>
          <v-btn class="cyan"  @click="login" dark>Log In</v-btn>
        </div>
   </panel>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
  props:[
    'title'
  ],
  components: {
    Panel
  },
  data () {
    return {
        email: '',
        password: '',
        error: null
    }
  },
  methods: {
      async login () {
        this.error = ''
        try{
            const response = await AuthenticationService.login({
                email: this.email,
                password: this.password
            })
            this.$store.dispatch('setToken', response.data.token)
            this.$store.dispatch('setUser', response.data.user)
            //  console.log(response.data);
        }catch(error){
          this.error = error.response.data.error
        }     
      }
  },
  mounted() {},
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.error{
  color: red;
}
</style>
