import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import CreateBook from './component/CreateBook';
import ShowbookList from './component/ShowBookList';
import ShowBookDetail from './component/ShowBookDetail';
import UpdateBookInfo from './component/UpdateBookInfo';

function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<ShowbookList />} />
        <Route path="/create-book" element={<CreateBook />} />
        <Route path="/edit-book/:id" element={<UpdateBookInfo />} />
        <Route path="/show-book" element={<ShowBookDetail />} />
        </Routes>
    </BrowserRouter>
  );
}
export default App
