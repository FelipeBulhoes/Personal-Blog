import styled from "styled-components"

export const ProjectsMain = styled.main`
    height: 100vh;

    h2, p {
        color: white;
        margin: 0 0 30px 0;
    }

    .general-container {
        background-color: var(--body-color);
        width: 80%;
        height: 100%;
        margin: 0 auto;

        .image-section {
            width: 100%;
            height: 45%;
            overflow:hidden;
            position:relative;

            img {
                max-width:100%;
                height: auto;
            }
        }

        .info-section {
            padding: 50px 8%;

            p {
                min-height: 8vw;
            }

            .techs {
                width: 25%;
                display: flex;
                justify-content: space-between;
                margin-bottom: 50px;
            }

            .move {
                display: flex;
                width: 35%;
                flex-direction: row;
                justify-content: space-between;

                button {
                    display: flex;
                    align-items: center;
                    padding: 10px 20px;
                    background-color: transparent;
                    border: 1px solid white;
                    border-radius: 10px;
                    font-size: 17px;
                    color: white;
                }

                button:hover {
                    border-radius: 6px;
                    font-size: 17px;
                    box-shadow: 0px 0px 5px 3px rgba(255,255,255,0.62);
                    transition: 650ms;
                }

                button:not(:hover) {
                    transition: 650ms;
                }
            }
        }
    }

`

export {}