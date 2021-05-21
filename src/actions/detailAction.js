import axios from "axios";
import {gameDetailsURL,screenShotURL} from "../api";

export const loadDetails = (id)=> async (dispatch)=>{
    const detailData = await axios.get(gameDetailsURL(id));

    const screenShotData = await axios.get(screenShotURL(id));

    dispatch({
        type:"GET_DETAIL",
        payload:{
            game:detailData.data,
            screen:screenShotData.data,
        },
    })
}