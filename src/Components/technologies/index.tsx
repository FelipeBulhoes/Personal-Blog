import React from 'react'
import { TechListDiv } from './styles'

interface iTechnologyProps {
    observingElement: any;
}

function Technologies({observingElement}: iTechnologyProps) {
    return (
       <TechListDiv>
            <ul>
                <li className='hidden tech' ref={(el) => {observingElement.current[2] = el}}>
                    <img src="./logo192.png" alt="" />
                    <span >ReactJS</span>
                </li>
                <li className='hidden tech' ref={(el) => {observingElement.current[3] = el}}>
                    <img className='smaller' src="./nodejs.png" alt="" />
                    <span>NodeJS</span>
                </li>
                <li className='hidden tech' ref={(el) => {observingElement.current[4] = el}}>
                    <img className='smaller' src="./typescript.png" alt="" />
                    <span>TypeScript</span>
                </li>
                <li className='hidden tech' ref={(el) => {observingElement.current[5] = el}}>
                    <img className='smaller' src="./python.png" alt="" />
                    <span>Python</span>
                </li>
                <li className='hidden tech' ref={(el) => {observingElement.current[6] = el}}>
                    <img className='bigger' src="./django.png" alt="" />
                    <span>Django</span>
                </li>
                <li className='hidden tech' ref={(el) => {observingElement.current[7] = el}}>
                    <img src="./postgres.png" alt="" />
                    <span>Postgre</span>
                </li>
                <li className='hidden tech' ref={(el) => {observingElement.current[8] = el}}>
                    <img src="./git.png" alt="" />
                    <span>Git</span>
                </li>
            </ul>
       </TechListDiv> 
    )
}

export default Technologies
