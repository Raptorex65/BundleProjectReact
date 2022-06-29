import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BundleItems from "../components/bundle/bundleItems";
import SearchForm from '../components/bundle/searchform';
import { useItemsContext } from '../context/items-context';
import MultiSelect from "../components/categories";

export default function Home() {
  const { items, query, setQuery } = useItemsContext();
  console.log(items)
  const [menuItems, setMenuItems] = useState(items);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <MultiSelect items={items} setMenuItems={setMenuItems} />
        </Grid>
        <Grid item xs={10}>
          <SearchForm query={query} setQuery={setQuery} />
          <BundleItems menuItems={menuItems} items={items} />
        </Grid>
      </Grid>
    </Box>
  );
}