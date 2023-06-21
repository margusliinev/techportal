import { useEffect, useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { setPage } from '../features/search/searchSlice';
import { useAppDispatch, useAppSelector } from '../hooks';
import Wrapper from '../styles/styled_components/components/PaginationContainer';

interface Props {
    numOfPages: number;
}

const PaginationContainer = ({ numOfPages }: Props) => {
    const { page } = useAppSelector((store) => store.search);
    const totalPages = Array.from({ length: numOfPages }, (_, index) => index + 1);
    const dispatch = useAppDispatch();
    const [range, setRange] = useState(window.innerWidth < 450 ? 3 : 5);

    const getPageNumbers = () => {
        const pages = [];

        let start = Math.max(1, page - Math.ceil(range / 2));
        let end = start + range - 1;

        if (end > totalPages.length) {
            end = totalPages.length;
            start = Math.max(1, end - range + 1);
        }

        for (let i = start; i <= end; i++) {
            pages.push(
                <button type='button' className={i === page ? 'pageBtn active' : 'pageBtn'} key={i} onClick={() => changePage(i)}>
                    {i}
                </button>
            );
        }

        if (end < totalPages.length) {
            pages.push(<button className='pageBtn'>...</button>);
        }
        return pages;
    };

    useEffect(() => {
        const handleResize = () => {
            setRange(window.innerWidth < 450 ? 3 : 5);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const changePage = (pageNumber: number) => {
        dispatch(setPage(pageNumber));
    };

    const nextPage = () => {
        let newPage = page + 1;
        if (newPage > numOfPages) {
            newPage = 1;
        }
        dispatch(setPage(newPage));
    };

    const prevPage = () => {
        let newPage = page - 1;
        if (newPage < 1) {
            newPage = numOfPages;
        }
        dispatch(setPage(newPage));
    };

    return (
        <Wrapper>
            <button className='prev-btn' onClick={prevPage}>
                <HiChevronLeft />
            </button>
            <div className='btn-container'>{getPageNumbers()}</div>
            <button className='next-btn' onClick={nextPage}>
                <HiChevronRight />
            </button>
        </Wrapper>
    );
};

export default PaginationContainer;
