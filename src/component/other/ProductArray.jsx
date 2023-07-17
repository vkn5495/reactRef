const productsArray =[
    {
        id:'1',
        title: 'coffee',
        price:4.99
    },
    {
        id:'2',
        title: 'sunglass',
        price:9.99
    },
    {
        id:'3',
        title: 'camara',
        price:99.99
    }
]

function getProductData(id){
     let productData = productsArray.find(product => product.id === id)

     if(productData == undefined){
        console.log('product data does not exits for id: ' + id)
        return undefined;
     }
     return productData;
}

export  { productsArray,getProductData }