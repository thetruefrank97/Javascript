import {Serie,MAYOR} from "./Serie";
import {Videojuego} from "./Videojuego";


let listaSeries: Serie[]=new Array(5);
let listaVideojuegos: Videojuego[]=new Array(5);


listaSeries[0]=Serie.defecto();
listaSeries[1]=Serie.titulo_creador_defecto("Lord of Rings","J RR TOLKIEN");
listaSeries[2]=new Serie("Simpons",25,"Humor","Matt Groening");
listaSeries[3]=new Serie("Padre de familia",12,"Humor","Seth Mcfarlane");
listaSeries[4]=new Serie("Breaking Bad",5,"Thriller","Vince Villigan");

listaVideojuegos[0]=Videojuego.por_defecto();
listaVideojuegos[1]=new Videojuego("Assasins Creed",40,"Accion","Ubisoft");
listaVideojuegos[2]=Videojuego.titulo_horas_defecto("League of legends",4000);
listaVideojuegos[3]=new Videojuego("Apex Legends",300,"Shooter","Respawn");
listaVideojuegos[4]=new Videojuego("Halo infinite",500,"Shooter","Bungie");

listaSeries[1].entregar();
listaSeries[3].entregar();
listaVideojuegos[2].entregar();
listaVideojuegos[4].entregar();

let entregados=0;

for(let x=0;x<listaSeries.length;x++){
    if(listaSeries[x].isEntregado()){
        entregados=entregados+1;
        listaSeries[x].devolver();
    }

    if(listaVideojuegos[x].isEntregado()){
        entregados=entregados+1;
        listaVideojuegos[x].devolver();
    }
}

console.log(`Hay ${entregados} articulos entregados`);

let serieMayor=listaSeries[0];
let videojuegoMayor=listaVideojuegos[0];

for(let i=0;i<listaSeries.length;i++){
    if(listaSeries[i].compareTo(serieMayor) === MAYOR){
        serieMayor=listaSeries[i];
    }

    if(listaVideojuegos[i].compareTo(videojuegoMayor) === MAYOR){
        videojuegoMayor=listaVideojuegos[i];
    }
}

console.log(serieMayor);
console.log(videojuegoMayor);