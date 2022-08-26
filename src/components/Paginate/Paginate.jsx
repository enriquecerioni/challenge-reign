import React from "react";
import "./paginate.css";

export default function Paginate({ commentsPerPage, all, paginate }) {
  const pageNumbers = [];
  for (let i = 0; i < Math.ceil(all / commentsPerPage); i++) {
    pageNumbers.push(i + 1);
  }
  return (
    <nav>
      <ul className="ulPaginate">
        {pageNumbers &&
          pageNumbers.map((number, i) => {
            return (
              <li key={i}>
                <button className="button" onClick={() => paginate(number)}>
                  {number}
                </button>
              </li>
            );
          })}
      </ul>
    </nav>
  );
}
