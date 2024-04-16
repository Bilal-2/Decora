//import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useState, useRef } from "react";

export default function ContactUs() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }
  
  const hanldeSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // emailjs
    //   .send(
    //     "service_4l45xiy",
    //     "template_dwfnsrg",
    //     {
    //       from_name: form.name,
    //       to_name: "Bilal",
    //       from_email: form.email,
    //       to_email: "bilal.subhani1111@gmail.com",
    //       message: form.message,
    //     },
    //     "xcdLJ3hfxHMHEkNgA"
    //   )
    //   .then(
    //     () => {
    //       setLoading(false);
    //       toast.success("Thank You. Will get back to you soon !");
    //       setForm({
    //         name: "",
    //         email: "",
    //         message: "",
    //       });
    //     },
    //     (error) => {
    //       setLoading(false);
    //       console.log(error);
    //       toast.error("Something Went Wrong");
    //     }
    //   );
  };

  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder="0"
              title="map"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://maps.google.com/maps?q=uet+ksk+computerscience+department&t=&z=13&ie=UTF8&iwloc=&output=embed"
              style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
            ></iframe>

            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  University of Engineering and Tecnonolgy Lahore, New Campus
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a
                  href="mailto:example@email.com"
                  className="text-[#6f3914] leading-relaxed"
                >
                  bilal.subhani1111@gmail.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">+923497697969</p>
              </div>
            </div>
          </div>
          <form
           ref={formRef}
           onSubmit={hanldeSubmit}
            className="lg:w-1/3 md:w-1/2 bg-transparent p-4 rounded-xl shadow-xl hover:shadow-inner flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600"></p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                onChange={hanldeChange}
                value={form.name}
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-[#6f3914] focus:ring-2 focus:ring-[#9f5e1d] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                onChange={hanldeChange}
                value={form.email}
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-[#6f3914] focus:ring-2 focus:ring-[#9f5e1d] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Message
              </label>
              <textarea
              onChange={hanldeChange}
              value={form.message}
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-[#6f3914] focus:ring-2 focus:ring-[#9f5e1d] h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="text-white bg-[#645832] hover:bg-[#5c4d1c] border-0 py-2 px-6 focus:outline-none  rounded text-lg"
             type='submit'
             
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Terms and Conditions Apply
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
