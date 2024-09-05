
import LOGO from '../pastille-methode.svg'
import AccountCircle from './AccountCircle'

const Header = () => {
  return (
    <div className="header">
        <div className="logo">
        <img alt='logo' className='logo-image' src={LOGO}/>
        </div>
        <div className="user-icon">
        <AccountCircle/>
        </div>

    </div>
  )
}

export default Header
