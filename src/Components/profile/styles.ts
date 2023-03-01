import styled from "styled-components"

export const ProfileDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: 140px;

    .self-presentation {
        padding: 50px 0 20px 0;
        display: flex;
        flex-direction: column;
        align-items: center;

        span {
            color: var(--secondary-color);
        }

        img {
            width: 130px;
            margin-bottom: 12px;
        }
    }

    .role {
        width: 420px;

        h1 {
            background-color: rgb(175,232,255);
            background-image: linear-gradient(90deg, rgba(175,232,255,1) 0%, rgba(66,72,245,1) 65%, rgba(5,0,91,1) 100%);
            background-size: 100%;
            -webkit-background-clip: text;
            -moz-background-clip: text;
            -webkit-text-fill-color: transparent; 
            -moz-text-fill-color: transparent;
            font-size: 36px;
            text-align: center;
        }
    }

    @media (max-width: 720px) {
       align-items: center;
       width: 100%;
       top: 60px;

       .role {
            width: 100%;
            display: flex;
            justify-content: center;
            
            h1 {
                font-size: 32px;
            }
       }
    }

    @media (max-width: 719px) and (min-width: 535px) {
        .role {
            width: 340px
        }
    }
`;