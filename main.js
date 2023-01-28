Vue.component('vue-select',{
    props: ['list'],

    data:function(){
        return{
            value:undefined
        }
    }
    ,
    watch:{

    },

    template: //html 
    `
    <div>
        <Select v-model="value">
            <option classs="option" v-for="item of list">{{item}}</option> 
        </Select>
    </div>
    `
})

const app = new Vue({
    el: '#app',
    data:{
        tipoUsuario: ['Administrador','Secretario','Vendedor','Ensamblador']
        
    },
    methods:{ 
        
        
    },
 
     
    
})