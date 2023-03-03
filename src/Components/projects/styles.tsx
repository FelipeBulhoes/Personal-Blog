import styled from "styled-components"

export const ProjectsDiv = styled.div`
    width: 85%;
    margin: 50px auto 100px auto;
    text-align: justify;
    text-justify: inter-word;
    display: flex;
    flex-direction: column;

    img {
        margin: 40px auto 50px auto;
        width: 110px;
    }

    h2 {
        justify-text:center;
        font-size: 30px;
        font-weight: 500;
        color: white;
        margin: 0 auto;
        text-align: center;
    }

    ul {

        li {
            width: 100%;
            height: 350px;
            margin-top: 30px;
            background-color: var(--light-primary-color);
            border: 1.5px solid lightgray;
            border-radius: 16px;

            display: flex;
        }

        .pandacooking {
            background: rgb(253,55,126);
            background: linear-gradient(0deg, rgba(253,55,126,1) 0%, rgba(255,255,255,1) 100%);
        }
        .kenzieburger {
            background: rgb(39,174,96);
            background: linear-gradient(0deg, rgba(39,174,96,1) 0%, rgba(255,255,255,1) 100%);
        }
        .nukenzie {
            background: rgb(154,55,253);
            background: linear-gradient(0deg, rgba(154,55,253,1) 0%, rgba(255,255,255,1) 100%);
        }

        div:nth-child(1) {
            width: 35%;
            border-right: 1.5px solid lightgray; 
            border-radius: 16px 0 0 16px;
            display: flex;
            flex-direction: column;
            align-items: center;

            .projectLogo {
                margin: 30px 0 70px 0
            }

            img {
                width: 42px;
                margin: 12px 0
            }

            img:hover {
                cursor:pointer;
                transform: scale(1.1);
                transition: 700ms;
            }

            img:not(:hover) {
                transition: 600ms;
            }
        }

        div:nth-child(2) {
            background-color: var(--body-color);
            width: 65%;
            border-radius: 0 16px 16px 0;
            padding: 3%;
            display: flex;
            flex-direction: column;
            overflow-y: scroll;

            h3, p {   
                color: white;
            }

            h3 {
                font-weight: 600;
                margin-bottom: 20px;
                text-align: center;
            }

            p {
                text-align: justify;
            }

            .descDiv {
                width: 100%;
                border: none;
                margin: 0
            }

            div {
                position: relative;
                bottom: 0;
                margin-top: 10px;
                border-top: 1.5px solid lightgray;
                display: flex;
                justify-content: space-around;

                img {
                    width: 32px;
                    margin: 12px 0 0 0;
                }
            }
            
        }
    }

    .proj:nth-child(2) {
        transition-delay: 200ms;
    }
    .proj:nth-child(3) {
        transition-delay: 400ms;
    }
    .proj:nth-child(4) {
        transition-delay: 600ms;
    }

    @media (min-width: 1180px) {
        margin-top: 30px;
        width: 50%;

        ul {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;

            li {
                width: 45%;
                height: 350px;

                .descDiv {
                    height: 70%;
                }

                div:nth-child(2) {
                    overflow-y: hidden;
                }
            }
        }
    }
`
