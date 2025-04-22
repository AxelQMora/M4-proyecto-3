//Productos de una tienda online

//arreglo de objetos con al menos 5 productos, cada uno con las propiedades nombre, precio y categoría.

const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
];

function filtrar(precioLimite){
    const filtrado = productos.filter(p => p.precio < precioLimite); //sintaxis de la funcion: elemento -> se va a evaluar con la condición -> condición (regresó un nuevo arreglo)
    console.log(`---------------------------Listado filtrado (precio < $${precioLimite})-------------------`)
    imprimir(filtrado)
}

function ordernar(){
    productos.sort((a,b) =>{   //Sintáxis: Tomo dos elementos adyacentes -> condición para ordenar -> regreso el arreglo ordenado (lo modificó)
        if (a.nombre < b.nombre) return -1;
        if (a.nombre > b.nombre) return 1;
        return 0;
    });
    console.log(`---------------------------Listado en orden alfabético-------------------`)
    imprimir(productos)
}

function nombrar(){
    const nombres = productos.map(p => p.nombre ); //sintáxis: tomo cada elemento -> aplico una función sobre cada elemento -> regresó el nuevo arreglo con los resultados de las funciones
    console.log(`---------------------------Listado de nombres-------------------`)
    for(let nombre of nombres){
        console.log(nombre)
    }
}

function imprimir(lista){
    for(let objeto of lista){
        console.log('----------------------------');
        for(let propiedad in objeto ){
            console.log(`${propiedad}: ${objeto[propiedad]}`);
        }
        console.log('----------------------------');
    }
}

filtrar(700)
ordernar()
nombrar()




