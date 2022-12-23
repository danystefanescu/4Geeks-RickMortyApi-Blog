import React from "react";
import "../../styles/about.css";

export const About = () => (
  <div className="text-center mt-5">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/375px-Rick_and_Morty.svg.png" />
    <figure>
      <hr />
      <img
        className="poster"
        src="https://es.web.img3.acsta.net/pictures/18/10/31/17/34/2348073.jpg"
      />
      <blockquote class="blockquote">
        <p>
          Rick Sánchez es la definición exacta de "científico loco". Es
          alcohólico, es un genio, es irresponsable y está loco. Rick acaba de
          mudarse a casa de su hija Beth y allí recuerda que tiene un nieto
          llamado Morty. Sin preguntar a nadie, decide que va a obligarle a que
          le acompañe a todo tipo de aventuras para que el chico se vuelva
          inteligente como él y no se convierta en un idiota como Jerry, padre
          de Morty y yerno de Rick. Así, Rick y Morty comienzan a vivir
          aventuras intergalácticas a pesar de que la familia no quiere que lo
          sigan haciendo. Poco a poco tienen que intentar encontrar un
          equilibrio entre su vida familiar y sus viajes a través del espacio y
          por distintas realidades paralelas, algo que no es fácil para el
          pequeño Morty que es incapaz de tener una vida normal al margen de su
          abuelo.
        </p>
        <figcaption class="blockquote-footer">
          Fuente <cite title="Source Title">Wikipedia ES</cite>
        </figcaption>
      </blockquote>
      
    </figure>
  </div>
);
