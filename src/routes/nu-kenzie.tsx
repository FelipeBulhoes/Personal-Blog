import { ProjectsMain } from "./styles"
//import Sidebar from "../Components/sidebar"
import {FaReact, FaMousePointer, FaGithub} from "react-icons/fa"
import { useNavigate } from "react-router-dom"


const NuKenzie = () => {
    const navigate = useNavigate()

    return (
        <ProjectsMain style={{
            background: "linear-gradient(0deg, rgba(253,55,126,1) 0%, rgba(255,255,255,1) 100%)"
        }}>
            <div className="general-container">
                <section className="image-section">
                    <img src={require('./proj_imgs/nukenzie-wide.png')} alt="" />
                </section>
                <section className="info-section">
                    <h2>Nu Kenzie</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat voluptatibus non assumenda sunt, velit voluptatem quas dicta corrupti deleniti aliquid excepturi mollitia veritatis ratione cum obcaecati, molestias quos. Excepturi, voluptatibus.e</p>
                    <div className="techs">
                        <FaReact style={{color: "white"}} size={50}/>
                    </div>
                    <div className="move">
                        <button onClick={() => window.open("https://s1-nu-kenzie.vercel.app/", '_blank')}><FaMousePointer style={{color: "white", marginRight: "10px"}} size={20}/>Acessar</button>
                        <button onClick={() => window.open("https://github.com/FelipeBulhoes/s1-Nu-Kenzie", '_blank')}><FaGithub style={{color: "white", marginRight: "10px"}} size={20}/>Github</button>
                        <button onClick={() => navigate("/")}>Voltar</button>
                    </div>
                </section>
            </div>
        </ProjectsMain>
    )
}

export default NuKenzie