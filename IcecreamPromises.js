let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cup", "cone", "stick"],
    toppings: ["chocolate", "peanut"]
}
let is_shop_open = true;
let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if(is_shop_open) {
            setTimeout(function() {
                resolve(work());
            }, time);
        } else {
            reject(console.log("Our shop is closed!!!"))
        }
    });
};

order(2000, ()=>console.log(`${stocks.fruits[0]} was selected`))
    .then(() => {
        return order(0000, () => console.log("Production has started"));
    })
    .then(() => {
        return order(2000, () => console.log("Fruit has been chopped"))
    })
    .then(() => {
        return order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))
    })
    .then(() => {
        return order(1000, () => console.log("Machine started"))
    })
    .then(() => {
        return order(2000, () => console.log(`Ice cream placed on ${stocks.holder[2]}`))
    })
    .then(() => {
        return order(3000, () => console.log(`${stocks.toppings[0]} and ${stocks.toppings[1]} toppings are added`))
    })
    .then(() => {
        return order(2000, () => console.log("Ice cream is served"))
    })
    .catch(() => {
        console.log("Customer left")
    })
    .finally(() => {
        console.log("End of Day")
    })