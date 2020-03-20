import {createSelector} from 'reselect';


const selectShop = state => state.shop;

export const selectShopItems = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectItemsForPreview = createSelector(
    [selectShopItems],
    collections => Object.keys(collections).map(key => collections[key])
);

export const selectItem = collectionUrlParam => createSelector (
    [selectShopItems],
    collections => collections[collectionUrlParam]
);