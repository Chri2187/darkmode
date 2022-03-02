import { useState, useEffect } from 'react';
import data from './data';
import Articolo from './Articolo';

//Funzione che se presente 'Theme' nel localStorage
// returna il suo valore o di default return 'light-mode'

function App() {
  // Set default theme
  const [theme, setTheme] = useState('light-mode');
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
