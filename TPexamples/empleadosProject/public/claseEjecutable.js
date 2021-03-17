import Repartidor from "./Repartidor.js";
import Comercial from "./Comercial.js";
let comercial1 = new Comercial("Frank", 23, 40000, "Zona 1");
let repartidor1 = new Repartidor("Darko", 30, 1500, 300);
comercial1.plus();
repartidor1.plus();
console.log(comercial1);
console.log(repartidor1);
