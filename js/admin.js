const app = new Vue({
    el: '#app',
    data:{
        EBase: undefined,
        VBase: undefined,
        SBase: undefined,
        maxZapatos: undefined,
        preEnsaZapato: undefined,
        maxZapatillas: undefined,
        preEnsaZapatillas: undefined
 
    }, 
    methods:{ 
         guardarCambios(){
            //Ensamblador
            localStorage.setItem('Ensamblador', JSON.stringify({
                EBase: this.EBase,
                maxZapatos:this.maxZapatos ,
                preEnsaZapato:this.preEnsaZapato,
                maxZapatillas:this.maxZapatillas ,
                preEnsaZapatillas:this.preEnsaZapatillas

            }))
            //Vendedor
            localStorage.setItem('Vendedor', JSON.stringify({
                VBase: this.VBase, 
            }))
            //Secretario
            localStorage.setItem('Secretario', JSON.stringify({
                SBase: this.SBase,
            }))

            alert("Cambios Guardados")
         }
    },

    created(){
        let Ensamblador = JSON.parse(localStorage.getItem('Ensamblador'));
        let Vendedor = JSON.parse(localStorage.getItem('Vendedor'));
        let Secretario = JSON.parse(localStorage.getItem('Secretario'));

        if(Ensamblador === null){
            this.EBase= (1300000).toLocaleString("col"),
            this.maxZapatos= 3000,
            this.preEnsaZapato= (1500).toLocaleString("col"),
            this.maxZapatillas= 4000,
            this.preEnsaZapatillas= (2500).toLocaleString("col")

            localStorage.setItem('Ensamblador', JSON.stringify({
                EBase: this.EBase,
                maxZapatos:this.maxZapatos ,
                preEnsaZapato:this.preEnsaZapato,
                maxZapatillas:this.maxZapatillas ,
                preEnsaZapatillas:this.preEnsaZapatillas

            }))
             
        }else{
            this.EBase= (Ensamblador.EBase).toLocaleString("col"),
            this.maxZapatos= Ensamblador.maxZapatos,
            this.preEnsaZapato= (Ensamblador.preEnsaZapato).toLocaleString("col"),
            this.maxZapatillas= Ensamblador.maxZapatillas,
            this.preEnsaZapatillas= (Ensamblador.preEnsaZapatillas).toLocaleString("col")
        }

        if(Vendedor === null){
            this.VBase= (1800000).toLocaleString("col")

            localStorage.setItem('Vendedor', JSON.stringify({
                VBase: this.VBase, 
            }))

        }else{
            this.VBase= (Vendedor.VBase).toLocaleString("col") 
        }

        if(Secretario === null){
            this.SBase= (1500000).toLocaleString("col")
            localStorage.setItem('Secretario', JSON.stringify({
                SBase: this.SBase,
            }))
        }else{
            this.SBase= (Secretario.SBase).toLocaleString("col")
        } 
    },
})