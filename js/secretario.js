const app = new Vue({
    el: '#app',
    data: {
        SBase: undefined,
        ValorExtras: 0,
        CantidadExtras: undefined,
        totalHorasExtra:0,
        totalApagar: undefined,

    },

    methods: {
        totalPagar(){
            
            let Secretario = JSON.parse(localStorage.getItem('Secretario'));

            if (this.Secretario === null) {
                this.SBase = 1500000
            } else {
                this.SBase = Secretario.SBase
            }
            

            this.ValorExtras=(this.SBase/20)/(8)*(1,8);
            this.totalHorasExtra = this.ValorExtras*this.CantidadExtras;
            this.totalApagar = this.SBase + this.totalHorasExtra
        },

        

    },
    created() {
        let Secretario = JSON.parse(localStorage.getItem('Secretario'));

        if (Secretario === null) {
            this.SBase = 1500000
        } else {
            this.SBase = Secretario.SBase
        }

    },



})