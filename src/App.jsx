import axios from "axios"
import { useEffect, useState } from "react"
import Cards from "./components/Card"
import { useNavigate } from "react-router-dom"

const App = () => {
  const [data , setData] = useState([])
  const navigate = useNavigate() 

  useEffect(() => {
    const getData = () => {
      axios.get('https://fakestoreapi.com/products')
      .then((res)=>{
        console.log(res.data);
        setData(res.data)
        
      }).catch((Error)=>{
        console.log(Error);
        
      })
    }
    getData()
    
  } , [])

  const singleUser = (item) =>{
    navigate(`/singleProduct/${item.id}`)
    console.log(item.id);

    
  }
  const slides = [
    { id: 1, imgUrl: "https://assets.vogue.com/photos/6376852113ede61167ee9e16/3:2/w_3000,h_2000,c_limit/leather-cover-collage-revised.png" },
    { id: 2, imgUrl: "https://elanstreet.com/blog/wp-content/uploads/2016/04/winter_jewellery_trends_featured_fashion_style-1080x566.jpg" },
    { id: 3, imgUrl: "https://sm.pcmag.com/t/pcmag_au/photo/a/anker-powe/anker-powercore-ii-20000_12wk.800.jpg" },
    { id: 4, imgUrl: "https://via.placeholder.com/800x400?text=Slide+4" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  
  
  
  return (
    <>
    <h1 className="text-center m-2 text-3xl font-serif bg-white">Celebrity Style</h1>
    {/* carousel  */}
   <div className="relative max-w-screen mx-auto  overflow-hidden shadow shadow-zinc-100">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full  h-auto flex-shrink-0"
          >
            {/* Image Slide */}
            <img
              src={slide.imgUrl}
              alt={`Slide ${slide.id}`}
              className="w-full h-full object-cover "
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
      >
        &#8592;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
      >
        &#8594;
      </button>

      {/* Dots for indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>

    {/* ... */}
    <h1 className="text-center mt-6 text-3xl font-serif bg-gray-50">COLLECTION</h1>
<div className="flex flex-wrap mx- justify-around bg-gray-50 border-b-5 my- rounded-sm" >
    {data ? data.map((item)=>{
      return <Cards key={item.id} func={() => singleUser(item)} rating={item.rating.rate} item={item.title} category={item.category} price={item.price} image={item.image} />
    }) : <h1>Loading..</h1> }
    </div>
    {/* WhatsApp button  */}
  <div className="fixed bottom-0 shadow-2xl shadow-green-800 rounded-full right-0 mb-4 mr-4 z-10">
    <div>
      <a
        title="Connect with me on WhatsApp"
        href="https://wa.me/+923120255597"
        target="_blank"
      >
      <svg className="p-1 border-gray-600 border-opacity-30 border-2 bg-white rounded-full" xmlns="http://www.w3.org/2000/svg" width="3.5em" height="3.5em" viewBox="0 0 256 258"><defs><linearGradient id="logosWhatsappIcon0" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stopColor="#1faf38"/><stop offset="100%" stopColor="#60d669"/></linearGradient><linearGradient id="logosWhatsappIcon1" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stopColor="#f9f9f9"/><stop offset="100%" stopColor="#fff"/></linearGradient></defs><path fill="url(#logosWhatsappIcon0)" d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a123 123 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"/><path fill="url(#logosWhatsappIcon1)" d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z"/><path fill="#fff" d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561s11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716s-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"/></svg>
      </a>
    </div>
  </div>
  {/* .... */}
  <footer className="relative bg-blueGray-200 pt-8 pb-6">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap text-left lg:text-left">
      <div className="w-full lg:w-6/12 px-4">
        <h4 className="text-3xl fonat-semibold text-blueGray-700">Keep in touch!</h4>
        <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
          Find us on any of these platforms, we respond 1-2 business days.
        </h5>
        <div className="mt-6 lg:mb-0 mb-6">
          <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i className="fab fa-twitter"></i></button><button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i className="fab fa-facebook-square"></i></button><button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i className="fab fa-dribbble"></i></button><button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i className="fab fa-github"></i>
          </button>
        </div>
      </div>
      <div className="w-full lg:w-6/12 px-4">
        <div className="flex flex-wrap items-top mb-6">
          <div className="w-full lg:w-4/12 px-4 ml-auto">
            <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
            <ul className="list-unstyled">
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/presentation?ref=njs-profile">About Us</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://blog.creative-tim.com?ref=njs-profile">Blog</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.github.com/creativetimofficial?ref=njs-profile">Github</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">Free Products</a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-4/12 px-4">
            <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
            <ul className="list-unstyled">
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">MIT License</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/terms?ref=njs-profile">Terms &amp; Conditions</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/privacy?ref=njs-profile">Privacy Policy</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/contact-us?ref=njs-profile">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr className="my-6 border-blueGray-300" />
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-4/12 px-4 mx-auto text-center">
        <div className="text-sm text-blueGray-500 font-semibold py-1">
          Copyright © <span id="get-current-year">2024</span><a href="https://github.com/Jalal-ali" className="text-blueGray-500 hover:text-gray-800" target="_blank"> Jalal Ali.</a>
        </div>
      </div>
    </div>
  </div>
</footer>
    </>
  )
}

export default App