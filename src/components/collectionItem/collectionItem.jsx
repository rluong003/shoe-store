/* eslint-disable react/prop-types */

import React from "react";

import "./collection-item.styles.scss";

import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

function CollectionItem({ item, addItem }) {
  const { name, price, imageUrl, id } = item;
  const itempath = "/shop/" + id;
  return (
    <div className="collection-item">
      <Link
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
        className="image"
        to={itempath}
      >
        
      </Link>

      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>

      <Button
        onClick={() => addItem(item)}
        className="custom-button"
        variant="contained"
      >
        ADD TO CART
      </Button>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
