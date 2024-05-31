
import React from 'react'

import BuyBtn from '../BuyBtn';
import AddComment from '../../post/comment/AddComment';

const IDPage = async ({
  params,


}: { params: { id: String } }) => {

  const res = await fetch(`http://127.0.0.1:8000/api/book/index/${params.id}`)
  const book = await res.json()

  return (
    <>
    <div className="container">
      {book && (
        <div className="row">
          <div className="col-md-6">
            <img
              src={book.img}
              className="img-fluid"
              alt={book.name}
            />
          </div>
          <div className="col-md-6">
            <h5>{book.name}</h5>
            <p>{book.category}</p>
            <p>{book.desc}</p>
            <p>
              <strong className="text-cyan-400">{book.price}$</strong>
            </p>
            <BuyBtn />
          </div>
        </div>
      )}
     
    </div>
     <AddComment/>
    </>
  );
};

export default IDPage;
