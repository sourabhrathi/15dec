import React,{useState} from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
export default function Dashboard(props) {
  const toggle=props.toggle;

  const [data, setdata] = useState([])
  const [item, setitem] = useState([])

  const fetch=()=>{
    axios.get('https://fakestoreapi.com/products')
    .then(res=>{
      setdata(res.data)
      console.log(res.data)
    })
  }

  const fetch2=()=>{
    axios.get('https://fakestoreapi.com/products/categories')
    .then(res=>{
     setitem(res.data)
    })
  }



  useEffect(()=>{
    fetch()
    fetch2()
  },[])

  const handleonclick=(e)=>{
    axios.get(`https://fakestoreapi.com/products/category/${e}`)
    .then(res=>{
      setdata(res.data)
    })
  }
  return (
    <>
    <div className={toggle?'d-flex-dashboard':'d-flex-dashboard-1'}>

<div className='black-par'>
<div className='row'>
  <div className='col-md-8 d-flex align-items-center justify-content-between mx-4 my-2'>
    {item.map((e,index)=>{
      return(
        <button className='btn-clear' onClick={()=>handleonclick(e)} key={index}>{e}</button>
      )
    })}
  
  </div>
</div>

<div className='row'>
  {data.map((value)=>{
    return(

      <div className='col-md-4 my-3 '>
              <Link to={`transfer/${value.id}`} style={{textDecoration:'none' , color:'white'}}>
<div class="card mx-4" style={{width: "17rem"}}>
  <img src={value.image} class="card-img-top" style={{background:'none',border:'none'}} alt="..." height="250px"/>
  <div class="card-body">
    <h5 class="card-title">{value.category}</h5>
    <p class="card-text">{value.description.slice(0,100)}</p>

    <div className='row'>
      <div className='col-md-12 d-flex justify-content-between'>
        <p style={{color:'yellow',textDecoration:'underline',fontSize:'18px'}}>Price:{value.price}</p>
     
     </div>
     </div>
  </div>
</div>
</Link>
      </div>
     
    )
  })}
 
</div>


</div>


    </div>

    
    </>
  )
}
