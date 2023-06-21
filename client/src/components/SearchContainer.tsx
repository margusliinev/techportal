import { useState } from 'react';

import { setFilters } from '../features/search/searchSlice';
import { useAppDispatch } from '../hooks';
import Wrapper from '../styles/styled_components/components/SearchContainer';

const initialState: { search: string; employment: string; location: string; sort: string } = {
    search: '',
    employment: 'all',
    location: 'all',
    sort: 'latest',
};

const SearchContainer = () => {
    const [values, setValues] = useState(initialState);
    const dispatch = useAppDispatch();

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, search: e.target.value });
    };

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(setFilters(values));
    };

    return (
        <Wrapper>
            <form className='form' onSubmit={handleSubmit}>
                <h4 className='form-title'>search form</h4>
                <div className='form-center'>
                    <div className='form-row'>
                        <input type='text' name='search' className='form-input' id='search' placeholder='Search' value={values.search} onChange={handleInput} />
                    </div>

                    <div className='form-row'>
                        <select name='employment' className='form-select' id='employment' value={values.employment} onChange={handleSelect}>
                            <option value='all'>All</option>
                            <option value='full-time'>Full-Time</option>
                            <option value='part-time'>Part-Time</option>
                            <option value='internship'>Internship</option>
                            <option value='contract'>Contract</option>
                        </select>
                    </div>

                    <div className='form-row'>
                        <select name='location' className='form-select' id='location' value={values.location} onChange={handleSelect}>
                            <option value='all'>All</option>
                            <option value='remote'>Remote</option>
                            <option value='part-remote'>Part-Remote</option>
                            <option value='tallinn'>tallinn</option>
                            <option value='tartu'>Tartu</option>
                            <option value='pärnu'>Pärnu</option>
                            <option value='narva'>Narva</option>
                        </select>
                    </div>

                    <div className='form-row'>
                        <select name='sort' className='form-select' id='sort' value={values.sort} onChange={handleSelect}>
                            <option value='latest'>Latest</option>
                            <option value='oldest'>Oldest</option>
                            <option value='salary(highest)'>Salary(highest)</option>
                            <option value='salary(lowest)'>Salary(lowest)</option>
                        </select>
                    </div>

                    <button type='submit' className='btn btn-find'>
                        Find Jobs
                    </button>

                    <button type='button' className='btn btn-clear'>
                        Clear Filters
                    </button>
                </div>
            </form>
        </Wrapper>
    );
};

export default SearchContainer;
