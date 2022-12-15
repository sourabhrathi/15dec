import React from 'react'
import {AiOutlineHome,AiOutlineLike,AiOutlineLogout} from 'react-icons/ai'
import {CgYoutube} from 'react-icons/cg'
import {MdOutlineSubscriptions,MdOutlineVideoLibrary,MdOutlineVideoSettings,MdOutlineWatchLater,MdExpandMore,MdOutlineLibraryBooks} from 'react-icons/md'
import {BiHistory} from 'react-icons/bi'
import {RiEnglishInput} from 'react-icons/ri'
import {BsBook} from 'react-icons/bs'
import {GiBlackBook} from 'react-icons/gi'
import {Link} from 'react-router-dom'
export default function Sidebar(props) {
  const toggle=props.toggle;
  return (
    <>
    <div className={toggle?'d-flex-sidebar':'d-flex-sidebar-1'}>
      {toggle?
   <div className=''>
  <div className='bg-color-2'>
<ul>
  <li><Link to=""><AiOutlineHome className='icon-4'/> Home</Link></li>
  <li><Link to=""><CgYoutube className='icon-4'/> Shorts</Link></li>
  <li><Link to=""><MdOutlineSubscriptions className='icon-4'/> Subscriptions</Link></li>
  <hr className='text-white'/>
  <li><Link to=""><MdOutlineVideoLibrary className='icon-4'/> Library</Link></li>
  <li><Link to=""><BiHistory className='icon-4'/> History</Link></li>
  <li><Link to=""><MdOutlineVideoSettings className='icon-4'/> Your videos</Link></li>
  <li><Link to=""><MdOutlineWatchLater className='icon-4'/> Watch later</Link></li>
  <li><Link to=""><AiOutlineLike className='icon-4'/> Liked videos</Link></li>
  <li><Link to=""><MdExpandMore className='icon-4'/> show more</Link></li>
  <hr className='text-white'/>
  <li> Subscription</li>
  <li><Link to=""><RiEnglishInput className='icon-4'/> Become English...</Link></li>
  <li><Link to=""><MdOutlineLibraryBooks className='icon-4'/> English 5days...</Link></li>
  <li><Link to=""><BsBook className='icon-4'/> Learn English wi....</Link></li>
  <li><Link to=""><GiBlackBook className='icon-4'/> Language Ocean</Link></li>
  <hr className='text-white'/>
  <li><Link to=""><AiOutlineLogout className='icon-4'/> Logout</Link></li>
</ul>

  </div>

</div>
:
<div className=''>
<div className='bg-color-2'>
<ul>
<li><Link to=""><AiOutlineHome className='icon-4'/></Link></li>
<li><Link to=""><CgYoutube className='icon-4'/></Link> </li>
<li><Link to=""><MdOutlineSubscriptions className='icon-4'/></Link> </li>
<hr className='text-white'/>
<li><Link to=""><MdOutlineVideoLibrary className='icon-4'/> </Link></li>
<li><Link to=""><BiHistory className='icon-4'/></Link></li>
<li><Link to=""><MdOutlineVideoSettings className='icon-4'/> </Link></li>
<li><Link to=""><MdOutlineWatchLater className='icon-4'/></Link></li>
<li><Link to=""><AiOutlineLike className='icon-4'/></Link></li>
<li><Link to=""><MdExpandMore className='icon-4'/> </Link></li>
<hr className='text-white'/>
<li></li>
<li><Link to=""><RiEnglishInput className='icon-4'/></Link></li>
<li><Link to=""><MdOutlineLibraryBooks className='icon-4'/></Link> </li>
<li><Link to=""><BsBook className='icon-4'/> </Link></li>
<li><Link to=""><GiBlackBook className='icon-4'/></Link> </li>
<hr className='text-white'/>
<li><Link to=""><AiOutlineLogout className='icon-4'/></Link></li>
</ul>

</div>

</div>
      }
    </div>
    
    </>
  )
}
