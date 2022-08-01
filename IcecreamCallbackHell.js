let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cup", "cone", "stick"],
    toppings: ["chocolate", "peanut"]
}

let order = (fruit_name, call_production) => {
    // console.log("Order Placed. Please call production.");
    setTimeout(function () {
        console.log(`${stocks.fruits[fruit_name]} was selected`)
        call_production();
    }, 2000)
};

let production = () => {
    setTimeout(function() {
        console.log("Production has started");
        setTimeout(function() {
            console.log("Fruit has been chopped")

            setTimeout(function() {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)

                setTimeout(function() {
                    console.log("Start the machine")

                    setTimeout(function () {
                        console.log(`Ice cream placed on ${stocks.holder[2]}`)

                        setTimeout(function () {
                            console.log(`Toppings added are ${stocks.toppings[0]} and ${stocks.toppings[1]}`)

                            setTimeout(function () {
                                console.log("Serve Icecream");
                            }, 2000)
                        }, 3000)
                    }, 2000)
                }, 1000);
            },1000);
        }, 2000);
    }, 0000);
    // console.log("Production has started");
};

order(0, production);
