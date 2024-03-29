import React from 'react';
import './AddRentHeader.css';
import logo from '../../../../logos/Logo.png';

const AddRentHeader = () => {
    return (
        <header>
            <div className="row mb-5" >
                <div className="col-md-3" >
                    <img className="logo" src={logo} alt="" />
                </div>
                <div className="col-md-6" >
                    <h2>Add Rent House</h2>
                </div>
                <div className="col-md-3" >
                    <h3> Team-3 </h3>
                </div>
            </div>
        </header>
    );
};

export default AddRentHeader;