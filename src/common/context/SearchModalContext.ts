import { ChangeEvent, createContext, useContext, useState } from 'react';

const SearchModalContext = createContext('' || undefined);
const SearchModalUpdateContext = createContext('' || undefined);

export const useSearchModal = (): void => {
    return useContext(SearchModalContext);
};

export const useSearchModalUpdate = (): void => {
    return useContext(SearchModalUpdateContext);
};

export const SearchModalProvider = ({ children }: any) => {
    const [searchValue, setSearchValue] = useState<string>('');

    const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value);

    return (
        <SearchModalContext.Provider value={searchValue}>
            <SearchModalUpdateContext.Provider value={handleSearchInput}>{children}</SearchModalUpdateContext.Provider>
        </SearchModalContext.Provider>
    );
};
