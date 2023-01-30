const app = new Vue({
    el: '#app',
    data: {
        SBase: undefined,
        ValorExtras: 0,
        CantidadExtras: undefined,
        totalHorasExtra:0,
        totalApagar: 0,

    },

    methods: {
        totalPagar(){
            if(this.totalPagar ===0 ){
                this.SBase = Number((this.SBase).replace(/,/g, ""))
            }else{
                let Secretario = JSON.parse(localStorage.getItem('Secretario'));

                if (Secretario === null) {
                    this.SBase = 15000000
                } else {
                    this.SBase = (Secretario.SBase).toLocaleString("col");
                }
                this.SBase = Number((this.SBase).replace(/,/g, ""))
            }

            this.ValorExtras=(this.SBase/20)/(8)*(1,8);
            this.totalHorasExtra = this.ValorExtras*this.CantidadExtras;
            this.totalApagar = (this.SBase + this.totalHorasExtra).toLocaleString("col");
            this.SBase = (this.SBase).toLocaleString("col")
        },

        

    },
    created() {
        let Secretario = JSON.parse(localStorage.getItem('Secretario'));

        if (Secretario === null) {
            this.SBase = 15000000
        } else {
            this.SBase = (Secretario.SBase).toLocaleString("col");
        }

    },



})