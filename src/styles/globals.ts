import tw from "twin.macro";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 .layout {
    ${tw`max-w-layout w-full desktop:px-16 px-4`};
    &--center {
        ${tw`mx-auto`};
    }
   }

   .border-top-def {
     ${tw`border-t-2 border-gray-400`};
   }
  
   @font-face {
    font-family: Consolas;
    src: url("../assets/fonts/consolas.ttf"),format("truetype");;
   }

    body{
        font-family:Consolas;
    }

    body::-webkit-scrollbar-thumb {
      ${tw`bg-gray-850`};
    }

    body::-webkit-scrollbar {
      width: 10px;
      background-color:#2d2d2d ;
    }

`;

export default GlobalStyle;
