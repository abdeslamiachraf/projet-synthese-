import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AjouterVoiture } from './Action';
import ListeCon from './ListeCon';
import AjouterCars from './AjouterCars';
import './Style.css';
import ModifierVoiture from './ModifierVoiture';
import Login from './Login';
import Details from './Details';
import Contact from './Contact';
import About from './About';
import ContactVoiture from './ContactVoiture';
import Profile from './client/Profile';
import AjouterClient from './client/AjouterClient';
import CompteClient from './client/Compte';


export default function AppControle() {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('http://localhost:3001/voiture')
            .then(res => res.json())
            .then(res => setData(res))
    }, []);

    useEffect(() => {
        dispatch(AjouterVoiture(data));
    }, [data]);

    return (
        <Router>
            <Routes>
                <Route path="/listevoiture" element={<ListeCon />} />
                <Route path="/ajouter" element={<AjouterCars />} />
                <Route path="/modifier/:id" element={<ModifierVoiture />} />
                <Route path="/details/:id" element={<Details />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/contactvoiture/:id" element={<ContactVoiture />} />
                <Route path="/" element={<Login />} />
                <Route path="/user/profile/:id" element={<Profile />} />
                <Route path="/user/ajouter/:id" element={<AjouterClient />} />
                <Route path="/user/voiture/:id" element={<CompteClient />} />



            </Routes>
        </Router>
    );
}
