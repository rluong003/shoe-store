import React from "react";
import {Route} from 'react-router-dom';

import ProductPage from "../../components/product-page/product-page.jsx";
import ItemPage from '../item-page/item-page.jsx';

import './shop_page.styles.scss';
function ShopPage({match}) {


  return (
    <div className='collection-preview'>
    <Route exact path ={`${match.path}`} component={ProductPage}     />
    <Route path = {`${match.path}/:itemId`} component={ItemPage} />
    </div>
  );
}


export default (ShopPage);
