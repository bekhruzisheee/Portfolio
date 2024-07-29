import React from "react";
import PageHeader from "../../Components/pageHeader/PageHeader";
import { BsInfoCircleFill } from 'react-icons/bs'
import './About.css'
import { Animate } from "react-simple-animate";
import { DiReact } from "react-icons/di"
import { RiJavascriptFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";

const personalDetails = [
    {
        label: "Name",
        value: "Odiljanov Behruz",
    },
    {
        label: "Age",
        value: "16",
    },
    {
        label: "Adress",
        value: "Uzbekistan, Namangan",
    },
    {
        label: "Email",
        value: "odiljanovbehruzbek180@gmail.com",
    },
    {
        label: "Mobile Number",
        value: "+998932649960",
    },
];

const jobSummary = 'Hi . I am a frontend developer. I have been learning frontend programming for more than half a year. I am currently going through React js courses and I have finished it. I am looking forward to my future work and I think you will like it.'



const About = () => {
    return (
        <section id="about" className="about">

            <PageHeader
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}

            />

            <div className="about__content">
                <div className="about__content__personalWrapper">
                    <Animate
                        play
                        duration={0.7}
                        delay={0.2}
                        start={{
                            transform: 'translateX(-900px)'
                        }}
                        end={{
                            transform: 'translatex(0px)'
                        }}

                    >


                        <h3>Front End Developer</h3>
                        <p>{jobSummary}</p>

                    </Animate>

                    <Animate
                        play
                        duration={0.7}
                        delay={0.2}
                        start={{
                            transform: 'translateX(500px)'
                        }}
                        end={{
                            transform: 'translatex(0px)'
                        }}

                    >

                        <h3 className="personalInformationHeaderText">Personal Information</h3>
                        <ul>
                            {
                                personalDetails.map((item, i) => (
                                    <li key={i}>
                                        <span className="title">{item.label}</span>
                                        <span className="value">{item.value}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </Animate>
                </div>
                <div className="about__content__servicesWrapper">
                    <Animate
                        play
                        duration={0.7}
                        delay={0.2}
                        start={{
                            transform: 'translateX(600px)'
                        }}
                        end={{
                            transform: 'translatex(0px)'
                        }}

                    >
                        <div className="about__content__servicesWrapper__innerContent">
                            <div>
                                <DiReact size={60} color="var(--blue-theme-main-color)" />
                            </div>
                            <div>
                                <FaHtml5 size={60} color="var(--blue-theme-main-color)" />
                            </div>
                            <div>
                                <IoLogoAndroid size={60} color="var(--blue-theme-main-color)" />
                            </div>
                            <div>
                                <RiJavascriptFill size={60} color="var(--blue-theme-main-color)" />
                            </div>
                        </div>
                    </Animate>
                </div>

            </div>

        </section>
    )
}

export default About;