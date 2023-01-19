/* eslint-disable import/no-extraneous-dependencies */
import { Route, Routes } from 'react-router-dom';
import './styles/style.scss';
import Cartegory from './components/Category';
import Navbar from './components/Navbar';
import BookList from './components/BookItem';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/Category" element={<Cartegory />} />
      </Routes>
    </>
  );
}
