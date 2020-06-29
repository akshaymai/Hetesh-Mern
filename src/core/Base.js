import React from 'react';
const Base = ({
    title="My Title",
    description="Mydescription",
    children,
    className="bg-dark text-white p-4"
}) => (
    <div>

        <div className="container-fluid">

            <div className="jumbotron bg-dark text-white text-center">

<h2 className="display-4">{title}</h2>
<p className="lead">{description}</p>
            </div>    
<div className={className}>{children}</div>
         </div>   
         
         <footer className="footer bg-dark mt-auto py-3">
             <div className="container-fluid bg-success txt-white text-center">
          
<h2>my name is akshay maity.i am from kolkata</h2>
             <button className="btn btn-warning btn-sm">Contacct Us</button>

              </div>   
        <div className="container">
        <span className="text-muted">
            
            AN MERN 
          <span style={{background:"white"}}>  BOOTCAMP   </span>
            Course
            
            </span>
        </div>
         </footer>    
    </div>
);
export default Base;