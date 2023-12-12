
const Newsletter = () => {
  return (
    <>
      <section className='my-40'>
        <div className="container md:w-5/6 px-2 md:px-0 mx-auto">
            <div className='md:w-3/5 mx-auto text-center'>
              <h2  className='md:text-5xl text-4xl font-bold leading-tight text-black'> Join our Newsletter</h2>
              <p className='my-10'>Stay in the loop with our newsletter - your passport to exclusive updates, curated content, and exciting offers delivered right to your inbox, ensuring you never miss a moment of what matters most.</p>
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