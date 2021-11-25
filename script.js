alert ("Bienvenido/a a Mateá")
let ingresar = prompt ("¿Usted desea entrar a Mateá? Por favor, responder en minúsculas.");
if ((ingresar !== "") && (ingresar === "no")) {
    alert ("¡Esperamos verte pronto!");
}
else if ((ingresar === "si") || (ingresar === "sí")) {
    alert ("¡Disfrutá de nuestros productos!");
}
else {
    alert ("Algo ha salido mal. Por favor, resfrecá la pantalla y volvé a intentarlo.");
}

class Yerba {
    constructor(data) {
        this.marca = data.marca;
        this.precio = parseFloat(data.precio);
        this.stock = 10;
        this.id = Yerba.ID;
        this.img = data.img
        Yerba.ID++;
    }

    static ID = 1

    sumaIva() {
        return this.precio = this.precio * 1.21;
    }

    vender() {
        if (this.stock === 0) {
            console.log ("Nos quedamos sin stock del producto seleccionado")
        } else{
            console.log("Vendido")
            this.stock--;
        }
    }

    reponer() {
        this.stock += 10;
    }
}

let almacen = [
    new Yerba( { marca: "rosamonte", precio: 154, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/805/409/products/rosamonte-plus1-7d802ef96426bdda0d15955183768277-1024-1024.jpg" }),
    new Yerba( { marca: "amanda", precio: 173, img: "https://ardiaprod.vteximg.com.br/arquivos/ids/212519-1000-1000/Yerba-Mate-Amanda-Tradicional-500-Gr-_1.jpg?v=637691104764830000" }),
    new Yerba( { marca: "chamigo", precio: 194, img: "https://hiperlibertad.vteximg.com.br/arquivos/ids/156319-1000-1000/Yerba-Mate-Chamigo-con-palo-500-Gr-YERBA-CHAMIGO-----------X500GR-1-1238.jpg?v=637236237196900000" }),
    new Yerba( { marca: "cruz de malta", precio: 212, img: "https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/2010305_f.jpg" }),
    new Yerba( { marca: "taragui", precio: 247, img: "https://www.uruguayeces.com/1349-large_default/yerba-mate-taragui-12-kg.jpg" }),
    new Yerba( { marca: "mañanita", precio: 250, img: "https://hiperlibertad.vteximg.com.br/arquivos/ids/170437-1000-1000/YERBA-ma-anitas-1-KG-1-11111.jpg?v=637414176189900000" }),
    new Yerba( { marca: "unión", precio: 254, img: "https://www.deliargentina.com/image/cache/catalog/product/alimentacion/yerba-mate-union-suave-500gr/yerba-mate-union-suave-500gr-gr-1000x1000.png" }),
    new Yerba( { marca: "cbsé", precio: 256, img: "https://www.cbse.com.ar/wp-content/uploads/2015/03/CBS%C3%A9-Hierbas-Serranas-1k.png" }),
    new Yerba( { marca: "playadito", precio: 302, img: "https://jumboargentina.vtexassets.com/arquivos/ids/609096/Yerba-Mate-Playadito-Suave-X1kg-1-854539.jpg?v=637388478780800000" }),
    new Yerba( { marca: "la merced", precio: 382, img: "https://www.latinfoodsmarket.com/img-YMDeCampoLaMerced500g1.jpg" }),
]

for (const producto of almacen) {
    let contenedor = document.createElement("div");
    
    contenedor.innerHTML = `<h3> ${producto.marca}</h3>
                            <img src="${producto.img}" width="100px">
                            <b> Precio: $ ${producto.precio}</b>
                            <button>Agregar al carrito🛒</button>
                            <button>🗑️</button>
                            <hr>`;
    document.body.appendChild(contenedor);
}

let carrito = [];

let index = almacen.findIndex(item => item.id === 1) 
carrito.push(almacen[index].sumaIva())

index = almacen.findIndex(item => item.id === 3) 
carrito.push(almacen[index].vender())

index = almacen.findIndex(item => item.id === 2) 
carrito.push(almacen[index].vender())

index = almacen.findIndex(item => item.id === 2) 
carrito.push(almacen[index].vender())

index = almacen.findIndex(item => item.id === 1) 
carrito.push(almacen[index].vender())

index = almacen.findIndex(item => item.id === 5) 
carrito.push(almacen[index].reponer())

index = almacen.findIndex(item => item.id === 8) 
carrito.push(almacen[index].reponer())

index = almacen.findIndex(item => item.id === 1) 
carrito.push(almacen[index].reponer())

index = almacen.findIndex(item => item.id === 1) 
carrito.push(almacen[index].reponer())

const buscarAmanda = almacen.find(item => item.id === 2); 
console.log(buscarAmanda);

const buscarRosamonte = almacen.find(item => item.id === 1); 
console.log(buscarRosamonte);

const aumentos = almacen.map(item => item.precio += 45);
console.log(aumentos);

const baratos = almacen.filter(item => item.precio < 250); 
console.log(baratos);