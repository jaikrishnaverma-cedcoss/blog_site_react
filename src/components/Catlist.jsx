import React from 'react';
function Catlist(props) {
    if (props.indexing) {
        return (
            <>
                <div className="card bcard m1 w80" s>
                    <h3 className='m3'>{props.heading}</h3>
                    {
                        props.arr.slice(0, 5).map((x, i) => <div className="m1 li row fclr5"><div className="col w20 flexJCC flex"><h1>{i}</h1></div><div className="col"><h3>{x.heading}</h3><p className='lisub' style={{maxHeight:"28px",overflow:"hidden"}}>{x.subheading.split(' ').slice(0, 5).join(' ')}...</p></div></div>)
                    }

                </div>
            </>
        );
    }
    else {
        return (
            <>
                <div className="card bcard m1 w80" s>
                    <h3 className='m3'>{props.heading}</h3>
                    {
                        props.arr.map((x) => <div className="m1 li row fclr5">{x.heading}</div>)
                    }

                </div>
            </>
        );
    }
}

export default Catlist;