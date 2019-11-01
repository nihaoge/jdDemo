import Vue from 'vue'
import Vuex from "vuex"
import axios from 'axios'

Vue.use(Vuex)

function fetch(api){
    axios({
        url:'http://localhost:8080'+api,
        method:'GET',
    }).then(res=>{
        console.log(res);
        
    }).catch( err=>{
        console.log('接口异常',err);
        
    }).then(()=>{
        //总是会执行
    })
}

const store = new Vuex.Store({
    state:{

    },
    mutations:{

    },
    actions:{
        getsKill(){
            fetch('./db/goods.json')
        }


    }
})
export default store