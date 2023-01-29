const app = new Vue({
    el: '#app',
    data:{
        EBase: 0,
        maxZapatos: 0,
        preEnsaZapato: 0,
        maxZapatillas: 0,
        preEnsaZapatillas: 0,
        pHTrabajo:0,
        hExtras: undefined,
        pHExtras: 0,
        nZapatos: undefined, 
        pagoZapatos: 0,
        nZapatillas: undefined, 
        pagoZapatillas: 0,
        auxTra: 117172,
        nHijos: undefined,
        pagoHijos:0,
        totalPago:0

        
 
    }, 
    methods:{ 
          calcular(){
            //horas extras
            this.pHTrabajo = (parseInt(this.EBase)/20)/8 //valor del hora de trabajo
            this.pHExtras = this.hExtras * (this.pHTrabajo + (this.pHTrabajo*2.2)) //el valor de las horas extras
            if(this.nZapatos>1000 && this.nZapatos<2000){
                this.pagoZapatos = this.nZapatos * (this.preEnsaZapato + (this.preEnsaZapato*0.1))
            }else if(this.nZapatos>2000 ){
                this.pagoZapatos = this.nZapatos * (this.preEnsaZapato + (this.preEnsaZapato*0.2))
            }

            if(this.nZapatillas>1700 && this.nZapatillas<3000){
                this.pagoZapatillas = this.nZapatillas * (this.preEnsaZapatillas + (this.preEnsaZapatillas*0.15))
            }else if(this.nZapatos>3000 ){
                this.pagoZapatillas = this.nZapatillas * (this.preEnsaZapatillas + (this.preEnsaZapatillas*0.3))
            }

            if(this.nHijos>0){
                if(this.nHijos>1){
                    this.pagoHijos = this.nHijos * 60000
                }else{
                    this.pagoHijos = this.nHijos * 80000
                }
            }

            this.totalPago= this.EBase + this.pHExtras + this.pagoZapatos + this.pagoZapatillas + this.pagoHijos +  parseInt(this.auxTra)
             
          }
    },

    created(){
        let Ensamblador = JSON.parse(localStorage.getItem('Ensamblador')); 

        if(Ensamblador === null){
            this.EBase= 1300000,
            this.maxZapatos= 3000,
            this.preEnsaZapato= 2500,
            this.maxZapatillas= 4000,
            this.preEnsaZapatillas= 1500
             
        }else{
            this.EBase= parseInt(Ensamblador.EBase) ,
            this.maxZapatos= parseInt(Ensamblador.maxZapatos),
            this.preEnsaZapato= parseInt( Ensamblador.preEnsaZapato),
            this.maxZapatillas= parseInt(Ensamblador.maxZapatillas),
            this.preEnsaZapatillas= parseInt(Ensamblador.preEnsaZapatillas)
        }

         
        

         
    },
})