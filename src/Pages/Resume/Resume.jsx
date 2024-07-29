import React from "react";
import PageHeader from "../../Components/pageHeader/PageHeader";
import { BsInfoCircleFill } from 'react-icons/bs'



const Resume=()=>{
    return(
        <section id="resume" className="resume">

        <PageHeader
            headerText="My Resume"
            icon={<BsInfoCircleFill size={40} />}

        />

    </section>
    )
}

export default Resume;