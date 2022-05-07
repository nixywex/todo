import styles from "./Serch.module.scss";

const Search = ({searchValue, setSearchValue}) => {
    return (
        <div className={styles.search}>
            <p className={styles.icon}>🔍</p>
            <input
                name='search'
                type='search'
                className={styles.input}
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                placeholder={"Поиск по задачам..."}
            />
        </div>
    )
}

export default Search;