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
        caArr:[
            {id:1,desc:'12',ms:'华硕（ASUS）ROG-STRIX-RX5700XT-O8G-GAMING OC 1770-1965MHz 猛禽游戏显卡8G',rmb:3999,src: "//img14.360buyimg.com/mobilecms/s372x372_jfs/t1/57295/21/13141/117173/5da01808E54974f9d/74cf23e41d4d5303.jpg!q70.dpg.webp",},
            {id:2,desc:'12',ms:"AMD 锐龙 7 1800X 处理器 (r7) 8核AM4接口 3.6GHz 盒装CPU",rmb:3259,src: "//img14.360buyimg.com/mobilecms/s372x372_jfs/t4669/170/572001574/237306/1945afe0/58d1ef24N88763979.jpg!q70.dpg.webp",},
            {id:3,desc:'12',ms:"芝奇(G.SKILL) 16GB(8G×2)套装 3600频率 DDR4 台式机内存条 焰光戟RGB灯条(C18)",rmb:759,src: "//img14.360buyimg.com/mobilecms/s372x372_jfs/t1/45963/10/14061/155268/5daed1a4Efbd39cd1/657bd255ceb02003.jpg!q70.dpg.webp",},
           
            
        ]

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