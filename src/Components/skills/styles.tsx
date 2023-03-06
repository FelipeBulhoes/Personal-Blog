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
        position: absolute;
        transition: transform 1.1s cubic-bezier(.17,.78,.85,.99);
        width: 30vmin;
        border-radius: 1vmin;
    }

    .card:nth-child(1) {
        transform: translateX(-10%) rotate(1deg);
        background-image: url("https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?ixlib=rb-4.0.3&ixid=MnwxMjA
        3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80");
        background-size: cover;
    }

    .card:nth-child(2) {
        transform: translateY(-2%) rotate(10deg);
        background-image: url("https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80");
        background-size: cover;
    }

    .card:nth-child(3) {
        transform: translate(-6%, -2%) rotate(-6deg);
        background-image: url("https://images.unsplash.com/photo-1513036191774-b2badb8fcb76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80");
        background-size: cover;
    }

    .card:nth-child(4) {
        transform: translate(7%, 3%) rotate(5deg);
        background-image: url("https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=752&q=80");
        background-size: cover;
    }

    .card:nth-child(5) {
        transform: translate(0, 0) rotate(0deg);
        background-image: url("https://images.unsplash.com/photo-1555353540-64580b51c258?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=678&q=80");
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