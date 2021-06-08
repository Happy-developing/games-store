import react,{useState} from "react";
//styles and animation
import styled from "styled-components";
import {motion} from "framer-motion";
//app logo import
import logo from "../img/logo.svg";
//redux
import {useDispatch} from "react-redux";
import { fetchSearch } from "../actions/gamesAction";
import { fadeIn } from "../animation";



const Nav = ()=>{

    const [inputText,setInputText] = useState("");
    const dispatch = useDispatch()

    const inputHandler = (e) => {
        setInputText(e.target.value);
    }

    const searchQueryHandler = () =>{
        dispatch(fetchSearch(inputText))
        setInputText("");
    }

    const clearSearchHandler = () =>{
        dispatch({type:"CLEAR_SEARCH"});
    }

    return(
        <StyledNav variants={fadeIn} initial="hidden" animate="show">
            <Logo onClick={clearSearchHandler}> 
                <img src={logo} alt="logo"/>
                    Ignite
            </Logo>
            <div className="search">
                <input value={inputText} onChange={inputHandler} type="text"/>
                <button onClick={searchQueryHandler}>Search</button>
            </div>
        </StyledNav>
    )
}

const StyledNav = styled(motion.nav)`
    padding:3rem 5rem;
    text-align:center;
    input{
        width:30%;
        border:none;
        font-weight:bold;
        font-family:"Montserrat",sans-serif;
        font-size:1.2rem;
        box-shadow:0px 0px 30px rgba(0,0,0,0.2);
        padding:0.4rem;
        margin-top:1rem;
    }
    button{
        font-size:1.2rem;
        border:none;
        color:white;
        background:#ff7676;
        padding:0.4rem 2rem;
        cursor:pointer;
    }
`

const Logo = styled(motion.div)`
    display:flex;
    justify-content:center;
    text-align:center;
    img{
        height:1.5rem;
        width:1.5rem;
    }
    cursor:pointer
`

export default Nav;

