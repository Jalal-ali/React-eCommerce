import { Link } from "react-router-dom"

const Cards = ({image , item , price , rating , func})=>{
    return(
        <>
        <div className="relative m-10 flex w-80 max-w-xs flex-col border-zinc-300 border-t-2 border-b-2 overflow-hidden rounded-lg border  bg-white shadow-md">
  <a className="relative mx-2 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
    <img className="object-contain mx-auto h-auto  max-w-full" src={image} alt="product image" />
    <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">30% OFF</span>
  </a>
  <div className="mt-4 border-t rounded-lg border-slate-300 m-2 p-2 px-5 pb-5">
    <a href="#">
      <h5 className="text-xl tracking-tight font-semibold text-slate-900">{item}</h5>
    </a>
    <div className="mt-2 mb-5 flex items-center justify-between">
      <p>
        <span className="text-3xl font-bold text-slate-900">${price}</span>
        <br />
        {/* <span className="text-sm text-slate-900">{props.description}</span> */}
      </p>
      <div className="flex items-center">
        <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        
        <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{rating}</span>
      </div>
    </div>
    <button onClick={func} className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
    Show More
    </button>
      
  </div>
</div>
        </>
    )
}
export default Cards