const app = new Vue({
    el: '#app',
    data: {
        VBase: 0,
        ventas: 0,
        comisionVenta: 0,
        transporte: 140606, 
        totalApagar: 0,
        

    },

    methods: {
        totalPagar(){
            if(this.ventas > 5000000 && this.ventas <= 10000000){
                
                this.comisionVenta = this.VBase * 0.1;
                this.totalApagar= this.comisionVenta + this.VBase + this.transporte;
            }else if(this.ventas > 10000000){
                
                this.comisionVenta = this.VBase * 0.2;
                this.totalApagar= this.comisionVenta + this.VBase + this.transporte;
            }else{
                
                this.comisionVenta = 0;
                this.totalApagar= this.comisionVenta + this.VBase + this.transporte;
            }

        }

    },

    created(){
        
        let Vendedor = JSON.parse(localStorage.getItem('Vendedor'));

        if(Vendedor === null){
            this.VBase= 1800000,
            this.comisionVenta= 0
        }else{
            this.VBase= Vendedor.VBase,
            this.comisionVenta= Vendedor.comisionVenta
        }
                 
    },








})