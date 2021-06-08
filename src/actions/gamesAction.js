import axios from "axios";
import {popularGameURL,upcomingGameURL,newGameURL, searchGameURL} from "../api";

export const loadGames=()=>async(dispatch)=>{
    const popularData = await axios.get(popularGameURL());
    const upcomingData = await axios.get(upcomingGameURL());
    const newData = await axios.get(newGameURL());
    
    dispatch({
        type: "FETCH_GAMES",
        payload:{
            popular:popularData.data.results,
            upcoming:upcomingData.data.results,
            newGames:newData.data.results,
        },
    });
};

export const fetchSearch = (game_name) => async(dispatch)=>{
    const searchedGames = await axios.get(searchGameURL(game_name));

    dispatch({
        type:"FETCH_SEARCH",
        payload:{
            searched:searchedGames.data.results,
        }
    })
}














// import axios from "axios";
// import {popularGameURL} from "../api";


// export const loadGames = () => async (dispatch) =>{
//     const popularData = await axios.get(popularGameURL());
//     //console.log(popularData);

//     dispatch({
//         type:"FETCH_GAMES",
//         payload:{
//             popular:popularData,
//         },
//     })
// }