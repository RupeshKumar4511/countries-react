import  './Header.css';
import { useTheme } from '../Hooks/useTheme';

const Header = () => {
const [isDark,setDark] = useTheme();


  return (
    <header className={`header-content-container ${isDark?'dark':''}`}>
      <div className='header-content'>
        <h2>Where in the World ?  </h2>
      <p className='mode' onClick={()=>{ setDark(!isDark);
        localStorage.setItem('isDark',!isDark)
      }}>
          <i className={`fa-solid ${isDark?'fa-sun':'fa-moon'}`}></i><span>{isDark?'Light':'Dark'} Mode</span></p>
      </div>
    </header>
  )
}

export default Header
