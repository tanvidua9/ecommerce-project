import react,{useState, useCallback, useMemo, useEffect} from "react";
import { CartContext } from "../components/Contexts";
import { withUser } from "../components/withProvider";
import { getCart, getProductsData, saveCart } from "../api";

function CartProvider({isloggedIn,children}){
    const [cart, setCart] = useState([]);

    useEffect(function(){
        if(!isloggedIn){
            let savedData = {};
            try {
            const savedDataString = localStorage.getItem("my-cart") || "{}"
            if (savedDataString) {
                savedData = JSON.parse(savedDataString);
            }
            } catch (error) {
                console.error("Invalid cart JSON in localStorage", error);
            }
            quantityMapToCart(savedData);

        }else{
            getCart().then(function(savedCart){
                setCart(savedCart);
            })
        }
    },[isloggedIn])

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
        if(!isloggedIn){
            const quantityMapString = JSON.stringify(quantityMap);
            localStorage.setItem("my-cart", quantityMapString);
            quantityMapToCart(quantityMap);
        }else{
            saveCart(quantityMap).then(function(response){
                //setCart(response)]]]
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

