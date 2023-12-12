import AboutItem from './AboutItem'
import AboutItem1 from './AboutItem1'

const About = () => {
  return (
    <>
      <section className=''>
        <div className="container md:w-5/6 px-2 md:px-0 mx-auto grid md:grid-cols-2 sm:grid-cols-1 items-center  gap-14 h-full ">
          <AboutItem  />
        </div>

        <div className=" container md:w-5/6 px-2 md:px-0 mx-auto grid md:grid-cols-2 sm:grid-cols-1 items-center gap-14 md:mt-[-2px] mt-32">
          <AboutItem1 orderOne="order-2" orderTwo="order-1" />
        </div>
      </section>
    </>
  )
}

export default About