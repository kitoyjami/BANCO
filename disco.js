class Disco{
    constructor(id,nombre,año,precio,url){
        this.id=id;
        this.nombre=nombre;
        this.año=año;
        this.precio=precio;
        this.url=url;
    }

    get getId(){
        return this.id;
    }
    set setId(id){
        this.id=id;
    }

    get getNombre(){
        return this.nombre;
    }
    set setNombre(nombre){
        this.nombre=nombre;
    }

    get getAño(){
        return this.año;
    }
    set setAño(año){
        this.año=año;
    }

    get getPrecio(){
        return this.precio;
    }
    set setPrecio(precio){
        this.precio=precio;
    }

    get getUrl(){
        return this.url;
    }
    set setUrl(url){
        this.url=url;
    }
}

export { Disco}