import Input from "../../Input/styled";
import { Wrapper } from "./styled";
import searchQueryParamName from "../searchQueryParamName";
import { useQueryParameter, useReplaceQueryParameter } from "../queryParameters";

export const Search = () => {
    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameters = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameters({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : undefined,
        });
    };

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

export default Search;