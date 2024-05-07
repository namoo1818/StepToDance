import { useLocation } from "react-router-dom";
import SearchBar from "../components/guide/SearchBar";
import SearchResultList from "../components/guide/SearchResultList";

function SearchResult() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("q");


  return (
    <div>
      <SearchBar params={searchQuery}/>
      <SearchResultList/>
    </div>
  );
}

export default SearchResult;