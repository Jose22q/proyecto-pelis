import React from 'react'
import Peliculas from '../../pages/Peliculas/Peliculas'
import "./CardPelicula.css"

const CardPelicula = (props) => {
  return (
    <div>
        <div class="card mb-3" style={{width: "14rem"}}>
          <img src={props.poster} class="card-img-top" alt="Poster" />
            <div class="card-body">
               <h5 class="card-title" style={{fontSize: "large"}}>{props.title}</h5>
                <a href="#" class="bi bi-heart link-dark"></a> <a style={{fontSize: "small"}}>Calificación: {props.vote_average}</a>
            </div>
        </div>
    </div>
  )
}

export default CardPelicula