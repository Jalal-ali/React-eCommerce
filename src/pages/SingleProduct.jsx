import axios from "axios"
import Cards from "../components/Card"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Single from "../components/Single"

const SingleProduct = () => {
    const [data , setData] = useState([])
const { id }  = useParams()


    useEffect(() => {
        const getData = () => {
          axios.get(`https://fakestoreapi.com/products/${id}`)
          .then((res)=>{
            console.log(res.data);
            setData(res.data)
            
          }).catch((Error)=>{
            console.log(Error);
            
          })
        }
        getData()
        
      } , [])

  return (
    
    <>
    <Single key={data.id} price={data.price} image={data.image} item={data.title} description={data.description} />
    <div className="flex flex-wrap mx-1 justify-around border-t-2 border-b-5 my-2 rounded-sm">

<Cards   category={data.category}   />
    </div>
    </>
  )
}

export default SingleProduct