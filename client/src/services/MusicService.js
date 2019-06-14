import Api from '@/services/Api'

export default {
    index() {
        return Api().get('musics')
    },
    post(music) {
        return Api().post('musics', music)
    }
}