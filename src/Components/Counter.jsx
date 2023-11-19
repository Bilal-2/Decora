import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { increaseItemQuantity, decreaseItemQuantity } from '../redux/slices/basketSlice'

const Add = () => (
    <svg className='bg-transparent' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
)

const Minus = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
)


function Counter({item, className}) {
    const dispatch = useDispatch()

const increaseQuantity = (id) => {
    dispatch(increaseItemQuantity(id))  
}

const decreaseQuantity = (id) => {
    dispatch(decreaseItemQuantity(id))
}

    return(
        <div className={`text-4xl ${className} grid grid-cols-3 gap-6 w-max items-center`}>
            <button 
                className="w-full h-full p-1"
                onClick={decreaseQuantity(item.id)}
            ><Minus/></button>
            <div className="font-bold text-black">{item.quantity}</div>
            <button 
                className="w-full h-full p-1"
                onClick={increaseQuantity(item.id)}
            ><Add/></button>
        </div>
    )
}

Counter.propTypes = {
    className: PropTypes.string,
    item: PropTypes.object
}

export default Counter