<template>
<div>
<div class="container">
<v-layout>
    <v-flex xs6>
        
        <panel title="Music Data">
            <v-layout class="music">
                <v-flex xs6>
                    <div class="music-title">
                        {{music.title}}
                    </div>
                    <div class="music-artist">
                        {{music.artist}}
                    </div>
                    <div class="music-genre">
                        {{music.genre}}
                    </div>
                </v-flex>
            
                <v-flex xs6>
                    <img class="album-image" :src="music.albumImageUrl">
                    <br>
                    {{music.album}}
                </v-flex>
            </v-layout>
        </panel>
    </v-flex>
    
    <v-flex xs6 class="ml-2">
        <panel title="Youtube">
            <v-layout class="music">
                <div>
                    <youtube
                    :video-id="music.youtubeId"
                    :player-width="500"
                    :player-height="300"
                    >  
                    </youtube>
                </div>
            </v-layout>
        </panel>
    </v-flex>
</v-layout>
</div>

<div class="container">
<v-layout>
    <v-flex xs6>
        
        <panel title="Music Lyrics">
            <v-layout class="music">
                <v-flex xs6>
                    <div class="music">
                        {{music.lyrics}}
                    </div>
                </v-flex>
            </v-layout>
        </panel>
    </v-flex>
    
    <v-flex xs6 class="ml-2">
        <panel title="Music Notes">
            <v-layout class="music">
                <div>
                    {{music.tab}}
                </div>
            </v-layout>
        </panel>
    </v-flex>
</v-layout>
</div>
    <v-flex>
    <v-btn flat dark class="cyan">
        <router-link :to="{ name: 'edit-music', params:{musicId: music.id} }">
            Edit
        </router-link>
    </v-btn>
    </v-flex>
</div>
</template>
<script>
import MusicService from '@/services/MusicService'
import Panel from '@/components/Panel'
export default {
    data(){
        return{
            music: null
        }
    },
    async mounted (){
        const musicId = this.$store.state.route.params.musicId
        this.music = (await MusicService.show(musicId)).data
    },
    components: {
      Panel
    }   
}
</script>
<style scoped>
    .error{
  color: red;
}
.album-image{
  width: 90%;
  margin: 0 auto;
  padding: 10px;
}
.music{
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
a {
  color: #fff;
  text-decoration: none;
}
/* .music-title{
  font-size: 30px;
}
.music-artist{
  font-size: 24px;
}
.music-genre{
  font-size: 18px;
}
*/
</style>