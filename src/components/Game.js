import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {useDispatch} from "react-redux";
import {loadDetails} from "../actions/detailAction";
import { Link } from "react-router-dom";
import {smallImage} from "../util";
import { popup } from "../animation";

const Game = ({name,released,image,id}) => {

    const stringId = id.toString()

    const dispatch = useDispatch();

    const loadDetailsHandler = ()=>{
        document.body.style.overflow = "hidden";
        dispatch(loadDetails(id));
        //console.log("this")
    }

    return ( 
        <GameCard onClick={loadDetailsHandler} variants={popup} initial="hidden" animate="show">
            <Link to={`/games/${id}`}>
                <h3>{name}</h3>
                <p>{released}</p>
                <img src={smallImage(image,640)} alt={name}/>
            </Link>
        </GameCard>
     );
}

const GameCard = styled(motion.div)`
    min-height:30vh;
    box-shadow:0px 5px 20px rgba(0,0,0,0.2);
    text-align:center;
    border-radius:1rem;
    overflow:hidden;
    img{
        width:100%;
        height:40vh;
        object-fit:cover;
    }
`
 
export default Game;