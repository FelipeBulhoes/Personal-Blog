import styled from "styled-components"

export const TechListDiv = styled.div`
    background-color: var(--light-primary-color);
    border-top: 2px solid gray;
    border-bottom: 2px solid gray;
    width: 100%;
    height: 200px;
    margin-top: 65px;
    display: flex;
    overflow-x: scroll;
    flex-wrap: nowrap;
    align-items: center;

    ul {
        margin: 0 30px 0 30px;
        display: flex;
        gap: 40px;

        li {
            display: flex;
            align-items: center;
            gap: 8px;

            img {
                width: 40px;
            }

            span {
                font-size: 22px;
                color: lightgray;
            }

            .smaller {
                width: 34px;
            }
            
            .bigger {
                width: 60px;
            }
        }
    }

    @media (min-width: 1180px) {
        overflow-x: hidden;

        ul {
            margin: 0 8%;
            width: 100%;
            justify-content: space-between;
        }

        .tech:nth-child(2) {
            transition-delay: 200ms;
        }
        .tech:nth-child(3) {
            transition-delay: 400ms;
        }
        .tech:nth-child(4) {
            transition-delay: 600ms;
        }
        .tech:nth-child(5) {
            transition-delay: 800ms;
        }
        .tech:nth-child(6) {
            transition-delay: 1s;
        }
        .tech:nth-child(7) {
            transition-delay: 1.2s;
        }
        .tech:nth-child(8) {
            transition-delay: 1.4s;
        }
    }
`