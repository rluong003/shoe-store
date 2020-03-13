/* eslint-disable react/prop-types */

import React from 'react';

import './collection-item.styles.scss';

import Button from '@material-ui/core/Button';

import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions';

function CollectionItem ( { item, addItem }) {

  const { name,price,imageUrl } = item;
  return (
    <div className='collection-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>${price}</span>
    </div>
    <Button onClick={() => addItem(item)} className="custom-button" variant="contained" >
        ADD TO CART
      </Button>
  </div>
  );
  

  }


  const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
  });

export default connect(null, mapDispatchToProps)(CollectionItem);