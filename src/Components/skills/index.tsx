import React from 'react'
import { SkillsDiv } from './styles'
import { useNavigate } from 'react-router-dom'

function Skills() {
    const navigate = useNavigate()

    return (
        <SkillsDiv>
            <div className='card-group'>
                <div className='card'>
                    <img src="./placeholder.jpg" alt="" />
                </div>
                <div className='card'>
                    <img src="./placeholder.jpg" alt="" />
                </div>
                <div className='card'>
                    <span>Ver mais</span>
                    <img src="./kenzieburguer.png" alt="" />
                </div>
                <div className='card'>
                    <span>Ver mais</span>
                    <img src="./nukenzie.png" alt="" />
                </div>
                <div className='card' onClick={() => navigate("/projects/panda-cooking")}>
                    <span>Ver mais</span>
                    <img src="./pandacooking.png" alt=""/>
                </div>
            </div>
        </SkillsDiv>
    )
}

export default Skills
