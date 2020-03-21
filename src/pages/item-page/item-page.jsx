/* eslint-disable react/prop-types */
import React from "react";

import { connect } from "react-redux";

import { selectItem } from "../../redux/shop/shop.selectors";
import Button from "@material-ui/core/Button";

import { addItem } from "../../redux/cart/cart.actions";
import "./item-page.styles.scss";
function ItemPage({ item, addItem }) {
  console.log(item);
  return (
    <div className='product'>
      
      <img alt="product image" src={item.imageUrl} />
      <div className="product-options">
      <h2> {item.name} </h2>
      <Button
        onClick={() => addItem(item)}
        className="custom-button"
        variant="contained"
      >
        ADD TO CART
      </Button>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  item: selectItem(ownProps.match.params.itemId)(state)
});



const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
  });

export default connect(mapStateToProps, mapDispatchToProps)(ItemPage);
