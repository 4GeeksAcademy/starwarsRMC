import React from 'react'
import rigoBaby from '../../img/rigo-baby.jpg'

const MasPlebada = () => {
    return (
        <div className='container-fluid card p-6' style={{ width: "90%" }}>
            <div className='container-fluid row' style={{height:"10%"}}>
                    <div className='col-6'>
                        <img src={rigoBaby}  alt="..." />
                    </div>
                    <div className='col-6'>
                        <h1>Nombre del personaje</h1>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                     </div>
            </div>
            <div className='container-fluid row justify-content-center'>
                <table className="table-reponsive table table-striped">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            </tr>
                        </tbody>
                </table>
             </div>
            
        </div>
    )
}

export default MasPlebada