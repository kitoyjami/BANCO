class Disco{
    constructor(id,nombre,año,precio,url,imagen){
        this.id=id;
        this.nombre=nombre;
        this.año=año;
        this.precio=precio;
        this.url=url;
        this.imagen=imagen;
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

    get getImagen(){
        return this.imagen;
    }
    set setImagen(imagen){
        this.imagen=imagen;
    }
}


class Node {
    constructor(data){
        this.data=data //en data guardamos cualquier objeto que queramos
        this.next=null // por defecto este es null 
    }
}

//? VAMOS A CREAR NUESTRA CLASE LinkedList
//? UNA LISTA ENLAZADA DEBE TENER UNA CABECERA (head)
//? TIENE UN TAMAÑO DE LISTA (length)

//*LOS METODOS QUE SE PUEDEN HACER CON UNA LISTA 
    //* AGREGAR UN ELEMENTO (add)
    //*   -al principio (addStart)
    //*    -al final (addEnd)
   //*  BORRAR UN ELEMENTO  delete (data)
   //*  BUSCAR UN ELEMENTO  get(index)


   class LinkedList{
       constructor(){
           this.head=null //esto significa que no hay nada en la lista 
           this.length=0 //no hay elementos dentro de lista
       }
     //Método Auxiliar
      isEmpty(){
          return this.head===null
      }
      //Métodos de nuestra lista
      addStart(data){
          const node = new Node (data) //creamos nuestro nodo con su dato
          if(!this.head){// VERDADERO QUE NUESTRA ESTA VACIA 
          this.head=node//asignamos el primer nodo como la cabeza de la lista 
        }else{
            node.next=this.head // pequeño recorrido tomando el inicio del nodo y la posicion actual
            this.head=node //nuevo nodo
        }
        this.length++ // saber cuantos elementos tengo en mi lista
      }
      addEnd(data){
          const node = new Node (data) 
          if(this.head === null){
              this.head=node //aisgnamos el primer nodo como la cabeza de la lista 
          }else{
                // en este else nosotros ya sabes que existe this.head
                let currentNode = this.head
                //while: mientas (se cumpla la condición) {haz esto}
                while(currentNode.next){
                    //verificar si next tiene un nodo
                    currentNode = currentNode.next //sustituyo el nodo que vive en next a mi nodo actual
                }
                //cuando next sea nulo, entonces se sale del while y continua con el resto del código
                currentNode.next=node
          }
          this.length++
      }
      delete(data){
          //verificar que dato va a ser borrado
          let currentNode = this.head
          let previousNode = null //almacenar el nodo con que tengo que reconectar
          if(currentNode.data===data){
              //vamos a reasignar la cabeza a mi nodo
              this.head=currentNode.next //reasigno la cabeza de mi nodo
          }else{
              //ESTAMOS HACIENDO OTRO RECORRIDO, PUESTO QUE ESTAMOS BORRANDO NODOS
              while(currentNode.data !== data && currentNode.next!==null){
                  previousNode = currentNode  // el currentNode se convierte en el previousNode 
                  currentNode = currentNode.next //pasar al siguiente nodo
              }
              previousNode.next=currentNode.next
          }
          this.length--
          return "la data: " + data + " ha sido eliminada"
      }
       get(index){  
                  //    0        ó        index es mayor
            if(this.head===null || index > this.length){
                return null
            }else {
                // 1 -> 2 -> 3
                let counter = 1
                let currentNode = this.head
                while(counter !== index){
                        counter++
                        currentNode=currentNode.next
                }
                return currentNode
            }
       }
      print(){
          //nodo actual
          let currentNode = this.head // tomar la cabecera
          while(currentNode){
              console.log(currentNode.data)
              currentNode=currentNode.next
          }
      }
   }
   
  const listaNumeros= new LinkedList();
  console.log(listaNumeros.isEmpty());// TRUE
  const Disco1=new Disco(
      "212746","De Música Ligera","1990","$15","https://p.scdn.co/mp3-preview/c55fcc88f202341e219140dcca042bf8dcd53eed?cid=9950ac751e34487dbbe027c4fd7f8e99",
      "https://i.scdn.co/image/ab67616d0000b273c451ed28353639e79b4d97d9");

  const Disco2=new Disco("287605","Sexo",
  "1984","$25","https://p.scdn.co/mp3-preview/77bbc4143a05075ac74b5f4600486439ee7b5e94?cid=9950ac751e34487dbbe027c4fd7f8e99",
  "https://i.scdn.co/image/ab67616d0000b273a8ff3f9fe5b57f2e0bfd9e05");

  const Disco3=new Disco("194866","Devuélveme a mi chica",
  "1985","$10","https://p.scdn.co/mp3-preview/1a38bd544c11322a850fd4b0d66c67dd60847cb4?cid=9950ac751e34487dbbe027c4fd7f8e99",
    "https://i.scdn.co/image/ab67616d0000b27383bb5e56278c14e91776b988");

  const Disco4=new Disco("239906","Los Globos del Cielo",
  "1997","$45","https://p.scdn.co/mp3-preview/9207da0be307d1a603633bf7624e7253351d5274?cid=9950ac751e34487dbbe027c4fd7f8e99",
    "https://i.scdn.co/image/ab67616d0000b27359dc0cdec0ebc5fde5d73fcf");

  const Disco5=new Disco("212746","Mujer Amante",
  "2004","$15","https://p.scdn.co/mp3-preview/07fe942f3a59d9a2d6dffd1b9187a5d9a513237e?cid=9950ac751e34487dbbe027c4fd7f8e99",
    "https://i.scdn.co/image/ab67616d0000b27370fa18613e0fdd18716cde82");

  listaNumeros.addStart(Disco1);
  listaNumeros.addStart(Disco2);
  listaNumeros.addStart(Disco3);
  listaNumeros.addStart(Disco4);
  listaNumeros.addEnd(Disco5);

  console.log("NODO: ", listaNumeros);
  listaNumeros.print();

  const formLog  = document.getElementById("formulario");
  formLog.addEventListener("submit", e => {
    e.preventDefault();
    
    let idDisco=document.getElementById("ID").value;
    let nombreDisco  = document.getElementById("nombre").value;
    let precioDisco  = document.getElementById("precio").value;
    let añoDisco  = document.getElementById("año").value;
    let fotoDisco  = document.getElementById("foto").value;
    let soundtrackDisco  = document.getElementById("soundtrack").value;
    const Discon=new Disco(idDisco,nombreDisco,añoDisco,precioDisco,soundtrackDisco,fotoDisco);
    listaNumeros.addStart(Discon);
    listaNumeros.print();
    document.getElementById("ID").value="";
    document.getElementById("nombre").value="";
    document.getElementById("precio").value="";
    document.getElementById("año").value="";
    document.getElementById("foto").value="";
    document.getElementById("soundtrack").value="";

    var fila=`<tr><td id="idtabla">`+idDisco+"</td><td>"+nombreDisco+"</td><td>"+añoDisco+"</td><td>"+precioDisco+`</td><td>
    <button id= botonr type="submit" class="btn btn-block btn-primary"><i class="bi bi-play-btn-fill"></i> Play</button>
    </td>
    <td>
    <button type="submit" class="btn btn-block btn-primary otro">
        <i class="bi bi-trash"></i> 
    </button>
    </td> </tr>`
    

   let etiquetaAudio = document.createElement("audio")
      etiquetaAudio.setAttribute("src",listaNumeros.get(1).data.getUrl);
      etiquetaAudio.play()

    var btn = document.createElement("TR");
   	btn.innerHTML=fila;
    document.getElementById("tablita").appendChild(btn);
        
    var image = document.getElementById("imagenPortada2");
    var src = listaNumeros.get(1).data.getImagen; //Esta es la variable que contiene la url de una imagen ejemplo, luego puedes poner la que quieras
    image.src = src;
    image.setAttribute("src",src);
    
  });

 /*  const reproducir  = document.getElementById("botonr");
  formLog.addEventListener("submit", a => {
    a.preventDefault();

   let idBusqueda= document.getElementById("idtabla").value;
    let bandera=0;
   for(let i=1;i<=listaNumeros.length;i++)
   {
        if(listaNumeros.get(i).getId===idBusqueda)
        {
            bandera=i;
        }
   }
   let imagen=document.getElementById("imagenPortada");
   imagen.setAttribute("src",listaNumeros.get(bandera).data.getImagen);

    let etiquetaAudio = document.createElement("audio")
      etiquetaAudio.setAttribute("src",listaNumeros.get(bandera).data.getUrl);
      etiquetaAudio.play()
  }) */


