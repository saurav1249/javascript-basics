let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cup", "cone", "stick"],
    toppings: ["chocolate", "peanut"]
}

let is_shop_open = true;

function time(ms) {
    return new Promise((resolve, reject) => {
        if(is_shop_open) {
            setTimeout(resolve, ms);
        } else {
            reject(console.log("Shop is closed!!!"))
        }
    })
}

async function kitchen() {
    try {
        await time(2000)
        console.log(`${stocks.fruits[1]} was selected`)

        await time(0000)
        console.log("Production has started")

        await time(2000)
        console.log("Fruit has been chopped")

        await time(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)

        await time(1000)
        console.log("Machine started")

        await time(2000)
        console.log(`Ice cream placed on ${stocks.holder[2]}`)

        await time(3000)
        console.log(`${stocks.toppings[0]} and ${stocks.toppings[1]} toppings are added`)

        await time(2000)
        console.log("Ice cream is served")
    } catch (error) {
        console.log("Customer left!!!", error);
    } finally {
        console.log("End of Day")
    }
}

kitchen();