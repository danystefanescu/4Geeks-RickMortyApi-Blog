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
          Rick Sanchez is the exact definition of "mad scientist." He's an
          alcoholic, he's a genius, he's irresponsible, and he's crazy. Rick has
          just moved into his daughter Beth's house and there he remembers that
          he has a grandson named Morty. Without asking anyone, he decides that
          he is going to force him to accompany him on all kinds of adventures
          so that the boy becomes intelligent like him and does not become an
          idiot like Jerry, Morty's father and Rick's son-in-law. Thus, Rick and
          Morty begin to live intergalactic adventures despite the fact that the
          family does not want them to continue doing so. Little by little they
          have to try to find a balance between their family life and their
          trips through space and through different parallel realities,
          something that is not easy for little Morty who is unable to have a
          normal life apart from his grandfather.
        </p>
        <figcaption class="blockquote-footer">
          Source <cite title="Source Title">Wikipedia US</cite>
        </figcaption>
      </blockquote>
    </figure>
  </div>
);
