function deleteItem(e){

}

function getPriceByProduct(){
  let prices = document.getElementsByClassName('prices')
  for (let i = 0; i < prices.length; i++) {
   const pricesProduct = document.getElementsByClassName('prices')[i].innerText.replace("€",'')
  console.log(pricesProduct.replace("€",''))
  const totalQuantify = document.getElementsByClassName('quantify')[i].value
  console.log(totalQuantify) 
  const totalPrices = parseInt(pricesProduct) * parseInt(totalQuantify) 
  const total = document.getElementsByClassName('finalPrices')[i] 
  total.innerText = totalPrices + '€' 
  }
  
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice(finalPrices) {
  const result = document.getElementesById('result')
  
console.log(result)
  
}

function createNewItemRow(itemName, itemUnitPrice){
  
}

function createNewItem(){

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');

  calculatePriceButton.addEventListener('click', getPriceByProduct)


};