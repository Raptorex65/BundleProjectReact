import React from "react";
import BundleItems from "../components/Bundle/bundleItems" 
import SearchForm from '../components/Bundle/SearchForm'

const Home = () =>  {

  return (
    <main>
      <SearchForm />
      <BundleItems/>
    </main>
    )
}

export default Home;
