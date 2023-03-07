import { PandaCookingMain } from "./styles"
//import Sidebar from "../Components/sidebar"
import {FaReact, FaNodeJs, FaMousePointer, FaGithub} from "react-icons/fa"
import {SiStyledcomponents, SiReactrouter} from "react-icons/si"
import { useNavigate } from "react-router-dom"


const PandaCooking = () => {
    const navigate = useNavigate()

    return (
        <PandaCookingMain>
            <div className="general-container">
                <section className="image-section">
                    <img src={require('./proj_imgs/pandacooking-wide.png')} alt="" />
                </section>
                <section className="info-section">
                    <h2>Panda Cooking</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat voluptatibus non assumenda sunt, velit voluptatem quas dicta corrupti deleniti aliquid excepturi mollitia veritatis ratione cum obcaecati, molestias quos. Excepturi, voluptatibus.e</p>
                    <div className="techs">
                        <FaReact style={{color: "white"}} size={50}/>
                        <SiStyledcomponents style={{color: "white"}} size={50}/>
                        <SiReactrouter style={{color: "white"}} size={50}/>
                        <FaNodeJs style={{color: "white"}} size={50}/>
                    </div>
                    <div className="move">
                        <button onClick={() => window.open("https://panda-cooking-ozcm12l0r-felipebulhoes.vercel.app/", '_blank')}><FaMousePointer style={{color: "white", marginRight: "10px"}} size={20}/>Acessar</button>
                        <button onClick={() => window.open("https://github.com/Panda-Cooking/panda-cooking", '_blank')}><FaGithub style={{color: "white", marginRight: "10px"}} size={20}/>Github</button>
                    </div>
                </section>
                <button onClick={() => navigate("/")}>Voltar</button>
            </div>
        </PandaCookingMain>
    )
}

export default PandaCooking