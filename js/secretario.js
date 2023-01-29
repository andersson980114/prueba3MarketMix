const app = new Vue({
    el: '#app',
    data: {
        SBase: 0,
        ValorExtras: 0,
        CantidadExtras: 0,
        totalHorasExtra:0,
        totalApagar: 0,

    },

    methods: {
        totalPagar(){
            this.ValorExtras=(this.SBase/20)/(8)*(1,8);
            this.totalHorasExtra = this.ValorExtras*this.CantidadExtras;
            this.totalApagar = this.SBase + this.totalHorasExtra;
        },

        

    },
    created() {
        let Secretario = JSON.parse(localStorage.getItem('Secretario'));

        if (Secretario === null) {
            this.SBase = 15000000
        } else {
            this.SBase = parseInt(Secretario.SBase);
        }

    },



})