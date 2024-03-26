import  {createContext, useEffect, useState} from 'react'
//import useLocalStorage from '../hooks/useLocalStorage'

const StoreContext = createContext(null)


const StoreProvider = ({children}) => {
    //const [cart, setCart] = useLocalStorage('commerce_cart', [])

    // Store Filtration
    const [query, setQuery] = useState('')
    const [categoryIndex, setCategoryIndex] = useState(-1)
    const [companyIndex, setCompanyIndex] = useState(-1)
    const [colorIndex, setColorIndex] = useState(-1)
    const [price, setPrice] = useState(309999)
    const [freeShipping, setFreeShipping] = useState(false)

    // Store Grid
    const [sortByIndex, setSortByIndex] = useState(0)
    const [viewGrid, setViewGrid] = useState(true)

    //Products
    const [products, setProducts] = useState([])




    useEffect(() => {
        (
          async () => {
          

    
            const response = await fetch('https://decora-backend.vercel.app/api/ProductsData', {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                }
            }).then(res => res.json()).catch(err => console.log("ERROR: ", err))
    
            //console.log(response[0]);
    
            setProducts(response[0])
          }
        )();
      }, []);

      



    
    
    

    const clearFilters = () => {
        setQuery('');
        setCategoryIndex(-1);
        setCompanyIndex(-1);
        setColorIndex(-1);
        setPrice(309999)
        setFreeShipping(false)
    }
    
    return (
        <StoreContext.Provider value={{
            // cart, setCart, 
            query, setQuery,
            categoryIndex, setCategoryIndex,
            freeShipping, setFreeShipping,
            price, setPrice, 
            colorIndex, setColorIndex,
            companyIndex, setCompanyIndex,
            sortByIndex, setSortByIndex,
            viewGrid, setViewGrid,
            products,
            clearFilters
        }}>
            {products ? children : ''}
        </StoreContext.Provider>
    );
}

export { StoreProvider, StoreContext }