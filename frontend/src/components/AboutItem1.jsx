import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AboutItem1 = ({orderOne='order-1', orderTwo='order-2'}) => {
    
  return (
    <>
        <div className={orderOne}>
            <img className='w-full  ' src="https://www.course-api.com/images/store/product-10.jpeg" alt="about" />
        </div>
        <div className={orderTwo}>
            <h2 className='text-5xl font-bold leading-tight text-black'>The Leather Sofa</h2>
            <p className='my-5'>Meet our Leather Sofa – a perfect blend of timeless style and comfort. With its rich leather upholstery and classic design, this sofa adds sophistication to any living space. The durable construction and plush cushioning offer both enduring elegance and relaxation. Whether entertaining guests or unwinding after a long day, our Leather Sofa is the ideal combination of aesthetic appeal and comfort, making it a chic addition to elevate your home.
</p>
            
            <Link className='bg-black text-white px-11 py-3 inline-block' to="product/660b7b77c470efdd461c6fec"> Shop Now</Link>
        </div>
    </>
  )
}

AboutItem1.propTypes = {
    orderOne: PropTypes.string,
    orderTwo: PropTypes.string,
  };

export default AboutItem1