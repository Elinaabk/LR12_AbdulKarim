import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from '../src/pages/Portfolio.jsx';
import FAQ from '../src/pages/FAQ.jsx';
import Contacts from '../src/pages/Contacts.jsx';
import Make_Request from '../src/pages/Make_Request.jsx';
import Calculation from '../src/pages/Calculation.jsx';
import Nav from '../src/layout/Nav.jsx';
import Services from '../src/pages/Services.jsx';
import Products from '../src/pages/Products.jsx';
import About_us from '../src/pages/About_us.jsx';

function App() {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/Services" element={<Services/>}/>
                <Route path="/Products" element={<Products/>}/>
                <Route path="/About_us" element={<About_us/>}/>
                <Route path="/Portfolio" element={<Portfolio/>}/>
                <Route path="/FAQ" element={<FAQ/>}/>
                <Route path="/Contacts" element={<Contacts/>}/>
                <Route path="/Make_Request" element={<Make_Request/>}/>
                <Route path="/Calculation" element={<Calculation/>}/>
            </Routes>
        </Router>
    );
}

export default App;