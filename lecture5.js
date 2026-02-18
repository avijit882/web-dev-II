function orderFood() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("Food Ordered")
            res()
        }, 2000)
    })
}

function deliverFood(){
    return new Promise((res,rej)=>
    {        setTimeout(() => {
            console.log("Food Delivered")
            res()
        }, 2000)
    })
}

async function main(){
    await orderFood()
    await deliverFood()
    console.log("Enjoy your meal")
}

orderFood()

  orderFood().then(() => {
    return deliverFood()
  }).then(() => {
    return("Enjoy your meal")
  }).then((message) => {
    console.log(message)
  })

main()

order()

orderFood().then((data)=>{
    return PrepareFood()
}).then((data)=>{
    return deliverFood()
}).then((data)=>{

}).catch((error)=>{
    console.log("something went wrong")
})

console.log("First Line")
try{
    let sample=234
    console.log(sample)
    console.log("Line after sample")
    let age=16
if (age<18){
    throw new error("You are not eligible to vote")
    // 
    // 
    // 
    // 
    // 
    // 
}
// 

} catch (e) {
    console.log(e)
}
console.log("Last Line")

async function get(data){}
    try{

    const reponse=await fetch("")
    if(Response.ok==false){
        throw new error("something went wrong")
    }
    const data=await Response.json()
    console.log(data)
    data.products.foreach((product)=>{
        console.log(product.title)
    })

}catch(err){
    console.log(err)
}

fetchdata()

 