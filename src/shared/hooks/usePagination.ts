import { useState, useMemo } from 'react';

export const usePagination = <T>(items: T[] = [], itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  }, [items, currentPage, itemsPerPage]);

  return {
    totalPages,
    currentPage,
    setCurrentPage,
    currentItems,
  };
};
