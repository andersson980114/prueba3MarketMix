const app = new Vue({
    el: '#app',
    data:{
        EBase: 0,
        VBase: 0,
        SBase: 0,
        maxZapatos: 0,
        preEnsaZapato: 0,
        maxZapatillas: 0,
        preEnsaZapatillas: 0,
        comisionVenta: 0
 
    }, 
    methods:{ 
         guardarCambios(){
            //Ensamblador
            localStorage.setItem('Ensamblador', JSON.stringify({
                EBase: this.EBase,
                maxZapatos:this.maxZapatos ,
                preEnsaZapato:this.preEnsaZapato ,
                maxZapatillas:this.maxZapatillas ,
                preEnsaZapatillas:this.preEnsaZapatillas 

            }))
            //Vendedor
            localStorage.setItem('Vendedor', JSON.stringify({
                VBase: this.VBase,
                comisionVenta: this.comisionVenta,
            }))
            //Secretario
            localStorage.setItem('Secretario', JSON.stringify({
                SBase: this.SBase,
            }))
         }
    },

    created(){
        let Ensamblador = JSON.parse(localStorage.getItem('Ensamblador'));
        let Vendedor = JSON.parse(localStorage.getItem('Vendedor'));
        let Secretario = JSON.parse(localStorage.getItem('Secretario'));

        if(Ensamblador === null){
            this.EBase= 13000000,
            this.maxZapatos= 300,
            this.preEnsaZapato= 25000,
            this.maxZapatillas= 300,
            this.preEnsaZapatillas= 25000
             
        }else{
            this.EBase= Ensamblador.EBase,
            this.maxZapatos= Ensamblador.maxZapatos,
            this.preEnsaZapato= Ensamblador.preEnsaZapato,
            this.maxZapatillas= Ensamblador.maxZapatillas,
            this.preEnsaZapatillas= Ensamblador.preEnsaZapatillas
        }

        if(Vendedor === null){
            this.VBase= 18000000,
            this.comisionVenta= 0.15
        }else{
            this.VBase= Vendedor.VBase,
            this.comisionVenta= Vendedor.comisionVenta
        }

        if(Secretario === null){
            this.SBase= 15000000
        }else{
            this.SBase= Secretario.SBase
        }

        

         
    },
})