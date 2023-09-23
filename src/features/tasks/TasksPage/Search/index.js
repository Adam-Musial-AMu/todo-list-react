import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import Input from "../../Input/styled";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { Wrapper } from "./styled";
import searchQueryParamName from "../searchQueryParamName";
import { useQueryParameter } from "../queryParameters";

export default () => {
    const location = useLocation();
    const history = useHistory();
    const query = useQueryParameter(searchQueryParamName);

    const onInputChange = ({ target }) => {
        const searchParams = (new URLSearchParams(location.search));

        if (target.value.trim() === "") {
            searchParams.delete(searchQueryParamName);
        } else {
            searchParams.set(searchQueryParamName, target.value);
        }
        history.push(`${location.pathname}?${searchParams.toString()}`);
    }

    return (
        <Wrapper>
            <Input
                placeholder="Filtruj zadania"
                value={query || ""}
                onChange={onInputChange}
            />
        </Wrapper>
    );
};
