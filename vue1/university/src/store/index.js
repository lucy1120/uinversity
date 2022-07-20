import { createStore } from 'vuex'
// const screenW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
import axios from 'axios';

export default createStore({
    // 全局变量，适用于所有
    state:{
        URL:'http://localhost:1338/',
        screenW: 1200,
        extraData:[]
    },
    getters:{

    },
    mutations:{
        extraFun(state){
            axios.get(state.URL+'users/getMsgObj').then(rs=>{
                let arr = rs.data;
                state.extraData = arr;
            })
        }
    },
    actions:{

    },
    modules:{

    }
})