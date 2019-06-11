<template>
    <v-toolbar fixed class="cyan" dark>
        <v-toolbar-title class="mr-4">
            <router-link to="/">
                Music Notes
            </router-link>
        </v-toolbar-title>

        <v-toolbar-items>
            <v-btn flat dark>
                Browse
            </v-btn>
        </v-toolbar-items>

        <v-spacer></v-spacer>

        <v-toolbar-items>
            <v-btn 
            v-if="!$store.state.isUserLoggedIn" 
            flat dark>
            <router-link to="login">
                Log In
            </router-link>
            </v-btn>
        </v-toolbar-items>

        <v-toolbar-items>
            <v-btn
             v-if="!$store.state.isUserLoggedIn"
             flat dark>
                <router-link to="register">
                    Sign Up
                </router-link>
            </v-btn>
        </v-toolbar-items>

    </v-toolbar>
</template>

<script>
export default { 
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
  color: #fff;
  text-decoration: none;
}
.error{
  color: red;
}
</style>
