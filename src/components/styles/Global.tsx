import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

        *, *:before, *:after {
            box-sizing: border-box;
         }

    

    Header {
        display: flex;
        justify-content: center;
        gap: 20px;
        align-items: center;
        height 5vh;
      }

    body
    { min-height: 100vh; margin:0; 
    }

    h3 {
        color: red;
    }

    .wrapper {
        background-color:rgba(5,72,72,0.2);
        padding-left:35px;
        padding-right:35px;
        padding-top:35px;
        padding-bottom:50px;
        width: 450px;
        float: left;
        left: 50%;
        position: absolute;
        margin-top:30px;
        margin-left: -260px;
        -moz-border-radius: 7px;
        -webkit-border-radius: 7px;
    }

    Footer {
        max-width:100%;
        margin:auto;
        text-align: center;
    }

    button {
        border: none;
        border-radius: 2px;
        padding: 12px 18px;
        font-size: 16px;
        text-transform: uppercase;
        cursor: pointer;
        color: white;
        background: #0196f8;
        box-shadow: 0 0 4px #999;
        outline: none;
      }

      .input {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 15px 0px;
      }

      .input-fields {
            display: flex;
            justify-content: space-between;
            align-items: center;
      }

    textarea {
        width: 100%;
        height: 150px;
        line-height: 150%;
        resize:vertical;
    }
`


export default GlobalStyles