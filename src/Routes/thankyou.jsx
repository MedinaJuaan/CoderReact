import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Context } from '../context'
import '../index.css'


const ThankYou = () => {
    const {clear, orderId} = useContext(Context)
    const { id } = useParams()
    console.log({id});

    return (
            <div className='container py-5'>
                <div className="row justify-content-md-center">
                    <div className="col col-lg-8 text-center">
                       <h1 className='cart-title'>Gracias por tu compra</h1>
                       <p>Tu número de compra es: <b>{orderId}</b></p>
                       <Link to={"/"} onClick={clear} className="cart-btn">Volver al inicio</Link>
                    </div>
                </div>
            </div>
    )
}

export default ThankYou
