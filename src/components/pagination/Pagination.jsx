import React from "react";

const Pagination = ({ postsPerPage, totalPosts }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        {pageNumbers.map((num) => (
          <li
            key={num}
            style={{
              listStyleType: "none",
              background: "white",
              color: "black",
              padding: "10px",
              borderRadius: "100%",
              margin: "2rem 1rem",
            }}
          >
            <a href="!#" style={{ color: "black", textDecoration: "none" }}>
              {num}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
