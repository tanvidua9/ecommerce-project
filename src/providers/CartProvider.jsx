import react,{useState, useCallback, useMemo, useEffect} from "react";
import { CartContext } from "../components/Contexts";
import { withUser } from "../components/withProvider";
import { getCart, getProductsData, saveCart } from "../api";

function CartProvider({isLoggedIn,children}){
    const [cart, setCart] = useState([]);

    useEffect(function(){
        if(!isLoggedIn){
            const savedDataString = localStorage.getItem("my-cart") || "{}"
            const savedData = JSON.parse(savedDataString);
            quantityMapToCart(savedData);

        }else{
            getCart().then(function(savedCart){
                setCart(savedCart);
            })
        }
    },[isLoggedIn])

    function quantityMapToCart(quantityMap){
        getProductsData(Object.keys(quantityMap)).then(function(products){
                const savedCart=products.map(p=>({product: p, quantity: quantityMap[p.id]}))
                setCart(savedCart)
        })
    }

    const handleAddToCart = useCallback((productId, count) => {
        const quantityMap=cart.reduce(
            (m,cartItem)=>({...m , [cartItem.product.id]: cartItem.quantity}),
        {});

        const oldCount = quantityMap[productId] || 0;
        const newCart = { ...quantityMap, [productId]: oldCount + count };
        updateCart(newCart);
    }, [cart]);
    
    function updateCart(quantityMap){
        if(!isLoggedIn){
            const quantityMapString = JSON.stringify(quantityMap);
            localStorage.setItem("my-cart", quantityMapString);
            quantityMapToCart(quantityMap);
        }else{
            saveCart(quantityMap).then(function(response){
                //setCart(response)]]]
                // const map = response.data.reduce((prevMap, currItem) => (
                //     { ...prevMap, [currItem.product_id]: currItem.quantity }
                // ), {});
                quantityMapToCart(quantityMap);
            })
        }
    }
    
    const totalCount =cart.reduce(function(previous,current){
        return previous+current.quantity;
    },0)

    return (
        <CartContext.Provider value={{cart,totalCount, updateCart, handleAddToCart}}>
            {children}
        </CartContext.Provider>
    )
}


export default withUser(CartProvider);

