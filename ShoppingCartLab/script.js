
let cart = []

function getMyCart(){
    return cart;
}

function addToCart(_itemName, _itemPrice, _itemQuantity, cart)
{
    console.log(_itemName, _itemPrice, _itemQuantity)
    let newItem = {
        itemName : _itemName,
        itemPrice : _itemPrice,
        itemQuantity : _itemQuantity
    };

    cart.push(newItem);

    console.log(cart);
    prompt();
}

function distinct(value, index, array)
{
    return array.indexOf(value) === index;
}

function checkOut(cart)
{
    let subTotal = 0;
    let taxes = 0;
    let total = 0;
    let unique = [...new Set(cart.map(item => item.itemName))];
    unique.forEach(item => {
        let lineTotal = 0;
        let currentItem = cart.filter(i => i.itemName === item);
        console.log(item)
        currentItem.forEach(item => {
            subTotal += item.itemPrice;
            lineTotal += item.itemPrice;
        })
        console.log(lineTotal);
    })
    console.log(subTotal)
}

