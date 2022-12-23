import React, { Component } from "react";
import "../../styles/footer.css";

export const Footer = () => (
	<div className="footer-dark container-fluid">
				<footer>
					<div className="container">
                		<div className="row">	
                    	<div className="col item social">
							<a href="https://twitter.com/DanyStefanescu"><i className="bi bi-twitter"></i></a>
							<a href="https://github.com/danystefanescu"><i className="bi bi-github"></i></a>
							<a href="https://www.linkedin.com/in/dany-stefanescu-034328257/"><i className="bi bi-linkedin"></i></a>
							
						</div>
                	</div>
                		<p className="copyright">Designed with <i className=" heart bi bi-heart-fill"></i> by : Dany Stefanescu©</p>
            		</div>
        		</footer>
    		</div>
);
