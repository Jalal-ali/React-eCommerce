import axios from "axios"
import { useEffect, useState } from "react"
import Cards from "./components/Card"
import { useNavigate } from "react-router-dom"

const App = () => {
  const [data , setData] = useState([])
  const navigate = useNavigate  

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
    navigate(`singleproduct/${item.id}`)
    console.log("hello");

    
  }




  return (
    <>

    <div className="flex flex-wrap mx-1 justify-around border-t-2 border-b-5 my-2 rounded-sm" >
    {data ? data.map((item)=>{
      return <Cards key={item.id} func={()=> singleUser(item)} rating={item.rating.rate} item={item.title} category={item.category} price={item.price} image={item.image} />
    }) : <h1>Loading..</h1> }
    </div>

    </>
  )
}

export default App