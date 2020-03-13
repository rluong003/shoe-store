import React, { useState } from "react";

import SHOP_DATA from "./shop.data.js";

import CollectionItem from "../../components/collectionItem/collectionItem.jsx";

import './shop_page.styles.scss';
function ShopPage() {
  const [collection, setCollections] = useState({ shoes: SHOP_DATA });

  return (
    <div className='collection-preview'>
      <h1 className='title'> {collection.shoes.title} </h1>
      <div className='preview'>
        {collection.shoes.items.map( item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default ShopPage;
