// Pagination.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPagination } from '../../redux/actions';

const Pagination = () => {
  const dispatch = useDispatch();
  const { currentPage } = useSelector((state) => state.pagination);

  const handlePageChange = (newPage) => {
    dispatch(setPagination(newPage));
    // Lógica para cargar los elementos de la nueva página
  };

  return (
    <div>
      <button onClick={() => handlePageChange(1)}>1</button>
      <button onClick={() => handlePageChange(2)}>2</button>
      {/* ... Otros botones de página ... */}
    </div>
  );
};

export default Pagination;
