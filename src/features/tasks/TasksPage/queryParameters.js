import { useLocation, useHistory } from "react-router-dom/cjs/react-router-dom.min";


export const useQueryParameter = (searchQueryParamName) => {
    const location = useLocation();
    return (new URLSearchParams(location.search)).get(searchQueryParamName);
}

export const useReplaceQueryParameter = () => {
    const location = useLocation();
    const history = useHistory();

    const replaceQueryParameters = ({ key, value }) => {
        const searchParams = new URLSearchParams(location.search);

        if (value !== undefined) {
            searchParams.set(key, value);
        } else {
            searchParams.delete(key);
        }

        history.push(`${location.pathname}?${searchParams.toString()}`)
    };

    return replaceQueryParameters;
}