import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/HomePage";
import TravelListings from "./pages/TravelListings";
import Account from "./pages/Account";
import Auth from "./pages/Auth";
import Blog from "./pages/Blog";
import Feedback from "./pages/FeedbackForm";
import Search from "./pages/Search";
import DestinationPage from "./pages/DestinationPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<TravelListings />} />
         <Route path="/destination/:id" element={<DestinationPage />} />
        <Route path="/account" element={<Account />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
