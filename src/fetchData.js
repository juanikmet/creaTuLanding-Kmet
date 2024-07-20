const productos = [
    {
        id:1,
        name: "Agua",
        price: 10,
        stock: 7,
        image:"./src/assets/product-img/water.jpg",
    },
    {
        id:2,
        name: "Jugo",
        price: 12,
        stock: 5,
        image:"./src/assets/product-img/water.jpg",
    },
    {
        id:3,
        name: "Cerveza",
        price: 15,
        stock: 10,
        image:"./src/assets/product-img/water.jpg",
    },
    {
        id:4,
        name: "Gaseosa",
        price: 14,
        stock: 2,
        image:"./src/assets/product-img/water.jpg",
    },
];

export default function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(productos);
        }, 2000);
    });
};