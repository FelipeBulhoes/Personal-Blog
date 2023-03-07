import styled from "styled-components"

export const SkillsDiv = styled.div`

    .card-group {
        /*border: 1px solid white;*/
        height: 70vh;
        display: grid;
        place-items: center;
    }

    .card-group:hover > .card:nth-child(1) {
        transform: translate(-230%, 10%) rotate(-10deg);
    }

    .card-group:hover > .card:nth-child(2) {
        transform: translate(230%, 10%) rotate(10deg);
    }

    .card-group:hover > .card:nth-child(3) {
        transform: translate(-120%, 2%) rotate(-7deg);
    }

    .card-group:hover > .card:nth-child(4) {
        transform: translate(120%, 2%) rotate(7deg);
    }

    .card {
        aspect-ratio: 5/7;
        background-color: rgba(255, 255, 255, 0.05);
        background-color: gray;
        position: absolute;
        transition: transform 1s cubic-bezier(.17,.78,.85,.99);
        width: 30vmin;
        border-radius: 1vmin;
        display: flex;
        justify-content: center;
        align-items: center;

        span {
            position: absolute;
            color: white;
            z-index: 1;
            background-color: #3E3837;
            padding: 3px 7px;
            border-radius: 215px;
        }

        img {
            width: 100%;
            border-radius: 1vmin;
            filter: brightness(70%);
        }
    }

    .card:hover {
        transition: 750ms;
        cursor: pointer;
        box-shadow: 0px 0px 5px 3px rgba(255,255,255,0.62);

        span {
            display: none;
        }
        
        img {
            filter: brightness(85%);
        }
    }

    .card:not(:hover) {
        transition: 750ms;
    }

    .card:nth-child(1) {
        transform: translateX(-10%) rotate(1deg);
    }

    .card:nth-child(2) {
        transform: translateY(-2%) rotate(10deg);
    }

    .card:nth-child(3) {
        transform: translate(-6%, -2%) rotate(-6deg);
    }

    .card:nth-child(4) {
        transform: translate(7%, 3%) rotate(5deg);
    }

    .card:nth-child(5) {
        transform: translate(0, 0) rotate(0deg);
        background-size: cover;
    }

    @media (max-width:1628px) {
        .card {
            width: 25vmin;
        }
    }
    
    @media (max-width:1400px) {
        .card {
            width: 23vmin;
        }
    }

    @media (max-width:1200px) {

        .card-group:hover {
            height: 720px;
            place-items: start center;
        }

        .card-group:hover > .card:nth-child(1) {
            transform: translate(-70%, 112%) rotate(-6deg);
        }
    
        .card-group:hover > .card:nth-child(2) {
            transform: translate(70%, 112%) rotate(6deg);
        }
    
        .card-group:hover > .card:nth-child(3) {
            transform: translate(-120%, 2%) rotate(-7deg);
        }
    
        .card-group:hover > .card:nth-child(4) {
            transform: translate(120%, 2%) rotate(7deg);
        }
    }

    @media (max-width: 800px) {
        .card {
            width: 42vmin;
            border-radius: 3vmin;
        }

        .card-group:hover {
            height: 2420px;
            place-items: start center;
        }

        .card-group:hover > .card:nth-child(1) {
            transform: translateY(440%);
        }
    
        .card-group:hover > .card:nth-child(2) {
            transform: translateY(330%);
        }
    
        .card-group:hover > .card:nth-child(3) {
            transform: translateY(220%);
        }
    
        .card-group:hover > .card:nth-child(4) {
            transform: translateY(110%);
        }
    }

    @media (max-width: 600px) {
        .card {
            width: 68vmin;
            border-radius: 3vmin;
        }

        .card-group:hover {
            height: 3020px;
            place-items: start center;
        }
    }
`