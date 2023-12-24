import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPagination } from '../../redux/actions';

const Pagination = () => {
  const currentPage = useSelector((state) => state.pagination);
  const dispatch = useDispatch();

  const handlePageChange = (newPage) => {
    dispatch(setPagination(newPage));
  };

  const totalPages = 5; // Número total de páginas (puedes ajustarlo según tu necesidad)

  const renderPageButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={i === currentPage ? 'active' : ''}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  return <div>{renderPageButtons()}</div>;
};

export default Pagination;
