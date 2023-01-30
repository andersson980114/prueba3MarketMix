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
            if(this.totalAPagar ===0  || this.totalAPagar ===undefined){
                this.SBase = Number((this.SBase).replace(/,/g, ""))
            }else{
                let Secretario = JSON.parse(localStorage.getItem('Secretario'));

                if (this.Secretario === null) {
                    this.SBase = (1500000).toLocaleString("col")
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
            this.SBase = (1500000).toLocaleString("col")
        } else {
            this.SBase = (Secretario.SBase).toLocaleString("col");
        }

    },



})