import React from 'react';
import '../style/PaginationModel.css'; // Import your pagination styles here

const PaginationModel = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null; // Don't render pagination if there's only one page

  const handlePageChange = (page) => {
    if (page !== currentPage) { // Prevent unnecessary re-renders
      onPageChange(page);
    }
  };

  return (
    <div className="pagination" role="navigation" aria-label="Pagination">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => handlePageChange(index + 1)}
          className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
          aria-current={currentPage === index + 1 ? 'page' : undefined} 
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default PaginationModel;
