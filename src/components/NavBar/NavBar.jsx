import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import logo from './CHEERS-logo.png'

const NavBar = ({ user, userProfile, handleLogout }) => {
  return (
    <>
    <div className={styles.navHolder}>
      {user ?
        <header className={styles.navbar}>
          <div className={styles.topHalf}>
          <Link to='/'>
          <img className={styles.logo} src={logo} alt="CHEERS" />
          </Link>
          </div>
          {/* <hr className={styles.solid}/> */}
            <p className={styles.welc}>Welcome, {user.name}!</p>
            <div className={styles.navLengths}>
            <li className={styles.navul}><Link to="/add-song">Add Tune</Link></li>
            <li className={styles.navul}><Link to="/boozy-tunes">Boozy Tunes</Link></li>
            <li className={styles.navul}><Link to="/profiles">Profiles</Link></li>
            <li className={styles.navul}><Link to="/my-page" state={userProfile}>My Page</Link></li>
            <li className={styles.navul}><Link to="" onClick={handleLogout}>Log Out</Link></li>
            </div>
        </header>
      :
        <nav className={styles.navbar}>
          <ul className={styles.navitems}>
            <button className={styles.navul}><Link to="/login">Log In</Link></button>
            <button className={styles.navul}><Link to="/signup">Sign Up</Link></button>
          </ul>
        </nav>
      }
      </div>
    </>
  )
}

export default NavBar
