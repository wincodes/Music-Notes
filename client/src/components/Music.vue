<template>
   <panel title="Musics">
       <v-btn
        slot="action"
        fab
        absolute
        right
        middle
        light
        class="cyan accent-2">
        <router-link to="/music/add">
          <v-icon>add</v-icon>
        </router-link>
        </v-btn>
      <div class="pl-4 pr-4 pt-2 pb-2">
           <div v-for="music in musics" :key="music.id">
             <h4>{{music.title}}</h4>
             <p>
               {{music.artist}}
               <br>
               <small>{{music.lyrics}}</small>
               <br>
               <small>{{music.tab}}</small>
             </p>
             <hr>
           </div>
      </div>
   </panel>
</template>
<script>
import Panel from '@/components/Panel'
import MusicService from '@/services/MusicService'
export default {
  data() {
    return{
      musics: null
    }
  },
    components: {
      Panel
    },
    async mounted() {
      this.musics = (await MusicService.index()).data
    },
}
</script>
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
