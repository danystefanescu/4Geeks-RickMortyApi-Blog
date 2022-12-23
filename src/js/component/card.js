import React, { Component } from "react";
import "/workspace/react-hello-webapp/src/styles/card.css";

export const Card = () => (
  <>
    <div class="card me-2" style={{ width: "18rem" }}>
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-customized go-to-button">
          View details
        </a>
        <a href="#" class="btn btn-customized mx-3">
          <i class="bi bi-suit-heart-fill like-button" />
        </a>
      </div>
    </div>
  </>
);



		
					