
const Newsletter = () => {
  return (
    <>
      <section className='my-40'>
        <div className="container md:w-5/6 px-2 md:px-0 mx-auto">
            <div className='md:w-3/5 mx-auto text-center'>
              <h2  className='md:text-5xl text-4xl font-bold leading-tight text-black'> Join our Newsletter</h2>
              <p className='my-10'>Lorem ipsum dolor sit amet consectetur adipiscing elit pharetra tristique, ridiculus vel habitant cras ligula aenean euismod est erat, ac mi duis venenatis et nascetur vivamus vestibulum.</p>
                <div>
                    <form className='flex border border-black'>
                      <input className='w-full px-3 bg-transparent focus:outline-none' type="text" name="seearch" placeholder='Enter email...' />
                      <button type='submit' className='bg-black text-white px-7 py-3 '>Submit</button>
                    </form>
                  </div>
              </div>
          </div>
        </section>
    </>
  )
}

export default Newsletter