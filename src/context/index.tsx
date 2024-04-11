import React, { createContext, useEffect, useState, ReactNode } from "react";
import Data from './data';
import { Context } from "vm";


interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    quantity: number;
    image?: any;
}

interface ContextValue {
    products: Product[];
    needMenu: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
    cart: [Product[], React.Dispatch<React.SetStateAction<Product[]>>];
    totalPrice: [number, React.Dispatch<React.SetStateAction<number>>];
    addToCart: (id:number)=>void;
}


export const DataContext = createContext<ContextValue>({
    products: [],
    needMenu: [false, () => { }],
    cart: [[], () => { }],
    totalPrice: [0, () => { }],
    addToCart: (id:number)=>{},
});

export const DataProvider = ({ children }: { children: ReactNode }) => {
  
    const [products, setProducts] = useState<Product[]>([]);
    const [needMenu, setMenu] = useState(false);
    const [cart, setCart] = useState<Product[]>([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(
        () => {
            const productsData = Data.items;
            if(productsData){
                setProducts(productsData)
            }else{
                setProducts([]) 
            }
            const cartData= JSON.parse(localStorage.getItem("cartData")||"[]");
            cartData ?? setCart(cartData);
            // productsData ?? setProducts(productsData) : setProducts([]);
        }
    )

    const addToCart = (id: number) => {
        if (!cart.some((item)=>item.id==id)){
            const data= products.filter((product)=>{product.id===id;});
            setCart([...cart,...data]);
        }
    }

    useEffect (()=>{
        
    },[]);

    useEffect(()=>{
        localStorage.setItem("cartData",JSON.stringify(cart));
        const getTotal =()=>{
            const price= cart.reduce((prev,item)=>{
                return prev + (item.price*item.quantity)
            },0)
            setTotalPrice(price);
        }
        getTotal()
    },[cart]);

    const value: ContextValue={
        products,
        needMenu :[needMenu,setMenu],
        cart:[cart,setCart],
        addToCart,
        totalPrice:[totalPrice,setTotalPrice],
    }

    // console.log(products);
    return(
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}