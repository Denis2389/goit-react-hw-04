import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';


const SearchBar = ({ onSubmit }) => {
    const [query, setQuery] = useState('')

    const handleInputChange = (e) => {
        setQuery(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (query.trim() === '') {
            toast.error('Enter text to search!')
            return;
        }

        onSubmit(query);
        setQuery('')
    }

    return (
        <header>
            <Toaster />
            <form onSubmit={handleSubmit}>
                <input type="text" value={query} onChange={handleInputChange} autoComplete='off' autoFocus placeholder='Search images..'/>
                <button type='submit'>Search</button>
            </form>
        </header>
    )
}

export default SearchBar;