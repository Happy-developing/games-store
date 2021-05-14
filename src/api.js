const api_key = "3b7803f0cfd348f3a531209b1f4be3f6";
const base_url = `http://api.rawg.io/api/games?key=${api_key}`;

//getting the date

const getCurrentMonth = ()=>{
    const month = new Date().getMonth() + 1;
    if(month<10){
        return `0${month}`;
    }else 
        return month;
}

const getCurrentDay = () =>{
    const date = new Date().getDate();
    if(date<10){
        return `0${date}`;
    }else 
    return date;
}


 const currentYear = new Date().getFullYear();
 const currentMonth = getCurrentMonth();
 const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear-1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear+1}-${currentMonth}-${currentDay}`;

const popular_games = `&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`

export const popularGameURL = () =>`${base_url}${popular_games}`;