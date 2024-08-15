const products = [
    {
        id:1,
        name: "Agua",
        price: 10,
        stock: 7,
        category: "Aguas",
        image:"./src/assets/product-img/water.jpg",
        description:"Descripcion del producto Agua",
    },
    {
        id:2,
        name: "Jugo",
        price: 12,
        stock: 5,
        category: "Jugos",
        image:"./src/assets/product-img/water.jpg",
        description:"Descripcion del producto Jugo",
    },
    {
        id:3,
        name: "Cerveza",
        price: 15,
        stock: 10,
        category: "Alcoholicas",
        image:"./src/assets/product-img/water.jpg",
        description:"Descripcion del producto Cerveza",
    },
    {
        id:4,
        name: "Coca",
        price: 14,
        stock: 2,
        category: "Gaseosas",
        image:"./src/assets/product-img/water.jpg",
        description:"Descripcion del producto Coca",
    },
    {
        id:5,
        name: "Vino",
        price: 19,
        stock: 8,
        category: "Alcoholicas",
        image:"./src/assets/product-img/water.jpg",
        description:"Descripcion del producto Vino",
    },
    {
        id:6,
        name: "Agua Tónica",
        price: 11,
        stock: 12,
        category: "Aguas",
        image:"./src/assets/product-img/water.jpg",
        description:"Descripcion del producto Agua Tonica",
    },
    {
        id:7,
        name: "Coca Light",
        price: 15,
        stock: 5,
        category: "Gaseosas",
        image:"./src/assets/product-img/water.jpg",
        description:"Descripcion del producto Coca Light",
    },
    {
        id:8,
        name: "Coca Zero",
        price: 16,
        stock: 7,
        category: "Gaseosas",
        image:"./src/assets/product-img/water.jpg",
        description:"Descripcion del producto Coca Zero",
    },
];

export default function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products);
        }, 2000);
    });
};