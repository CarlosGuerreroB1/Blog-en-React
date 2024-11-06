import { Link } from 'react-router-dom'
import './TopBar.css'

function TopBar() {
  return (
    <div className='top'>
      <div className='topLeft'>
        <i className="topIcon fa-brands fa-instagram"></i>
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-tiktok"></i>
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>
            <Link to="/" className="link">HOME</Link></li>
          <li className='topListItem'>
            <Link to="/post/" className='link'>ABOUT</Link></li>
          {/*<li className='topListItem'>CONTACT</li>*/}
          <li className='topListItem'><Link to="/write" className="link">WRITE</Link></li>
        </ul>
      </div>
      <div className='topRight'>
        <ul className='topList'>
          <li className='topListItem'> <Link to="/login" className="link">LOGIN</Link></li>
          <li className='topListItem'> <Link to="/register" className="link">REGISTER</Link></li>
        </ul>
        <img
          className='topImg'
          src="https://e1.pxfuel.com/desktop-wallpaper/988/528/desktop-wallpaper-kylian-mbappe-world-cup-trophy.jpg" alt="" />
        {/*<i className="topSearchIcon fa-solid fa-magnifying-glass"></i>*/}
      </div>
    </div>
  )
}

export default TopBar