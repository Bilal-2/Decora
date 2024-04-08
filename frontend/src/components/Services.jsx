import ServiceItem from "./ServiceItem"

const Service = () => {
  return (
    <>
      <section className='py-20 overflow-hidden'>
        <div className="container md:w-5/6 mx-auto grid md:grid-cols-3 grid-cols-1 gap-1 px-2 md:px-0">
          <ServiceItem
            img="https://cdn-icons-png.flaticon.com/512/869/869019.png"
            title="Fast & Free Shipping"
            paragraph="Every single order ships for free. NO minimums, no tiers, no fine print whatsoever"
          />
          <ServiceItem
            img="https://cdn-icons-png.flaticon.com/512/685/685388.png"
            title="Modular, easy-to-move design"
            paragraph="Streamline your lifestyle with our versatile and adaptable solution for seamless organization and functionality on the go."
          />
          <ServiceItem
            img="https://cdn-icons-png.flaticon.com/512/3275/3275760.png"
            title="Durable, premium materials"
            paragraph="Crafted with durable, premium materials for an unparalleled blend of longevity and luxury in our service offerings."
          />

        </div>
      </section>
    </>
  )
}

export default Service