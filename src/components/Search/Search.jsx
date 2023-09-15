import { useState } from 'react';
import styles from "./Search.module.scss";

const Search = (prop) => {

    let { setSearch, setPageNumber } = prop;

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const onSubmit = (event) => {
    event.preventDefault();

    setInputValue('');
    setPageNumber(1);
    setSearch(inputValue);
    };

  return (
    <form
        onSubmit={onSubmit}
        className={`${styles.search} d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5`}
    >
        <input
            onChange={onInputChange}
            placeholder="Buscar: escribe y da enter, Reset: campo vacío y da enter"
            className={styles.input}
            value={inputValue}
            type="text"
        />
    </form>
  )
}

export default Search