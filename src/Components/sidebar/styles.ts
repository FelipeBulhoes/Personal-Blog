import styled from "styled-components"

export const SidebarNav = styled.nav`
    background-color: var(--secondary-color);
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    padding: 0 12% 0 12%;
    box-shadow: 3px 3px 8px 2px #888888;
    position: absolute;

    .langs {
        position: relative;
        right: 0;
        top: -50px;

        img:hover {
            transform: scale(1.1);
            transition: 0.4s;
            cursor: pointer;
        }

        display: flex;
        align-items: center;
        gap: 8px
    }

    header {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .email-text {
        display: flex;
        align-items: center;
        gap: 20px;

        h4 {
            font-weight: 400;
        }
    }

    .medias {
        display: flex;
        font-weight: 400;
        gap: 12px;
        align-items: center;

        a {
            background-image: linear-gradient(
                to right,
                var(--primary-color),
                var(--primary-color) 50%,
                #000 50%
            );
            background-size: 200% 100%;
            background-position: -100%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            transition: all 0.3s ease-in-out;
        }

        a:hover {
            background-position: 0;
        }

        a:hover::before {
            width: 100%;
        }

        .change-lang {
            width: 23px;
            margin-left: 14px; 
        }

        img:hover + .langs {
            cursor: pointer;
            position: relative;
            right: 0;
            top: 0;
            transition: 0.7s;
        }

        img:not(:hover) + .langs {
            transition: 0.5s;
            transition-delay: 4s;
        }

        position: relative;
        right: -56px;
    }

    @media (max-width: 720px) {
        display: none
    }

    @media (max-width: 920px) and (min-width: 721px) {
        padding: 0 6% 0 6%;
    }
`;