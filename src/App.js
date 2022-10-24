import SearchBar from "./SearchBar/SearchBar";
import style from './App.module.scss';


function App() {
  return (
    <div className={style.Main}>
      <SearchBar/>
      <div className={style.Content}>
        a
      </div>
      <div>Footer</div>
    </div>
  );
}

export default App;
