import React, { useState } from "react";
import {useProjectValue, useSelectedProjectValue} from "../context";
import IndividualProject from "./IndividualProject";

function Projects({ activeValue = null}) {
    const [active, setActive] = useState(activeValue)
    const { setSelectedProject } = useSelectedProjectValue()
    const { projects } = useProjectValue()

    return (
        projects &&
            projects.map(project => (
                <li
                    key={project.projectId}
                    data-doc-id={project.docId}
                    data-testid="project-action"
                    className={
                        active === project.projectId ? 'active sidebar__project' : 'sidebar__project'
                    }
                    onClick={() => {
                        setActive(project.projectId)
                        setSelectedProject(project.projectId)
                    }}
                >
                    <IndividualProject project={project}/>
                </li>
            ))
    )
}

export default Projects