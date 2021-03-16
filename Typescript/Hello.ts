class Serie{
    private ISNB: number;
    private titulo: string;
    private autor: string;
    private numPaginas: number;

    constructor(ISNB,titulo,autor,numPaginas){
        this.ISNB=ISNB;
        this.titulo=titulo;
        this.autor=autor;
        this.numPaginas=numPaginas
    }

 public set setISNB(ISNB: number){
    this.ISNB=ISNB;
}

public get getISNB(): number{
    return this.ISNB;
}

public set setTitulo(titulo: string){
    this.titulo=titulo;
}

public get getTitulo():string{
    return this.titulo;
}

public set setAutor(autor:string){
    this.autor=autor;
}

public get getAutor():string{
    return this.autor;
}

public set setNumPaginas(numPaginas:number){
     this.numPaginas=numPaginas
}

public get getNumPaginas():number{
    return this.numPaginas;
}

public toString():string{
    return `El libro ${this.titulo} con ISBN ${this.ISNB} creado por el autor ${this.autor} tiene ${this.numPaginas} paginas `
}

}

let libro1=new Serie(1234,"Guerra","Luke Skywalker",44);
let libro2=new Serie(3333,"League","Caitlyn",666);

if(libro1.getNumPaginas >= libro2.getNumPaginas){
    console.log( `el libro ${libro1.getTitulo} tiene mas paginas`);
}else{
    console.log(`El libro ${libro2.getTitulo} tiene mas paginas `);
}

