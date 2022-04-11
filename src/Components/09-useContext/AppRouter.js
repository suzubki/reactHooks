import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';
import { ErrorComponent } from './ErrorComponent';
import { NavBar } from './NavBar';

export const AppRouter = () => {
    return (
        <div>
        <BrowserRouter>
            <NavBar />
            <Routes>    
                <Route path="/" element={<HomeScreen />} />

                <Route path="/about" element={<AboutScreen />} />
                <Route path="/login" element={<LoginScreen />} />
                <Route path='*' element={<ErrorComponent />} />
            </Routes>
        </BrowserRouter>
        </div>
  )
}
