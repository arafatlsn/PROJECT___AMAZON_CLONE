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
  return localArray
};

export { setLocalStrg, loadDataStrg };