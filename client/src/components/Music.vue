<template>
<v-flex xs6 offset-xs3>
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
           <div v-for="music in musics" class="music" :key="music.id">
             <v-layout>
               <v-flex  xs6 >
                 <div class="music-title">
                  {{music.title}}
                 </div>
                 <div class="music-artist">
                   {{music.artist}}
                 </div>
                 <div class="music-genre">
                   {{music.genre}}
                 </div>

                  <v-btn flat dark class="cyan">
                    <router-link :to="{ name: 'viewMusic', params:{musicId: music.id} }">
                        Browse
                    </router-link>
                  </v-btn>
               </v-flex>

               <v-flex  xs6>
                 <img class="album-image" :src="music.albumImageUrl">
               </v-flex>
             </v-layout>
             
           </div>
      </div>
   </panel>
   </v-flex>
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
.album-image{
  width: 70%;
  margin: 0 auto;
}
.music{
  padding: 50px;
  height: 330px;
  overflow: hidden;
}
.music-title{
  font-size: 30px;
}
.music-artist{
  font-size: 24px;
}
.music-genre{
  font-size: 18px;
}
</style>
