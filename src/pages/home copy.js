import React, { useState } from 'react'
//import BundleItems from "../components/bundle/bundleItems"; 
import BundleItems from "../components/bundle/bundleItems";
import SearchForm from '../components/bundle/searchform';
//import Categories from '../components/categories' <Categories/>
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useItemsContext } from '../context/items-context';
//import Categories from '../components/Categories'
import Categories from '../components/cat'
//import CenteredGrid from '../components/bundle/bundleitems_mu';
import SideBar from '../components/bundle/searchformnew'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    
  },
}));

  const categoryList = [
    "All",
    "Computers and Related Parts",
    "Electronics",
    "Household appliances",
    "Furniture",
    "Clothing and Shoes",
    "Kitchenware",
    "Bycyles and Parts",
    "Office Products",
    "Sporting Goods",
    "Games and Toys",
    "Art and Collectibles",
    "Books CDs and Videos",
    "Auto Parts",
  ];

export default function Home() {
  const classes = useStyles();
  const { items, query, setQuery } = useItemsContext();
  console.log(items)
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(categoryList);

  const filterItems = (category) => {
    if (category === "All") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.Category === category);
    setMenuItems(newItems);
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <Categories categories={categories} filterItems={filterItems} />
        </Grid>
        <Grid item xs={10}>
          <SearchForm query={query} setQuery={setQuery} />
          <BundleItems menuItems={menuItems} items={items} />
        </Grid>
      </Grid>
    </div>
  );
}