import { Link } from "react-router-dom"

const Discover = () => {
  return (
    <>
      <section className='my-40 relative bg-[#979470]'>
        <div className="container md:w-5/6 mx-auto grid md:grid-cols-2 sm:grid-cols-1 items-center gap-14  justify-center px-2 md:px-0">
           <div className=''>
            {/* <h1 className='text-7xl font-bold leading-tight text-slate-100 absolute top-[-10%] left-0'>Get Inspired</h1> */}
              <img src="https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="discover" />
           </div>
           <div>
              <h2 className='text-5xl font-bold leading-tight text-black'>Discover the interior design of your dreams</h2>
              <p className='my-5'>A perfect blend of timeless style and comfort. With its rich leather upholstery and classic design, this sofa adds sophistication to any living space. The durable construction and plush cushioning offer both enduring elegance and relaxation.</p>
              <Link className="bg-black text-white px-8 py-3 inline-block" to="/shop">Get inspired</Link>
              <div className=' block my-14'>
                <img className='float-right w-3/4' src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="discover" />
              </div>
             
           </div>
        </div>
        
      </section>
    </>
  )
}

export default Discover