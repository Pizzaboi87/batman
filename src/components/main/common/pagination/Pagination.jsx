import React from 'react';
import { Link } from 'react-router-dom';
import './pagination.css';

const Pagination = ({ currentPage, totalPages, basePath }) => {
    const getPageNumbers = () => {
        const pageNumbers = [];
        const maxPagesToShow = 5;
        let startPage, endPage;

        if (totalPages <= maxPagesToShow) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (currentPage <= Math.ceil(maxPagesToShow / 2)) {
                startPage = 1;
                endPage = maxPagesToShow;
            } else if (currentPage + Math.floor(maxPagesToShow / 2) >= totalPages) {
                startPage = totalPages - maxPagesToShow + 1;
                endPage = totalPages;
            } else {
                startPage = currentPage - Math.floor(maxPagesToShow / 2);
                endPage = currentPage + Math.floor(maxPagesToShow / 2);
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }

        return pageNumbers;
    };

    const pageNumbers = getPageNumbers();

    return (
        <div className="pagination">
            {currentPage > 1 && (
                <Link to={`${basePath}${currentPage - 1}`} className="page-link">
                    Previous
                </Link>
            )}
            {pageNumbers.map((page) => (
                <Link
                    key={page}
                    to={`${basePath}${page}`}
                    className={`page-link ${currentPage === page ? 'active' : ''}`}
                >
                    {page}
                </Link>
            ))}
            {currentPage < totalPages && (
                <Link to={`${basePath}${currentPage + 1}`} className="page-link">
                    Next
                </Link>
            )}
        </div>
    );
};

export default Pagination;