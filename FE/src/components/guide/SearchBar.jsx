import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/guide/SearchBar.module.css"
import SearchIcon from "@mui/icons-material/Search";

function SearchBar(params){
    const [search, setSearch] = useState(params.params);
    const navigation = useNavigate();

    useEffect(()=> {
        setSearch(params.params);
    },[]);

    const onChange = (e) => {
        setSearch(e.target.value);
    }

    const onSubmit = () => {
        if(search===""){
            return;
        }
        navigation("/searchResult?q="+search, { state: { search } });
    };

    return (
        <div className={styles.container}>
             <input className={styles.searchBar} type="text" placeholder="노래 검색" value={search} onChange={onChange} onKeyDown={(e) => { if(e.key === "Enter") onSubmit(); }}/>
             <SearchIcon
          className={styles.searchIcon}
          onClick={onSubmit}
          style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)" }}
        />
        </div>
    )
}

export default SearchBar;