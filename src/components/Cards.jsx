import React from 'react';
function Cards(props) {
    const data=props.arr
    let modified_collection = []
    console.log(data)
    if (data.length > 0) {
        modified_collection = data.reduce((rows, key, index) => {
            return (index % 3 === 0 ? rows.push([key])
                : rows[rows.length - 1].push(key)) && rows;
        }, []);

    }
    return ( 
        <>
                 {
                        modified_collection.map((row) =>
                        <div className="row flexSB bRd5">
                                {row.map((col,i) => 
                                <div className={`col card m3 changer blogcard clr${(i+1)%8}`} style={{padding:"0px"}} onClick={()=>props.productPage(col)}>
                                    <div className="blog col p5 bRd5 fclr3 w90" >
                                        <h2 className='m1 '>{col.subheading}</h2>
                                        <p>{col.text}</p>

                                    </div>
                                   <img className='bRd5' style={{maxWidth:"350px ",height:"16vw",margin:"0px",padding:"0px"}} src={col.image} alt="" /><h3 className='m3 fclWhite' style={{textAlign:"center"}}>{col.heading}</h3>
                                </div>)}
                        </div>
                      
                        )
                    }



        </>
     );
}

export default Cards;