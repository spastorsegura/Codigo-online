var album_musica={
    nombre:"Californication",
    banda:"Red Hot Chilli Peppers",
    productora:"EMI",
    anio:1999,
    canciones:[
        {
            titulo:"Scar Tissue",
            duracion:3.37
        },
        {
            titulo:"Around the world",
            duracion:3.59
        },
    ]
}

//Restaurante
//mesas, mobiliario, utencilios, platillos, local, personal.
var restaurante={
    nombre:"Ka hing",
    direccion:"Av. Dolores",
    cantidad_mesas:20,
    personal:["meseros","Cajera","Administradora","Chef","Ayudante de cocina","Seguridad"],
    gerente:{
        nombre:"Juan Perez",
        edad:36,
        profesion:"chef"
    },
    platillos:[
        {
            id:1,
            nombre:"Pollo Tipakay",
            descripcion:"Arroz chaufa con pollo agridulce y wantán frito",
            precio:22
        },
        {
            id:2,
            nombre:"Sopa wantán especial",
            descripcion:"Caldo de pollo con verduras, tipo de carne, wantán y huevitos de codorniz",
            precio:15
        }
    ],
    mostrar_info:function(){
        console.log("El chifa KA HING en la Av. Dolores dispone de 20 mesas")
    },
    mostrar_platillos:function(){
        console.log(restaurante.platillos)
    }
}

//probando los objetos
console.log(restaurante.gerente);
console.log(restaurante.platillos[1]);
console.log(restaurante.platillos[1].descripcion);

restaurante.mostrar_info();
restaurante.mostrar_platillos();

