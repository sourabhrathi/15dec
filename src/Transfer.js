import axios from 'axios'
import React,{useState} from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { incNumber } from './Action'

export default function Transfer() {
  
const dispatch=useDispatch()
const send=(e)=>{
  dispatch(incNumber(e))
}
const {id}=useParams();

    const [data, setdata] = useState([])
    const [item,setitem]=useState([])


const fetch=()=>{
  axios.get(`https://fakestoreapi.com/products/${id}`)
  .then(res=>{
    setdata(res.data)
    setitem(res.data.rating)
    console.log(res.data)
  })
}
useEffect(()=>{
  fetch()
},[])

  return (
    <>
    
<div className='container p-3 d-flex-change'>
  <div className='row'>
    <div className='col-md-5 d-image'>
     <img src={data.image}  style={{width:'350px',height:'450px',borderRadius:'40px'}}  alt="images"></img>
    </div>
    <div className='col-md-7 p-5 my-4 '>
    <h5 style={{color:'yellow'}}>Category:<span style={{fontSize:'15px',color:'white'}}> {data.category}</span> </h5>
    <h5 style={{color:'yellow'}}>Description:<span style={{fontSize:'15px',color:'white'}}>  {data.description}</span></h5>
    <h5 style={{color:'yellow'}}>Rate:<span style={{fontSize:'15px',color:'white'}}>  {item.rate}</span> </h5>
    <h5 style={{color:'yellow'}}>Count: <span style={{fontSize:'15px',color:'white'}}>  {item.count}</span></h5>
    <h5 style={{color:'yellow'}}>Price: <span style={{fontSize:'15px',color:'yellow'}}> $ {data.price}</span></h5>
    <h5 style={{color:'yellow'}}>Title:<span style={{fontSize:'15px',color:'white'}}>  {data.title}</span></h5>
    
    <button className='btn btn-danger my-4' onClick={()=>send(data)}>Add to cart</button>
    </div>
  </div>
</div>


    </>
  )
}
