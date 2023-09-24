import { useLocation } from "react-router-dom/cjs/react-router-dom.min";


export const useQueryParameter = (searchQueryParamName) => {
    const location = useLocation();
    return (new URLSearchParams(location.search)).get(searchQueryParamName);
}