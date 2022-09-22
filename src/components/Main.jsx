import React, { useState } from 'react';
import Body from './Body';
import Login from './auth/Login';
import Admin from './Admin';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Blogs from './Blogs';

function Main(props) {
    const [state, setState] = useState({ sessionId: -1, Credentials: [{ contact: "6456456", password: "123", username: "jai" }], cart: [], search: [], input: "", currentProductId: -1, session: "Sign In" })
    const navigate = useNavigate();
    const [currentBlog, setCurrent] = useState({})
    const [database, setData] = useState([{
        category: "Travel",
        date: "Thu Sep 22 2022",
        heading: "56767556756767",
        image: "news.webp",
        subheading: "6756756",
        text: "756756756756",
        image: "sport.jpg",
        writer: "5464564"
    }, {
        category: "Technology",
        date: "Thu Sep 22 2022",
        heading: "Machine learning",
        image: "tech.jpg",
        subheading: "\"Statistical learning\" redirects here. For statistical learning in linguistics, see statistical learning in language acquisition."
        , text: "Machine learning (ML) is a field of inquiry devoted to understanding and building methods that 'learn', that is, methods that leverage data to improve performance on some set of tasks.[1] It is seen as a part of artificial intelligence. Machine learning algorithms build a model based on sample data, known as training data, in order to make predictions or decisions without being explicitly programmed to do so.[2] Machine learning algorithms are used in a wide variety of applications, such as in medicine, email filtering, speech recognition, and computer vision, where it is difficult or unfeasible to develop conventional algorithms to perform the needed tasks."
        , writer: "54645"
    }])
    const category = ["Technology", "Science & Space", "News", "Sports", "LifeStyle", "Travel", "Food"]
    const SignUpHandler = (obj) => {
        state.Credentials.push(obj)
        setState({ ...state })
    }
    const LogOutHandler = () => {
        state.sessionId = -1
        state.session = 'Sign In'
        setState({ ...state })
    }
    const HandleSession = (ide) => {
        if (ide !== -1) {
            state.sessionId = ide
            state.session = state.Credentials[state.sessionId].username
            setState({ ...state })
            navigate("/");
        }
    }

    const Submitted = e => {
        const d = new Date();
        if (state.sessionId === -1) {
            navigate("/login");
            alert("Login First")
            return 0
        }
        let obj = { heading: e.target.heading.value, subheading: e.target.subheading.value, category: e.target.category.value, text: e.target.text.value, writer: state.session, date: d.toDateString(), image: e.target.image.value }
        console.log(state.Credentials)
        database.push(obj)
        setData([...database])
        e.preventDefault();
    }

    const productPage = obj => {
        setCurrent(obj)
        navigate('blog')
    }

    const deleteBlog = (index) => {
        if (state.sessionId === 0) {
            database.splice(index, 1)
            setData([...database])
        }
        else
            return alert('Sorry.... You Have Not Authority For This Action!')
    }

    return (
        <>

            <div className="nav" style={{ width: "98%" }}>
                <div className="logo">
                    <Link to="/"><img src="logoshop.svg" height="30px" alt="" /></Link></div>
                <div className="navigtor 60">
                    <Link to="admin"><button className="btn">ADMIN</button></Link>
                    <button className="btn">ABOUT</button>
                    <button className="btn">CONTACT US</button>
                    <button className='btn' onClick={LogOutHandler}>LOG OUT</button>
                </div>
            </div>
            <div className="navBody row flexSB clr5 w100 flexAIC" style={{ minHeight: "20px", marginTop: "4%" }}>
                <Link to="/"><button className="btn btn-trans flex  "><h3><i class="fa fa-bars" aria-hidden="true"></i>&nbsp;Home</h3></button></Link>

                <Link to="login"><button className="btn clr5">  <h3 className='fclWhite'>Hello , {state.session}</h3></button></Link>

            </div>
            <div className="col flexJCC flexAIC imgr" >

                <Routes>
                    <Route path="/" element={<Body category={category} database={database} productPage={productPage} />} />
                    <Route path="login" element={<Login Credentials={state.Credentials} auth={HandleSession} SignupHandler={SignUpHandler} />} />
                    <Route path='admin' element={<Admin deleteBlog={deleteBlog} database={database} productPage={productPage} Submitted={Submitted} category={category} />} />
                    <Route path='blog' element={<Blogs blog={currentBlog} />} />
                </Routes>
            </div>
        </>
    );
}

export default Main;