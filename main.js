Vue.component('vue-select',{
    props: ['list'],

    data(){
        return{
            value: undefined
        }
    },
    watch: {
        value(newValue){
            alert(newValue)
        }
    },

    template: //html 
    ` 
        <Select v-model="value">
            <option classs="option" v-for="item of list">{{item}}</option> 
        </Select> 
    `
})



const app = new Vue({
    el: '#app',
    data:{
        tipo: undefined,
        tipoUsuario: ['Administrador','Secretario','Vendedor','Ensamblador'], 
        
    },
    methods:{ 
        
        
    },
 
     
    
})