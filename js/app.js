const app = Vue.createApp({})
app.component('foco',{
    props:['lugar'],
    data(){
        return{
            estatus: 0
        }
    },
    template:`
    <img :src="estatus ? 'img/focoOn.png' : 'img/focoOff.png'" @click="estatus = !estatus">
    <p style="text-align:center">{{lugar}}</p>
    `
})
const vm = app.mount('#app')