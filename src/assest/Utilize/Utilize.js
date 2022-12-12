
function addProductLS([product, setIncrease]) {
    let productList = {}
    const getLocalsStorage = localStorage.getItem("shopin-card")
    if (getLocalsStorage) {
        productList = JSON.parse(getLocalsStorage)
    }
    let exiset = productList[product.id]
    // console.log(exiset)
    if (exiset) {
        productList[product.id] = exiset + 1
        product.quantity = productList[product.id]
        // console.log(product.quantity)
    } else {
        productList[product.id] = 1
        product.quantity = 1
        let addProductLength = getProductLS()
        setIncrease(Object.keys(addProductLength).length + 1)
    }
    localStorage.setItem("shopin-card", JSON.stringify(productList))
}

function getProductLS() {
    let productList = {}
    const getLocalsStorage = localStorage.getItem("shopin-card")
    if (getLocalsStorage) {
        productList = JSON.parse(getLocalsStorage)
    }
    return productList
}
export {
    addProductLS,
    getProductLS
}