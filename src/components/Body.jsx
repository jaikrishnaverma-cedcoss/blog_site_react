import React from 'react';
import Cards from './Cards';
import Catlist from './Catlist';
function Body(props) {
    let object={};
    let temp=[]
    props.category.forEach((key)=>{
          object["heading"]=key
          temp.push(object)
          object={}
    }); 
    const cat2=[]
    props.database.splice(5)
    return ( 
        <>
        <div className="w100 imgr" >
           <div className="row flexSB p3">
            <div className="col w20">
                    <input type="text" placeholder="Search Something Here" className='w80 m1 p1 searchboxinput'/>
                    <Catlist heading="Categories" indexing={false} arr={temp}/>
                    <Catlist heading="Top Posts" indexing={true} arr={props.database}/>
                    
            </div>
            <div className="col">
                <Cards arr={props.database} productPage={props.productPage}/>
            </div>
            {/* <div className="col w33"></div> */}
           </div>
        </div>
        </>
     );
}

export default Body;