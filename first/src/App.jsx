import './App.css';

import HomePage from './component/HomePage';
import MyCard from './component/MyCard';
import MyCounter from './component/MyCounter';
import Languages from './component/Languages';
import { Route, Routes } from 'react-router-dom';
import NavBaar from './component/NavBaar';
import ErrorPage from './component/ErrorPage';
import About from './component/About';



function App() {
    return (
        <>
        <NavBaar/>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/Card" element={<MyCard />} />
                <Route path="/Counter" element={<MyCounter />} />
                <Route path="/lang" element={<Languages />} />
                <Route path="/About" element={<About />} />

           
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </>
    );
}

export default App;