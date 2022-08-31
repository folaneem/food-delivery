import img1 from "./images/img1.png"
import img2 from "./images/img2.png"
import img3 from "./images/img3.png"
const products = [
    {
        id: 1,
        name: "Stirfry spaghetti with seafood specials",
        description: "Donec faucibus leo eget malesuada commodo. Nullam quis felis lobortis, consectetur nisl a, fermentum enim. Suspendisse potenti. Praesent sed porttitor du.",
        price: 10.99,
        amount: 1,
        img: img1,
        count:3

    },
    {
        id: 2,
        name: "Grilled barbecue meat with roasted plantain",
        description: "Donec faucibus leo eget malesuada commodo. Nullam quis felis lobortis, consectetur nisl a, fermentum enim. Suspendisse potenti. Praesent sed porttitor du.",
        price: 10.99,
        amount: 1,
        img: img2
    },
    {
        id: 3,
        name: "smoky Jollof rice with chicken and fried plantain",
        price: 10.99,
        amount: 1,
        description: "Donec faucibus leo eget malesuada commodo. Nullam quis felis lobortis, consectetur nisl a, fermentum enim. Suspendisse potenti. Praesent sed porttitor du.",
        img: img3
    }
]


export function addToCart(product){
    console.log(product)
    const cartInLocalStorage=JSON.parse(localStorage.getItem("userCart")) || []//get user cart from local storage and if there is none initialise to empty array
    const idInUserCart=cartInLocalStorage.map((item)=> item.id) //get all menu id in user cart
    //if product.id is in user cart already do nothing
    if(idInUserCart.includes(product.id)){
        window.document.getElementById('cartLength').innerText=String(cartInLocalStorage.length)
        return true
    }
    //add product to cart in local storage array
    cartInLocalStorage.push({...product,count:1})
    localStorage.setItem("userCart",JSON.stringify(cartInLocalStorage))//save to user local storage
    console.log(localStorage.getItem("userCart"))
    window.document.getElementById('cartLength').innerText=String(cartInLocalStorage.length)

}

export function removeFromCart(product){

    console.log(product)
    const cartInLocalStorage=JSON.parse(localStorage.getItem("userCart")) || []//get user cart from local storage and if there is none initialise to empty array
    const idInUserCart=cartInLocalStorage.map((item)=> item.id) //get all menu id in user cart
    //if product.id is in user cart already do nothing
    const positionInCart=idInUserCart.indexOf(product.id)
    if(positionInCart!=-1){
        cartInLocalStorage.splice(positionInCart,1)//remove product from array
        localStorage.setItem("userCart",JSON.stringify(cartInLocalStorage))//save to user local storage
        console.log(cartInLocalStorage)

        return true
    }else{
        return  'Product is not in cart'
    }
}

export function increaseAmountInCart(product){
    console.log(product)
    const cartInLocalStorage=JSON.parse(localStorage.getItem("userCart")) || []//get user cart from local storage and if there is none initialise to empty array
    const idInUserCart=cartInLocalStorage.map((item)=> item.id) //get all menu id in user cart
    //if product.id is in user cart already do nothing
    const positionInCart=idInUserCart.indexOf(product.id)
    console.log((positionInCart))
    if(positionInCart!=-1){
        const newCount=cartInLocalStorage[positionInCart].count + 1
        console.log(newCount)
        console.log(cartInLocalStorage[positionInCart].count)
        cartInLocalStorage[positionInCart]={...product,count:newCount}
        localStorage.setItem("userCart",JSON.stringify(cartInLocalStorage))//save to user local storage
            return true
    }else{
        return  'Product is not in cart'
    }
}


export function decreaseAmountInCart(product){
    console.log(product)
    const cartInLocalStorage=JSON.parse(localStorage.getItem("userCart")) || []//get user cart from local storage and if there is none initialise to empty array
    const idInUserCart=cartInLocalStorage.map((item)=> item.id) //get all menu id in user cart
    //if product.id is in user cart already do nothing
    const positionInCart=idInUserCart.indexOf(product.id)

    if(positionInCart!=-1){
        const newCount=cartInLocalStorage[positionInCart].count - 1
        cartInLocalStorage[positionInCart]={...product,count:newCount}
        console.log(newCount)
        console.log(cartInLocalStorage[positionInCart].count)
        localStorage.setItem("userCart",JSON.stringify(cartInLocalStorage))//save to user local storage
        console.log(cartInLocalStorage)
        return true
    }else{
        return  'Product is not in cart'
    }
}

export function getTotal(){
    const cartInLocalStorage=JSON.parse(localStorage.getItem("userCart")) || []//get user cart from local storage and if there is none initialise to empty array
    if(cartInLocalStorage.length==0){
        return 0
    }
    return cartInLocalStorage.forEach((product)=>product.count * product.price).reduce((previousValue,currentValue)=>previousValue+currentValue,0)

}