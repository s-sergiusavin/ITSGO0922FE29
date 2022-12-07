// Array methods //




const products = [

    { name: 'Watch',       price: 400 },
    { name: 'Laptop',      price: 1500 },
    { name: 'Skateboard',  price: 700 },
    { name: 'TV',          price: 1200 },
    { name: 'Magazine',    price: 40 },
    { name: 'Toothbrush',  price: 90 },
    { name: 'Phone',       price: 900 },
    { name: 'Ring',        price: 200 }
    
]

// Filter

const filteredProducts = products.filter((product) => {
    return product.price <= 200
})

console.log(filteredProducts);


// Map 

const productNames = products.map((product) => {
    return product.name
})

console.log(productNames);

// Find

const foundProduct = products.find((product) => {
    return product.name === 'Laptop'
})

console.log(foundProduct);


// forEach

products.forEach((product) => {
    console.log(product.price);
})

// Some

const expensiveProducts = products.some((product) => {
    return product.price >= 900
})

console.log(expensiveProducts);


// Reduce

const total = products.reduce((currentTotal, product) => {
    return product.price + currentTotal
}, 0)

console.log(total);







