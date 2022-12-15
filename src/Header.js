import React from 'react'
import {AiOutlineBars} from 'react-icons/ai'
import logo from '../src/images/youtube.png'
import {AiOutlineSearch} from 'react-icons/ai'
import {MdOutlineSettingsVoice,MdNotificationsNone} from 'react-icons/md'
import {BiVideoPlus} from 'react-icons/bi'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Header(props) {
  const getdata=useSelector((state)=>state.changeTheNumber.carts)
    const toggle=props.toggle;
    const handletoggle=props.handletoggle;
  return (
    <>
    <div className={toggle?'d-flex-header':'d-flex-header-1'}>
    <div className='row'>
    <div className='d-flex align-items-center justify-content-between coloe-black '>

        <div className='col-md-1.5 d-flex align-items-center justify-content-between '>
              <AiOutlineBars className='icon' onClick={()=>{handletoggle()}}/>
               <img src={logo} className="img-1" alt='images'></img>

        </div>

        <div className='col-md-6 d-flex align-items-center justify-content-center'>
            <input className='form-control form-lg'  placeholder='search'></input>
            <AiOutlineSearch className='icon-2'/>
            <MdOutlineSettingsVoice className='icon-1'/>
        </div>

        <div className='d-flex align-items-center justify-content-between class-form'>
           <BiVideoPlus className='icon-1 mx-1'/>
           <Link to="/cart"><MdNotificationsNone className='icon-1 mx-2'/></Link>
           <input type='text' className='inpu-center '  value={getdata.length}></input>
           <h4 className='mx-2'>S</h4>

        </div>

    </div>
    </div>
    
    </div>
    </>
  )
}
