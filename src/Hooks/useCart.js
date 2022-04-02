import { useEffect, useState } from "react"
import { loadDataStrg } from "../Components/Local Storage/LocalStorage";
import useProducts from "./useProducts";

const useCart = () => {
  const [cart, setCart] = useState([])
  useEffect(() => {
    const getDataStrg = loadDataStrg();
    setCart(getDataStrg)
  }, [cart])
  return [cart, setCart];
}

export default useCart