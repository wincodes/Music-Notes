<template>
        <panel title="Edit Music">
        <div class="pl-4 pr-4 pt-2 pb-2">
           <v-text-field
            label="Title"
            required
            :rules="[required]"
            v-model="music.title"
          ></v-text-field>
          <br>
          <v-text-field
            label="Artist"
            required
            :rules="[required]"
            v-model="music.artist"
          ></v-text-field>
          <br>
          <v-text-field
            label="Album"
            required
            :rules="[required]"
            v-model="music.album"
          ></v-text-field>
          <br>
          <v-text-field
            label="Genre"
            required
            :rules="[required]"
            v-model="music.genre"
          ></v-text-field>
          <br>
          <v-text-field
            label="Album Image Url"
            required
            :rules="[required]"
            v-model="music.albumImageUrl"
          ></v-text-field>
          <br>
          <v-text-field
            label="Youtube Id"
            required
            :rules="[required]"
            v-model="music.youtubeId"
          ></v-text-field>
          <br>
          <v-text-field
            label="Lyrics"
            required
            :rules="[required]"
            multi-line
            v-model="music.lyrics"
          ></v-text-field>
          <br>
          <v-text-field
            label="Tab"
            required
            :rules="[required]"
            multi-line
            v-model="music.tab"
          ></v-text-field>
          <br>
          <div class="err-alert" v-if="error">
            {{error}}
          </div>
          <v-btn class="cyan"  @click="save" dark>Update</v-btn>
        </div>
        </panel>
</template>
<script>
import Panel from '@/components/Panel'
import MusicService from '@/services/MusicService'
export default {
//     props:[
//     'title'
//   ],
  components: {
    Panel
  },
    data(){
        return {
            music:{
                title: null,
                artist: null,
                genre: null,
                album: null,
                albumImageUrl: null,
                youtubeId: null,
                lyrics: null,
                tab: null
            },
            error: null,
            required: (value) => !!value || 'Required.'
        }
    },
    methods: {
        async save(){
                this.error = null
                const areAllFieldsFilled = Object.keys(this.music).every(key => !!this.music[key])
                if(!areAllFieldsFilled){
                  this.error = 'Please Fill All Fields'
                  return
                }
            try{
                const musicId = this.$store.state.route.params.musicId
                const response = await MusicService.put(this.music)
                this.$router.push({
                    name: 'viewMusic',
                    params: {
                      musicId
                    }
                })
            }catch(error){
                console.log(error)
            }
        }
    },
    async mounted() 
    {
      const musicId = this.$store.state.route.params.musicId
      this.music = (await MusicService.show(musicId)).data
    }
}
</script>
<style scoped>
.err-alert{
  color: red;
}
</style>