const search= ()=>{
    const searchBox = document.querySelector(".search-input")
    const searchItem  = document.querySelector(".search-screen").value.toUpperCase()
    // console.log(searchItem)
    const productList = document.querySelector(".search-items")
    const product = document.querySelectorAll(".product")
    const productName = document.querySelectorAll ("h2")
    // for(var i=0;i < productName.length;i++){
        // let match = product[i].getElementsByTagName('h2')[0]

        // console.log(match)
        // if(match){
        //   let textvalue =  match.innerHTML
        //   if(textvalue.toUpperCase().indexOf(searchBox) > -1){
        //     console.log(product[i])
        //     product[i].style.display=""
        //   }
        //   else{
        //     product[i].style.display="none";
        //   }
    // }
    // console.log(productName.value)
    // console.log(productName)
    // productName.forEach((element)=>{
    //     let products = element.innerText.toUpperCase()
    //     if(products.includes(searchItem)){
    //         console.log(products)
    //     }
    //     else{
    //         // products.style.display="none"
    //         // element.style.display="none
    //         // productList
    //         // console.log(product)
    //     }
    // })
    product.forEach((element)=>{
        const productName = element.getElementsByTagName('h2')[0]
        match = productName.innerText.toUpperCase()
        if(!match.includes(searchItem)){
            element.style.display="none"
        }
        else{
            element.style.display=""
        }
    })
}