import React from "react";

import { connect } from "react-redux";

import { selectItem } from "../../redux/shop/shop.selectors";

import "./item-page.styles.scss";
function ItemPage({ item }) {
  console.log(item);
  return (
    <div className='product'>
      
      <img src={item.imageUrl} />
      <div className="product-options">
      <h2> {item.name} </h2>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  item: selectItem(ownProps.match.params.itemId)(state)
});

export default connect(mapStateToProps)(ItemPage);
