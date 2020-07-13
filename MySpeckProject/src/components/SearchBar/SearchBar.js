import React from 'react';
import { SearchBarWrapper } from './SearchBarStyle';
import { FormInput } from '../Form/FormStyles';

const SearchBar = (props) => {
    return (
        <SearchBarWrapper>
            <FormInput
                type="text"
                placeholder={props.placeholder}
                disabled={props.disabled}
                onChange={(event) => props.onValueChange(event.target.value)} />
        </SearchBarWrapper>
    );
}

export default SearchBar;