import style from './SearchBar.module.scss'


const SearchBar = () => {
    return (
        <div className={style.Search}>
            <h1>Book Search</h1>
            <div>
            <input type="text"></input>
            <button></button>

            </div>
        </div>
    );
};

export default SearchBar;