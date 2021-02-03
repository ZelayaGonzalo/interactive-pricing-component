const currentamount = document.getElementById("current-amount")
const currentPrice = document.getElementById("current-price")
const checkDiscount = document.getElementById("check-discount")
let sliderValue = 1
let amount = 10
let price = 8

function sliderChange(event){
    value = event.target.value
    sliderValue=value
    console.log(sliderValue)
    changePrice(sliderValue)
}

function applyDiscount(price){
    if(checkDiscount.checked){
        return price-(price*25/100)
    }
}

function changePrice(value){
    switch(value){
        case "1":
            amount = 10
            price =8.00
            break;
        case "2":
            amount = 50
            price =12.00
            break;
        case "3":
            amount = 100
            price =16.00
            break;
        case "4":
            amount = 500
            price =24.00
            break;
        case "5":
            amount = 1
            price =36.00
            break;
        default:
            break;
    }
    if(amount === 1){
        currentamount.innerHTML = amount +"M"
    }
    else{
        currentamount.innerHTML = amount +"k"
    }
    if(checkDiscount.checked){
        currentPrice.innerHTML = applyDiscount(price)
    }
    else{
        currentPrice.innerHTML = price
    }
    
}

function toogleDiscount(event){
    if(event.target.checked){
        newPrice = applyDiscount(price)
        currentPrice.innerHTML = newPrice
    }
    else{
        changePrice(sliderValue)
    }
}
