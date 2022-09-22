import React from 'react';
function Blogs(props) {
    return ( 
        <>
         <div className='navBody col flexAIC clr8' style={{marginTop:"0px"}}>
            <div className="row m1"><h1 style={{ textDecoration: "underline" }}>{props.blog.heading}</h1></div>
            <div className="row p1 w100">
                <div className="row m1 p1 w90">
                    <div className="col w33"><img src={props.blog.image} alt="" style={{ height: "300px", widht: "300px" }} /></div>
                    <div className="col w50 p3 flexSB">
                        <p style={{ fontSize: "25px" }}>'{props.blog.subheading}'</p>
                         <div className="col ">
                         <h3>Author {props.blog.writer}</h3>
                        <h4>Date: {props.blog.date}</h4>
                         </div>
                    </div>
                </div>
            </div>
            <div className="row m1">
                <p>{props.blog.text}
                </p>
            </div>
          
            
            </div>
        </>
     );
}

export default Blogs;