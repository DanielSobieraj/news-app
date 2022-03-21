import React, { ChangeEvent, FC, useState } from 'react';
import { Button, FormControl, Modal } from 'react-bootstrap';
import { useSearchModalUpdate } from '../../common/context/SearchModalContext';
import { SearchModalProps } from './SearchModalProps';

const SearchModal: FC<SearchModalProps> = ({ show, onHide }) => {
    const [searchValue, setSearchValue] = useState<string>('');

    const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
        useSearchModalUpdate();
    };

    return (
        <Modal show={show} onHide={onHide} size="sm" aria-labelledby="contained-modal-title-vcenter" centered>
            <FormControl placeholder="Search for articles" value={searchValue} onInput={handleSearchInput} />
            <Button onClick={onHide} type="submit">
                Save
            </Button>
        </Modal>
    );
};

export default SearchModal;
