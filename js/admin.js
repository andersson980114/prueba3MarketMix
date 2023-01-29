const app = new Vue({
    el: '#app',
    data:{
        EBase: undefined,
        VBase: undefined,
        SBase: undefined,
        maxZapatos: undefined,
        preEnsaZapato: undefined,
        maxZapatillas: undefined,
        preEnsaZapatillas: undefined,
        comisionVenta: undefined
 
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
            this.EBase= 1300000,
            this.maxZapatos= 3000,
            this.preEnsaZapato= 1500,
            this.maxZapatillas= 4000,
            this.preEnsaZapatillas= 2500
             
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