import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookList from './components/BookItem';
import CreateBook from './components/CreateBook';
import Categories from './components/Categories';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList />}>  </Route>
        <Route path="/create" element={<CreateBook />}> </Route>
        <Route path="/Category" element={<Categories />}> </Route>
      </Routes>
    </div>
  );
}

export default App;
