import React, { useState } from 'react'
import BundleItems from "../components/bundle/bundleItems"; 
import SearchForm from '../components/bundle/searchform';
import Categories from '../components/categories'
import Grid from '@material-ui/core/Grid';
import './home.css'
import { makeStyles } from '@material-ui/core/styles';

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

export default function Home() {
  const classes = useStyles();
 

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={2}>
            <Categories/>
        </Grid>
        <Grid item xs={10}>
            <SearchForm />
            <BundleItems/>
        </Grid>
      </Grid>
    </div>
  );
}






