import vue from 'vue'
import vuex from 'vuex'
import routerList from '../router/index'
vue.use(vuex)

export default new vuex.Store({
    state :{
        userList:[],
        // routers:routers

    },
    mutations:{
        setUserList(state,data){
            state.userList = data;
        },
        // setRouters(state,data){
        //     state.routers = data;
        // }
    },
    actions:{
        CommitUserList ({commit},data) {
            return new Promise((resolve)=>{
                commit('setUserList',data)
                resolve()
            })
        },
        // CommitRouters ({commit},data) {
        //     return new Promise((resolve)=>{
        //         commit('setRouters',data)
        //         resolve()
        //     })
        // }
    }
});