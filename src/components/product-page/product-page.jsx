import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";



import CollectionItem from "../../components/collectionItem/collectionItem.jsx";

import { selectItemsForPreview } from "../../redux/shop/shop.selectors";
import "./product-page.styles.scss";


function ProductPage({ collections }) {
  return (
    <div className="preview">
      {collections.map(item => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectItemsForPreview
});

export default connect(mapStateToProps)(ProductPage);
