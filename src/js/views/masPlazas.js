import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../store/appContext'

const MasPlazas = () => {
    const { store, actions } = useContext(Context)


    return (
        <div className='container-fluid card p-6' style={{ width: "90%" }} >

            <div className='container-fluid row' style={{ height: "10%" }} >
                <div className='col-6'>
                    <img src={`https://starwars-visualguide.com//assets/img/planets/${store.currentDatas.result.uid}.jpg`} className="card-img-top" alt="Caida de Origen" style={{ width: "100%" }} />

                </div>
                <div className='col-6'>
                    <Link to="/">
                        <button className="btn btn-danger" >inicio</button>
                    </Link>
                    <h1>{store.currentDatas.result.properties.name}</h1>


                </div>
                <div className='container-fluid row justify-content-center'>
                    <table className="table-fluid table table-striped">
                        <thead>
                            <tr className='text-center'>
                                <th scope="col">Clima</th>
                                <th scope="col">Diámetro</th>
                                <th scope="col">Gravedad</th>
                                <th scope="col">Periodo Orbital</th>
                                <th scope="col">Población</th>
                                <th scope="col">Superficie con Agua</th>
                                <th scope="col">Terreno</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='text-center'>
                                <td>{store.currentDatas.result.properties.climate}</td>
                                <td>{store.currentDatas.result.properties.diameter}</td>
                                <td>{store.currentDatas.result.properties.gravity}</td>
                                <td>{store.currentDatas.result.properties.orbital_period}</td>
                                <td>{store.currentDatas.result.properties.population}</td>
                                <td>{store.currentDatas.result.properties.surface_water}</td>
                                <td>{store.currentDatas.result.properties.terrain}</td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};


export default MasPlazas