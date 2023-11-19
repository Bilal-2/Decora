import PropTypes from 'prop-types';

const AboutItem = ({orderOne='order-1', orderTwo='order-2'}) => {
    
  return (
    <>
        <div className={orderOne}>
            <img className='w-full  mt-[-130px]' src="https://i.ibb.co/bgk6xG9/image.png" alt="about" />
        </div>
        <div className={orderTwo}>
            <h2 className='text-5xl font-bold leading-tight text-black'>The Coffee Table</h2>
            <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipiscing elit urna gravida interdum natoque, nec orci himenaeos aliquam eleifend senectus feugiat placerat fringilla et, nam felis porttitor egestas aptent augue sed arcu mi ligula. Ultricies sed congue fames dictum suscipit eros cum, tellus primis phasellus blandit vitae litora, dapibus odio praesent pellentesque convallis curabitur. Luctus suscipit nisi eu nec risus rhoncus condimentum mus senectus felis ac pharetra, ulus vel libero egestas curae cubilia integer rutrum sollicitudin.</p>
            
            <a className='bg-black text-white px-11 py-3 inline-block' href="#"> Shop Now</a>
        </div>
    </>
  )
}

AboutItem.propTypes = {
    orderOne: PropTypes.string,
    orderTwo: PropTypes.string,
  };

export default AboutItem