import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {loadGames} from "../actions/gamesAction";
import {motion} from "framer-motion";
import styled from "styled-components";
import Game from '../components/Game';
import GameDetails from '../components/GameDetails';
import {useLocation} from "react-router-dom";
import { fadeIn } from '../animation';

const Home = ()=>{

  //get the current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  console.log(pathId);

  //FETCH GAME  
const dispatch = useDispatch();

useEffect(()=>{
  dispatch(loadGames());
},[dispatch]);

const {popular,upcoming,newGames,searched} = useSelector((state)=>state.games);

    return (
        <GamesList variants={fadeIn} initial="hidden" animate="show">
          
          {pathId && <GameDetails/>}

          {searched.length ? (
            <>
            <h2>Searched Games</h2>
            <Games>
              {searched.map(game=>
                <Game 
                  name={game.name}
                  released = {game.released}
                  image = {game.background_image}
                  id = {game.id}
                  key={game.id}  
                />   
              )}
            </Games>
            </>
          ):" "}
          
          <h2>Upcoming Games</h2>
          <Games>
            {upcoming.map(game=>
              <Game 
                name={game.name}
                released = {game.released}
                image = {game.background_image}
                id = {game.id}
                key={game.id}  
              />   
            )}
          </Games>

          <h2>Popular Games</h2>
          <Games>
            {popular.map(game=>
              <Game 
                name={game.name}
                released = {game.released}
                image = {game.background_image}
                id = {game.id}
                key={game.id}  
              />   
            )}
          </Games>

          <h2>New Games</h2>
          <Games>
            {newGames.map(game=>
              <Game 
                name={game.name}
                released = {game.released}
                image = {game.background_image}
                id = {game.id}
                key={game.id}  
              />   
            )}
          </Games>
        </GamesList>

    );
}

const GamesList = styled(motion.div)`
  padding:0rem 5rem;
  h2{
    padding:5rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height:80vh;
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(400px,1fr));
  grid-column-gap:3rem;
  grid-row-gap:5rem;

`  

export default Home;
