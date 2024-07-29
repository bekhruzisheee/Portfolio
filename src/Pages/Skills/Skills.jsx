import React from "react";
import PageHeader from "../../Components/pageHeader/PageHeader";
import { BsInfoCircleFill } from 'react-icons/bs'
import "./Skills.css"
import { skillData } from "./utils";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import {Line} from "rc-progress"







const Skills = () => {
    return (
        <section id="skills" className="skills">

            <PageHeader
                headerText="My Skills"
                icon={<BsInfoCircleFill size={40} />}

            />
            <div className="skills__content__wrapper">
                {
                    skillData.map((item, i) => (
                        <div key={i} className="skills__content__wrapper__inner-content">
                            <Animate
                                play
                                duration={1}
                                delay={0.3}
                                start={{
                                    transform: 'transateX(-200px)'

                                }}
                                end={{
                                    transform: 'transateX(0px)'

                                }}

                            >

                                <h3 className="skills__content__wrapper__inner-content__category-text">

                                    {item.label}
                                </h3>
                                <div>
                                    {
                                        item.data.map((skillItem, j) => (
                                            <AnimateKeyframes
                                                play
                                                duration={1}
                                                keyframes={["opacity : 1", "opacity : 0"]}
                                                iterationCount="1"


                                            >
                                                <div className="progressbar-wrapper" key={j}>
                                                    <p>{skillItem.skillName}</p>
                                                    <Line 
                                                    percent={skillItem.percentage}
                                                    strokeWidth="2"
                                                    strokeColor="var(--blue-theme-main-color)"
                                                    trailWidth="2"
                                                    strokeLinecap="square"
                                                    
                                                    />


                                                </div>

                                            </AnimateKeyframes>
                                        ))
                                    }
                                </div>

                            </Animate>
                        </div>
                    ))
                }


            </div>

        </section>
    )
}

export default Skills;