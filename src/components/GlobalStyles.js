import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    html{
        &::-webkit-scrollbar{
            width:0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color:darkgrey;
        }
        &::-webkit-scrollbar-track{
            background:white;
        }
    }

    body{
        width:100%;
        font-family:'Montserrat', sans-serif;
    }

    h2{
        font-size:2.5rem;
        color:#333;
        font-family:'Abril Fatface',cursive;
        font-weight:lighter;
    }

    h3{
        padding:1rem 0;
    }

    p{
        padding:0 0 1rem 0;
        color:#696969;
        
    }

    a{
        text-decoration:none;
        color:#333;
    }
    img{
        display:block;
    }
`
 
export default GlobalStyles;