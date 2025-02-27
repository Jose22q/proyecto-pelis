import React, { useContext } from 'react'
import { useEffect, useState } from "react";
import { Context } from '../../store/AppContext';
import CardPelicula from '../../components/CardPelicula';
import IMG1 from "../../components/bienvenida/bienvenida.jpg"
import "../home/style.css"

const Home = () => {
    const { peliculas } = useContext(Context)
    console.log(peliculas)

  return (
    <>
      <div>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={IMG1} class="d-block w-100 mb-lg-4" alt="Bienvenida"></img>
            </div>
          </div>
        </div>
      <div className='container'>
        <h1>Películas Populares</h1>
        <div className='d-flex flex-wrap justify-content-between'>
            {
            peliculas.map(pelicula => (
                <CardPelicula key={pelicula.id} {...pelicula} />
            ))
            }
        </div>    
       </div>
      </div>
    </>
  )
}

export default Home