import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import TodoList from './components/TodoList';
import Login from './components/Login';

function App() {
  const data = window.localStorage.getItem('user')
  const output = JSON.parse(data);
  console.log(output?.role)
  const userRole = output?.role

  return (
    <BrowserRouter>
      {userRole === 'Admin' ? (
        <Navigate to="/admin-home" />
      ) : (
        <Navigate to="/" />
      )}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin-home" element={<TodoList />} />
        <Route path="/controller-home" element={<TodoList />} />
        <Route path="/Hcoach-home" element={<TodoList />} />
        <Route path="/coach-home" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
