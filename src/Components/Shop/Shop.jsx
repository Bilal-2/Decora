import { useEffect, useState } from 'react'
import ShopItem from './Shopitem'
import { Bars } from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, selectItems } from "../../redux/slices/basketSlice"
import {  useNavigate } from 'react-router-dom'
 
const Shop = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [loadedProducts, setLoadedProducts] = useState([])
  const dispatch = useDispatch()
  const cartItems = useSelector(selectItems)
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/products`);
  };

  useEffect(() => {
    (
      async () => {
        setLoading(true)
        const response = await fetch('https://course-api.com/react-store-products', {
          mode: 'cors',
          headers: {
            'Access-Control-Allow-Origin':'*'
          }
        }).then(res => res.json()).catch(err => console.log("ERROR: ", err)).finally(() => setLoading(false))
        setProducts(response)
        setLoadedProducts(createPagination(response))
      }
    )();
  }, []);

  const createPagination = (items, limit = 8, offset = 0) => {
    let arr = []
    items.forEach((item, index) => {
      if (index >= offset && index < offset + limit) {
        arr.push(item)
      }
    })
    return arr
  }

  // const loadMore = () => {
  //   if (loadedProducts.length === products.length) return
  //   const newProducts = createPagination(products, 8, loadedProducts.length)
  //   setLoadedProducts([...loadedProducts, ...newProducts])
  // }

  const addToBasket = (product) => {
    dispatch(addItem({
      ...product,
      quantity: 1
    }))
    console.log("product added to basket");
  }
  
  const checkItemExists = (id) => {
    const find = cartItems.filter(item => item.id === id)
    return !!find.length
  }

  return (
    <>
      <section className='block h-auto'>
        <div className="container md:w-5/6 mx-auto px-2 md:px-0">
          <div className='grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-9 my-12'>
            <h2 className='text-5xl font-bold leading-tight '>Shop by Product</h2>
          </div>
          <div>
            <div className='flex flex-wrap'>
              {loading && (
                <div className="flex justify-center w-full my-10">
                  <Bars
                    color='#E1C8B4'
                    ariaLabel='loading'
                  />
                </div>
              )}
              {!!loadedProducts.length && loadedProducts?.map(product => (
                <ShopItem
                  key={product?.id}
                  {...product}
                  onClick={() => addToBasket(product)}
                  exists={checkItemExists}
                  shouldApplyFullWidth={false}
                />
              ))}
            </div>
            {loadedProducts.length !== products.length && (
              <button onClick={handleClick} className="bg-black mx-auto text-white px-11 py-3 block">Load More</button>
              // <Link to='/products' className="bg-black mx-auto text-white px-11 py-3 block">View All</Link>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default Shop