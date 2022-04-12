import { createGlobalStyle } from "styled-components";
import { colors } from "../helper";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;500&display=swap');

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Outfit', sans-serif;
    }
    
    body{
        background-color: ${colors.darkBlue};
    }

    #root{
        margin:0 auto;
    }
`;
