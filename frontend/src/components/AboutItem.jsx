import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AboutItem = ({orderOne='order-1', orderTwo='order-2'}) => {
    
  return (
    <>
        <div className={orderOne}>
            <img className='w-full  mt-[-120px]' src="https://i.ibb.co/bgk6xG9/image.png" alt="about" />
        </div>
        <div className={orderTwo}>
            <h2 className='text-5xl font-bold leading-tight text-black'>The Suede ArmChair</h2>
            <p className='my-5'>Introducing our Suede Armchair – a harmonious blend of luxury and comfort. Upholstered in sumptuous suede, this armchair combines a velvety texture with a sleek, contemporary design. Its neutral hue effortlessly complements any interior style, while the sturdy frame and high-density foam cushioning ensure durability and lasting comfort. Whether you relaxing after a long day or adding a touch of sophistication to your living space, our Suede Armchair is the perfect choice for those who appreciate both style and relaxation. Upgrade your home with this chic and inviting piece of furniture.






</p>
            
            <Link className='bg-black text-white px-11 py-3 inline-block' to="product/660b38a6c7c4ccc94a7015f2"> Shop Now</Link>
        </div>
    </>
  )
}

AboutItem.propTypes = {
    orderOne: PropTypes.string,
    orderTwo: PropTypes.string,
  };

export default AboutItem