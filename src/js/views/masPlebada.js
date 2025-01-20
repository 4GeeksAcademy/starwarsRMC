import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../store/appContext'
import { Link } from 'react-router-dom'


const MasPlebada = () => {
    const { store, actions } = useContext(Context)
    console.log("regreso de la info", store);


    return (
        <div className='container-fluid card p-6' style={{ width: "90%" }} >
            <div className='container-fluid row' style={{ height: "10%" }} >
                <div className='col-6'>
                    <img src={`https://starwars-visualguide.com//assets/img/characters/${store.currentData.result.uid}.jpg`} className="card-img-top" alt="Caida de Origen" style={{ width: "100%" }} />

                </div>
                <div className='col-6'>
                <Link to="/">
                        <button className="btn btn-danger" >inicio</button>
                    </Link>
                    <h1>{store.currentData.result.properties.name}</h1>
                    <h1>{store.currentData.result.description}</h1>
                    

                </div>
                <div className='container-fluid row justify-content-center'>
                    <table className="table-reponsive table table-striped">
                        <thead>
                            <tr className='text-center'>
                                <th scope="col">Año de Nacimiento</th>
                                <th scope="col">Color de Ojos</th>
                                <th scope="col">Género</th>
                                <th scope="col">Altura</th>
                                <th scope="col">Color de Cabello</th>
                                <th scope="col">Masa</th>
                                <th scope="col">Color de Piel</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='text-center'>
                                <td>{store.currentData.result.properties.birth_year}</td>
                                <td>{store.currentData.result.properties.eye_color}</td>
                                <td>{store.currentData.result.properties.gender}</td>
                                <td>{store.currentData.result.properties.height}</td>
                                <td>{store.currentData.result.properties.hair_color}</td>
                                <td>{store.currentData.result.properties.mass}</td>
                                <td>{store.currentData.result.properties.skin_color}</td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};


export default MasPlebada