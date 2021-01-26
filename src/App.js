import './App.css';
import {useState} from 'react';
import MovieList from './Components/MovieList';
import Filter from './Components/Filter';
import Films  from './Films';

function App() {
  const [series, setseries] = useState(Films);
  const [rateValue, setRateValue] = useState(5);
  const [inputFilter, setInputFilter] = useState('');
  const filterHandler = (searchTerm) => {setInputFilter(searchTerm);}

  return (
    <div className="App">
      <Filter ratevalue={rateValue} setratevalue={setRateValue} searching={filterHandler}/>
      <MovieList serieslist={series.filter(el => el.rate <= rateValue && el.title.toLocaleLowerCase().includes(inputFilter.toLocaleLowerCase()))} setseries={setseries} />
    </div>
  );
}

export default App;