import { useState } from 'react';
import type { ReactNode } from 'react';

interface PaginatorProps<T> {
  items: T[];
  itemsPerPage?: number;
  children: (args: {
    currentItems: T[];
    currentPage: number;
    totalPages: number;
    goToPage: (page: number) => void;
    next: () => void;
    prev: () => void;
  }) => ReactNode;
}

export const Paginator = <T,>({ items, itemsPerPage = 3, children }: PaginatorProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentItems = items.slice(start, end);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const next = () => goToPage(currentPage + 1);
  const prev = () => goToPage(currentPage - 1);

  return <>{children({ currentItems, currentPage, totalPages, goToPage, next, prev })}</>;
};
