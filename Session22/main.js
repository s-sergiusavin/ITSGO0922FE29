const names = ["Ana" , "Matei" , "Maria", "Ana", "Matei"]; 

let count = {}; 

names.forEach(item => {
    if(count[item]) {
        count[item] += 1;
    }   else  {
        count[item] = 1;

    }
    });

console.log(count); 




const people = names.slice(0, 3); 

console.log(people); 




const store = [
    {
        product: "laptop", 
        value: 1000, 
        count: 3
    }, 
    {
        product: "desktop", 
        value: 1500, 
        count: 4
    }, 
    {
        product: "mobile", 
        value: 500, 
        count: 10
    }, 
]; 

const totalValue = store.reduce(
    (accumulator, item) => accumulator + item.value * item.count,
    0
); 

console.log(totalValue); 





const products = [
    {
        name: "laptop", 
        price: 1000, 
        count: 5
    }, 
    {
        name: "desktop", 
        price: 1500, 
        count: 2
    }, 
    {
        name: "phone", 
        price: 500, 
        count: 10
    }, 
]; 

const totalProductsValue = products.map(item => 
    ({
        name: item.name, 
        totalValue: item.price * item.count
    })); 


    console.log(totalProductsValue); 

    