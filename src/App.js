import { useState, useEffect } from 'react';
import data from './data';
import Articolo from './Articolo';

const getFromLocalStorage = () => {
  if (localStorage.getItem('Theme')) {
    return localStorage.getItem('Theme');
  }
};
function App() {
  // Set default theme from localStorage
  const [theme, setTheme] = useState(getFromLocalStorage() || 'light-mode');
  // Function change theme
  const changeTheme = () => {
    if (theme === 'light-mode') {
      setTheme('dark-mode');
    } else {
      setTheme('light-mode');
    }
  };
  //useEffect call function when theme status is updated
  useEffect(() => {
    document.documentElement.className = theme;
    //save in local storage
    localStorage.setItem('Theme', theme);
  }, [theme]);

  return (
    <section className='section-center '>
      <div className='container '>
        <button className='btn' onClick={changeTheme}>
          Cambia
        </button>
        <section className='article-section '>
          {data.map((el) => (
            <Articolo key={el.id} {...el} />
          ))}
        </section>
      </div>
    </section>
  );
}

export default App;
