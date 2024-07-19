const productos = [
    {
        id:1,
        name: "Agua",
        price: 10,
        stock: 7,
    },
    {
        id:2,
        name: "Jugo",
        price: 12,
        stock: 5,
    },
    {
        id:3,
        name: "Cerveza",
        price: 15,
        stock: 10,
    },
    {
        id:4,
        name: "Gaseosa",
        price: 14,
        stock: 2,
    },
];

export default function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(productos);
        }, 2000);
    });
};