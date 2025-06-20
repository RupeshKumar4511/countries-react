import { Outlet } from 'react-router-dom';
import Header from './components/Header.jsx';
import { ThemeContextProvider } from './context/ThemeContext.jsx';

function App() {

  return (
    <ThemeContextProvider >
      <Header />
      <Outlet/>
    </ThemeContextProvider >
  )
}




export default App;
