import React from 'react';
import './NewCollection.css'
import Items from '../Items/Items';
import newCollection_Data from './../Data/NewCollectionData';

const NewCollection = () => {
    return (
        <div className="newCollection-section pt-5 pb-5">
        <div className="container">
          <h2 className="text-center">New Collection</h2>
          <div className="line"></div>
          <div className="card-container">
            {newCollection_Data.map((item, i) => (
              <Items
                key={i}
                id={item.id}
                name={item.name}
                imgSrc={item.imgSrc}
                newPrice={item.newPrice}
                oldPrice={item.oldPrice}
              />
            ))}
          </div>
        </div>
      </div>
    );
};

export default NewCollection;