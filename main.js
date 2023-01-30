Vue.component('vue-select', {
    props: ['list'],
    data: function () {
        return {
            value: undefined
        }
    },
    watch: {
        value(newValue){
            this.$emit('input', newValue)
        }
    },
    template: //html
    `
        <select v-model="value">
            <option classs="option" v-for="item of list">{{item}}</option>
        </select>`
})




const app = new Vue({
    el: '#app',
    data:{ 
        tipo: undefined,
        pin: '',
        tipoUsuario: ['Administrador','Secretario','Vendedor','Ensamblador'], 
        usuarios:[
            {
                tipo: 'Administrador',
                pin: 1234
            },
            {
                tipo: 'Secretario',
                pin: 4567
            },
            {
                tipo: 'Vendedor',
                pin: 7890
            },
            {
                tipo: 'Ensamblador',
                pin: 1235
            },
            
        ],  
        validado: false,
        enlace: '#'

        
    }, 
    methods:{ 
        validar(){
             
            if(this.tipo !== undefined && this.pin !== ''){
                this.usuarios.map(item => {
                    if(item.pin == this.pin && item.tipo == this.tipo){
                        this.validado = true
                       
                        if(this.tipo === 'Administrador'){
                           this.enlace= 'html/admin.html'
                        }else if(this.tipo === 'Secretario'){
                            this.enlace = 'html/secretario.html'
                        }else if(this.tipo === 'Vendedor'){
                            this.enlace = 'html/Vendedor.html'
                        }else if(this.tipo === 'Ensamblador'){
                            this.enlace = 'html/Ensamblador.html'
                        }else if(this.tipo == 'Administrador'){
                            this.enlace = 'html/admin.html'
                        } 
                    } 

                }) 
            } else{
                alert("Asegurese de llenar los campos correcatamente")
            }

            if(this.tipo !== undefined && this.pin !== '' && this.validado === false){
                alert("Los campos no coinciden. Asegurese de que el pin sea el correcto")
            }
        }
    }
})