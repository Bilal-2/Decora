import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import { Link, useNavigate } from "react-router-dom";
import { Bars } from 'react-loader-spinner'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import InnerImageZoom from 'react-inner-image-zoom'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, selectItems } from "../redux/slices/basketSlice";

function SingleProduct() {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false)
  const { reviews, name, company, description, price, stars } = product || {}
  const dispatch = useDispatch()
  const cartItems = useSelector(selectItems)

  console.log(product);
  useEffect(() => {
    (async () => {
      setLoading(true)
      const response = await fetch(`https://course-api.com/react-store-single-product?id=${id}`).then(res => res.json()).catch(err => console.log(err)).finally(() => setLoading(false));
      setProduct(response);
    })();
  }, [id])

  useEffect(() => {
    if (product) {
      setImage(product?.images[0]?.thumbnails);
    }
  }, [product]);

  const addToBasket = () => {
    dispatch(addItem({
      ...product,
      image: image?.large?.url,
      quantity: 1
    }))
  }

  const checkItemExists = (id) => {
    const find = cartItems.filter(item => item.id === id)
    return !!find.length
  }

  const navigation = useNavigate();
  const handleClick = () => { 
    navigation('/ar')
  }

  return (
    <>
      <div className="container mx-auto md:w-5/6 pt-5 pb-7 px-2 md:px-0">
        {/* Bread crub */}
        {loading ? (
          <div className="flex justify-center w-full my-10">
            <Bars
              color='#E1C8B4'
              ariaLabel='loading'
            />
          </div>
        ) : (
          <>
            <div className="flex items-center mb-3 text-sm">
              <Link to={"/"} className="text-[#bb8e1d]">Home</Link>
              <span className="mx-2 text-black">/</span>
              <span className="capitalize text-black">{name}</span>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2">
                {/* <img  alt={name} className="w-full rounded" /> */}
                <div>
                  <InnerImageZoom
                    src={image?.large?.url}
                    zoomSrc={image?.full?.url}
                    zoomType="hover"
                  />
                </div>
                <div className="flex flex-wrap gap-2 mt-5">
                  {product?.images.map((image, index) => (
                    <img onClick={() => setImage(image.thumbnails)} src={image.thumbnails.small.url} alt={name} key={index} className="w-20 rounded cursor-pointer" />
                  ))}
                </div>
              </div>
              <div className="w-full md:w-1/2 md:pl-8 capitalize">
                <h1 className="text-xl md:text-3xl text-black">{name}</h1>
                <span className="text-sm text-gray-500">{company}</span>
                {/* Colors */}
                <div className="flex flex-wrap mt-5">
                  {product?.colors.map(color => (
                    <div key={color} className="border-gray-200 mr-2 border-2 rounded-full h-6 w-6 flex items-center justify-center" style={{ backgroundColor: color }}>
                    </div>
                  ))}
                </div>
                <div className="flex items-center mt-3">
                  <ReactStars
                    count={5}
                    value={stars}
                    size={18}
                    edit={false}
                    isHalf={true}
                    activeColor="#ffb400"
                    emptyIcon={<BsStar size={18} />}
                    halfIcon={<BsStarHalf size={18} />}
                    filledIcon={<BsStarFill size={18} />}
                  />
                  <span className="text-xs pl-1">({reviews})</span>
                </div>
                <p className="text-[#bb8e1d] mt-3 text-xl md:text-2xl">${price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                <div>
                  {checkItemExists(id) ? (
                    <button className='bg-black text-white py-2 px-14 rounded text-sm mt-5 block'>Already added</button>
                  ) : (
                    <button onClick={addToBasket} className='bg-black text-white py-2 px-14 rounded text-sm mt-5 block'>Add to cart</button>
                  )}

                </div>
                <button onClick={handleClick} className='bg-black text-white py-2 px-14 rounded text-sm mt-5 block'>View in your Space</button>

              </div>
            </div>
            <div className="mt-10">
              <h4 className="text-lg font-bold border-b mb-3 text-black">Description</h4>
              <p className="text-gray-500 text-sm">{description}</p>
            </div>
          </>
        )}

      </div>
    </>
  )
}

export default SingleProduct