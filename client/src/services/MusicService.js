import Api from '@/services/Api'

export default {
    index() {
        return Api().get('musics')
    },
    post(music) {
        return Api().post('musics', music)
    },
    show(musicId){
        return Api().get(`musics/${musicId}`)
    },
    put(music) {
        return Api().put(`musics/${music.id}`, music)
    },
}