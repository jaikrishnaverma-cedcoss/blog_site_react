import React from 'react';
function Admin(props) {
    // {heading:"Ukrain Crises",subheading:"Putin Dump Oil",category:"World News",subcategory:"Golbal Effect",
    // text:"",writer:"Jacoub",date:"1 JUN 12:30 PM"},
    return ( 
        <>
        <div className="main">
            <div className="row">
                <div className="col w33 " style={{margin:"1% 1% 0% 3%"}}>
                    <h1 className='' style={{margin:"1% 1% 3% 0%"}}>+ Add New Blog</h1>
               <form onSubmit={props.Submitted} className='col'>
                <label htmlFor="">Blog Title</label>
                <input type="text" name='heading' />
                <label htmlFor="">Blog Sub Title</label>
                <input type="text" name='subheading' />
                <label htmlFor="">Category</label>
                <select type="text" name='category' >
                    {
                        props.category.map(x=><option value={x}>{x}</option>)
                    }
                </select>
                <label htmlFor="">Text Here</label>
                <textarea  id="" name="text" cols="30" rows="5"></textarea>
                <div className="row w100 m3">
                    <div className="row w60">
                    <img src="tech.jpg" height="50px" width="60px" alt="" />
                    <img src="sport.jpg" height="50px" width="60px" alt="" />
                    <img src="news.webp" height="50px" width="60px" alt="" />
                    <img src="worlsnews.jpg" height="50px" width="60px" alt="" />
                    </div>
                    <div className=" col w20 ">
                        <select name="image" className='w100' id="">
                            <option value="tech.jpg">Img-1</option>
                            <option value="sport.jpg">Img-2</option>
                            <option value="news.webp">Img-3</option>
                            <option value="worlsnews.jpg">Img-4</option>
                        </select>
                    </div>
                </div>
               <button className="btn btn-info" type="submit">Add</button>
               </form>
                </div>
                <div className="col flexAIC w60"  style={{margin:"1% 1% 0% 1%"}}>
                    <h1  style={{margin:"1% 1% 3% 0%"}}>Controll Panel</h1>
                    <table className='w80'>
                        <thead>
<tr>
    <th>id</th>
    <th>Blog Title</th>
    <th>Author</th>
    <th>Date</th>
    <th>View</th>
    <th>Action</th>
</tr>
                        </thead>
                        <tbody>
{
    props.database.map((x,i)=>{
        return <tr>
            <td>
                {i+1}
            </td>
            <td>
                {x.heading}
            </td>
            <td>
                {x.writer}
            </td>
            <td>
                {x.date}
            </td>
            <td>
               <button className="btn btn-success" onClick={()=>props.productPage(x)}>View</button>
            </td>

            <td>
               <button className="btn btn-danger" onClick={()=>props.deleteBlog(i)}>Delete</button>
            </td>
        </tr>
    })
}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
     );
}

export default Admin;