import {defineStore} from 'pinia'

export const echoed = defineStore('main_store', {
    state: () => ({
        userInfo: {
            img: "public/def.jpg" //https://images.cnblogs.com/cnblogs_com/charlottepl/1676587/o_210408083032QQ%E5%9B%BE%E7%89%8720210408162958.jpg
        }
    }),
    actions: {
        increment() {
            this.count++
        },
    }
})