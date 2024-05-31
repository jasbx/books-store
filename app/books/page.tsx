import React from "react";
import Link from "next/link";
import SearchbooksInput from "./SearchbooksInput";
import Pagination from "./pagination";

const Books = async () => {

  const res = await fetch(
    "http://127.0.0.1:8000/api/book/",
    { cache: 'force-cache' }
  );
  const books = await res.json();

  return (
    <>
      <SearchbooksInput />
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {books.slice(0, 6).map((book: any) => (
            <div key={book.id} className="col">
              <div className="card">
                <img
                  src={book.img}
                  className="card-img-top"
                  alt={book.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{book.name}</h5>
                  <p className="card-text">{book.category}</p>
                  <p className="card-text line-clamp-1">{book.desc}</p>
                  <p className="card-text">
                    <strong className="text-cyan-400">{book.price}$</strong>
                  </p>
                  <div className="d-grid gap-2">
                    <Link
                      href={`book/${book.id}`}
                      className="btn btn-outline-dark"
                      type="button"
                    >
                      More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Pagination />
    </>
  );
};

export default Books;
