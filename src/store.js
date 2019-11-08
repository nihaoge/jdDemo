import Vue from 'vue'
import Vuex from "vuex"
import axios from 'axios'

Vue.use(Vuex)

function fetch(api,callback){
    axios({
        method:'GET',
        url:'http://localhost:8080/'+api
        
    }).then(res=>{
        let data
        if(res.data.err===0){
           data=res.data.data;
        }
        callback && callback(data)
    }).catch( err=>{
        console.log('接口请求异常',err);
        
    }).then(()=>{
        //总是会执行
    })
}
const store = new Vuex.Store({
    state:{
        msg:'123456',
        skArr:[],
        adArr:[],
        rcArr:[],
        cateArr:[],
        cucateArr:{},

        userinfo:{
            name:'zhh',
            mobile:'186000000'
            
        },
        caArr:[]

    },
    mutations:{

        updateskArr(state,payload){
            state.skArr = payload
        },
        updateadArr(state,payload){
            state.adArr=payload
            // console.log(state.adArr)
        },
        updatecateArr(state,payload){
            state.cateArr = payload

        },
        upcucateArr(state,payload){
            state.cucateArr = payload[0]

        },
        uprcArr(state,payload){
            state.rcArr=[...state.rcArr,...payload]
        },
        upcaArr(state,payload){
            console.log(state,payload)
            switch (payload.type){
                case'delete':
                state.caArr.map((ele,idx)=>{
                    if(ele.id == payload.item.id)
                    {
                        state.caArr.splice(idx,1)
                    return

                    }
                    
                })
                break;
                case "delAll":
                    state.caArr=[]
                    break;
                    case 'insert':
                        console.log(state,payload);
                        state.caArr.push(payload.item)
                        break;
                        default:
            }
            
            

        },
        updatacaArr(state,payload){
            state.cucateArr = state.cateArr[payload]
        }

        
        
        
    },
    actions:{
        getsKill(){
            fetch('./db/goods.json',function(data){
                // console.log(data);
                store.commit('updateskArr',data)
                
            })
        },
        getAds(store){
            fetch('/db/ads.json',data=>{
                console.log(data);
                store.commit('updateadArr',data)
                
                

                
            })
        },
        getRcmd(){
            fetch("./db/rcmd.json",data=>{
                store.commit('updateRcmd',data)
                console.log(data);
                store.commit('uprcArr',data)
                

            })
        },
        getCate(){
            fetch("./db/cates.json",data=>{
               
                
                store.commit('updatecateArr',data);
                console.log(data);
                store.commit("upcucateArr",data)

            })
        }


    }
    
})
export default store