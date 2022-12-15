import React,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { incDelete, incNumber } from './Action'
import { Remove } from './Action'

export default function Cart() {
const [price, setprice] = useState(0)

const fetch=()=>{
   let price=0;
    value.map((ele)=>{
        price=ele.price * ele.qnty+price;
        
    })
    setprice(price)
}

useEffect(()=>{
    fetch();
},[])

const remove=(item)=>{
    dispatch(Remove(item))
}

const send=(e)=>{
    dispatch(incNumber(e))
  }
    const dispatch=useDispatch()

const value=useSelector((state)=>{
    return(
        state.changeTheNumber.carts
    )
})
    const data=value.length;



  return (
    <>
    {data===0?<h1 className='text-white bg-img-down' >No data is available</h1>:
    <div className='container bg-img-clear'>
        <div className='row text-center'>
            <div className='col-md-12'>
                <h1 className='text-white'>Cart Item <hr/></h1>
            </div>
        </div>
    <div className='row'>
        {value.map((e)=>{
            return(
                <>
                <div className='col-md-5 p-2'>
                <img src={e.image} style={{height:'250px',width:'280px',borderRadius:'20px'}} alt="images" ></img>
            </div>
            <div className='col-md-7 text-white my-4'>
                <p>Title:{e.title}</p>
               <p>Category: {e.category}</p>
              <p>Price: {e.price}</p>
               <p>Total: {e.price*e.qnty}</p>
               <p>Quantity:{e.qnty}</p>
               
               <div className='d-flex'>
                <button className='btn btn-primary' style={{borderRadius:'20px'}} onClick={e.qnty<=1?()=>dispatch(incDelete(e.id)):()=>remove(e)}>-</button>
                <input type="text" className='text-center' value={e.qnty} style={{width:'90px',borderRadius:'50px',border:'none'}}></input>
                <button className='btn btn-success'style={{borderRadius:'20px'}} onClick={()=>send(e)} >+</button>
               </div>
            <button className='btn btn-danger my-2' style={{borderRadius:'20px'}} onClick={()=>dispatch(incDelete(e.id))}>Delete</button>
            <hr style={{width:'400px'}}/>
            </div>
          
            
            </>
            )
        })}
       
    </div>
    <div className='row'>
                <div className='col-md-6'>
                    <h1 className='text-center text-white'>Total Amount :{price.toFixed(2)}</h1>
                </div>
            </div>
    </div>
}

    
    </>
  )
}
