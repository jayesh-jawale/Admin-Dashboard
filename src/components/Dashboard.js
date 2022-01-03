import { Header } from "./Header"
import {GenerateReports} from './GenerateReports'
import React from 'react'
import {Charts} from './Charts'
import { ProjectsAndIllustrations } from "./ProjectandIllustrations"
import { ColorBoxAndDevelopmentApproach } from "./ColorBoxAndDevelopmentApproach"

export function Dashboard() {
    return (
        <div className="dashboard">
            <Header/>
            <GenerateReports/>
            <Charts/>
            <ProjectsAndIllustrations/>
            <ColorBoxAndDevelopmentApproach/>
            <Footer/>
        </div>
    )
}

function Footer() {
    return (
        <div className="footer">
            <p>Copyright © Your Website 2021</p>
        </div>

    )
}