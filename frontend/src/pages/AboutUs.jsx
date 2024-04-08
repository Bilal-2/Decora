

const AboutUs = () => (
    <>
 
        <section id="about" className="py-16 p-9">
            <div className="tw-container grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-16">
                <img
                    style={{height: '450px'}}
                    alt="dining room"
                    className="object-cover rounded w-full bg-gray-100"
                    src='https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                />
                <article>
                    <div>
                        <h2 className="font-bold text-black">Our Story</h2>
                        <div className="w-24 h-1 mt-3 bg-[#9f5e1d]"/>
                    </div>
                    <p className="mt-5 text-sm md:text-base lg:text-lg leading-loose text-black">
                    Welcome to Decora, where we redefine the way you experience furniture. At Decora, we believe in the seamless fusion of style and technology. Our online store introduces a groundbreaking feature – an Augmented Reality (AR) viewer, allowing you to virtually place our exquisite furniture pieces in your space before making a purchase. Immerse yourself in a world of design possibilities as you explore our curated collection crafted with precision and passion. At Decora, we're not just a furniture store; we're a gateway to a personalized and interactive shopping experience, where your vision for a perfect home comes to life. Join us on this journey of innovation and elegance – because your space deserves nothing less.
                    </p>
                </article>
            </div>
        </section>
    </>
)

export default AboutUs