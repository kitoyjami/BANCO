import {Disco} from './disco.js';
import {LinkedList} from './lista.js';

  const listaNumeros= new LinkedList();
  console.log(listaNumeros.isEmpty());// TRUE
  const Disco1=new Disco(
      "212746","De Música Ligera","1990","$15",
      "https://i.scdn.co/image/ab67616d0000b273c451ed28353639e79b4d97d9");

  const Disco2=new Disco("287605","Sexo",
  "1984","$25",
  "https://i.scdn.co/image/ab67616d0000b273a8ff3f9fe5b57f2e0bfd9e05");

  const Disco3=new Disco("194866","Devuélveme a mi chica",
  "1985","$10",  "https://i.scdn.co/image/ab67616d0000b27383bb5e56278c14e91776b988");

  const Disco4=new Disco("239906","Los Globos del Cielo",
  "1997","$45",  "https://i.scdn.co/image/ab67616d0000b27359dc0cdec0ebc5fde5d73fcf");

  const Disco5=new Disco("212746","Mujer Amante",
  "2004","$15",  "https://i.scdn.co/image/ab67616d0000b27370fa18613e0fdd18716cde82");

  listaNumeros.addStart(Disco1);
  listaNumeros.addStart(Disco2);
  listaNumeros.addStart(Disco3);
  listaNumeros.addStart(Disco4);
  listaNumeros.addEnd(Disco5);

  console.log("NODO: ", listaNumeros);
  listaNumeros.print();



