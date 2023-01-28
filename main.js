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
        tipoUsuario: ['Administrador','Secretario','Vendedor','Ensamblador'], 
        
    }, 
})