import Product from "../Products/Product/Product";

const setLocalStrg = props => {
  const getProduct = localStorage.getItem('shoping-cart');
  let localArray = [];
  if(getProduct){
    localArray = JSON.parse(getProduct);
    localArray = [...localArray, props]
    localStorage.setItem('shoping-cart', JSON.stringify(localArray))
  }
  else{
    console.log(props)
    localArray = [...localArray, props];
    localStorage.setItem('shoping-cart', JSON.stringify(localArray))
  }
};

const loadDataStrg = () => {
  const getProduct = localStorage.getItem('shoping-cart');
  let localArray;
  if(getProduct){
    localArray = JSON.parse(getProduct)
  }
  else{
    localArray = [];
  }
  return localArray
};

const removeStorage = () => {
  const removeStr = localStorage.setItem('shoping-cart', []);
}

export { setLocalStrg, loadDataStrg, removeStorage };