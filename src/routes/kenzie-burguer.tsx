import { ProjectsMain } from "./styles"
//import Sidebar from "../Components/sidebar"
import {FaReact, FaMousePointer, FaGithub} from "react-icons/fa"
import {SiStyledcomponents} from "react-icons/si"
import { useNavigate } from "react-router-dom"


const KenzieBurguer = () => {
    const navigate = useNavigate()

    return (
        <ProjectsMain style={{
            background: "linear-gradient(0deg, rgba(39,174,96,1) 0%, rgba(255,255,255,1) 100%)"
        }}>
            <div className="general-container">
                <section className="image-section">
                    <img src={require('./proj_imgs/kenzieburguer-wide.png')} alt="" />
                </section>
                <section className="info-section">
                    <h2>Kenzie Burguer</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat voluptatibus non assumenda sunt, velit voluptatem quas dicta corrupti deleniti aliquid excepturi mollitia veritatis ratione cum obcaecati, molestias quos. Excepturi, voluptatibus.e</p>
                    <div className="techs">
                        <FaReact style={{color: "white"}} size={50}/>
                        <SiStyledcomponents style={{color: "white"}} size={50}/>
                    </div>
                    <div className="move">
                        <button onClick={() => window.open("https://s1-hamburgueria-da-kenzie.vercel.app/", '_blank')}><FaMousePointer style={{color: "white", marginRight: "10px"}} size={20}/>Acessar</button>
                        <button onClick={() => window.open("https://github.com/Kenzie-Academy-Brasil-Developers/s1-hamburgueria-da-kenzie-felipebulhoes", '_blank')}><FaGithub style={{color: "white", marginRight: "10px"}} size={20}/>Github</button>
                        <button onClick={() => navigate("/")}>Voltar</button>
                    </div>
                </section>
            </div>
        </ProjectsMain>
    )
}

export default KenzieBurguer