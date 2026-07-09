import { useContext, useRef, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./components/Home/Home";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard.jsx";

import { Routes, Route } from "react-router-dom";
import { TasksContext, TasksProvider } from "./components/TaskList/AllTasks";
import { ThemeProvider } from "./context/ThemeContext";
import Transition from "./components/ui/transition.jsx";
import firebase, { auth, db } from "./firebase.js";
import Register from "./components/Auth/Register.jsx";
import { ToastContainer, toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { doc, getDoc } from "firebase/firestore";
import { AuthProvider } from "./context/AuthContext.jsx";
import Book from "../../acad/src/components/Blog/Book.jsx";
import Leaderboards from "./components/Leaderboards/Leaderboards.jsx";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <TasksProvider>
          <>
            <Transition />
            <div>
              <Navbar />
              <Book />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                  path="/dashboard/:sessionId"
                  element={
                    <ProtectedRoute allowedRole="admin">
                      <AdminDashboard />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/app/:sessionId"
                  element={
                    <ProtectedRoute allowedRole="employee">
                      <EmployeeDashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/app/:sessionId/leaderboards"
                  element={
                    <ProtectedRoute allowedRole="employee">
                      <Leaderboards />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/dashboard/:sessionId/leaderboards"
                  element={
                    <ProtectedRoute allowedRole="admin">
                      <Leaderboards />
                    </ProtectedRoute>
                  }
                />
              </Routes>
              <Footer />
            </div>
          </>
          <ToastContainer style={{ zIndex: 9999 }} />
        </TasksProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
