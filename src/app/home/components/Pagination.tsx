import LeftArrow from "@/app/assets/icons/LeftArrow";
import RightArrow from "@/app/assets/icons/RightArrow";
import React from "react";

interface PaginationProps {
  previousPage: string | null;
  nextPage: string | null;
  page: number;
  total: number;
  size: number;
  onPageChange: (page: number) => void;
}

const currentPageClass = ` bg-primary text-white border-primary`;

const Pagination = ({
  previousPage,
  nextPage,
  page,
  total,
  size,
  onPageChange,
}: PaginationProps) => {
  const totalPages = Math.ceil(total / size);
  const startPage = Math.max(1, page - 1);
  const endPage = Math.min(totalPages, startPage + 2);

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  return (
    <div className="mt-6 md:mt-8">
      <ul className="flex justify-center gap-4">
        <li className="w-8 h-8 flex justify-center items-center border border-light_border rounded">
          <button
            disabled={!previousPage}
            onClick={() => handlePageChange(page - 1)}
            className="w-full h-full flex justify-center items-center"
          >
            <RightArrow active={Boolean(previousPage)} />
          </button>
        </li>
        {Array.from({ length: endPage - startPage + 1 }, (_, index) => {
          const pageIndex = startPage + index;
          return (
            <li
              key={pageIndex}
              className={`w-8 h-8 flex justify-center items-center border border-light_border rounded ${
                page === pageIndex ? currentPageClass : ""
              }`}
            >
              <button
                onClick={() => handlePageChange(pageIndex)}
                className="w-full h-full"
              >
                {pageIndex}
              </button>
            </li>
          );
        })}
        <li className="w-8 h-8 flex justify-center items-center border border-light_border rounded">
          <button
            disabled={!nextPage}
            onClick={() => handlePageChange(page + 1)}
            className="w-full h-full flex justify-center items-center"
          >
            <LeftArrow active={Boolean(nextPage)} />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
