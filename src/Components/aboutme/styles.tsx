import styled from "styled-components"

export const AboutMeDiv = styled.div`
    width: 85%;
    margin: 50px auto 0 auto;
    text-align: justify;
    text-justify: inter-word;
    display: flex;
    flex-direction: column;

    img {
        margin: 20px auto 50px auto;
    }

    h2 {
        justify-text:center;
        font-size: 30px;
        font-weight: 500;
        color: white;
        margin: 0 auto;
        text-align: center;
    }

    p {
        margin-top: 16px;
        text-indent: 3em;
        line-height: 24px;
        color: white
    }

    @media (min-width: 1180px) {
        margin-top: 30px;
        width: 50%;

        p {
            line-height: 32px;
        }
    }
`