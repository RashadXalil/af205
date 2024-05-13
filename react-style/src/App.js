import { useState } from 'react';
import './App.css'
import Card from './components/Card/Card';
import ButtonUsage from './components/Rus';
import DataTable from './components/Table/Table';
import CustomCarousel from './components/Carousel';
function App() {
    return (
        <div className="App">
            <p>salam</p>
            <Card image={"salam"} />
            <ButtonUsage />
            <DataTable />
            <CustomCarousel />
        </div>
    );
}

export default App;
