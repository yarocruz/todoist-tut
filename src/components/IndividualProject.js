import React, { useState } from "react";
import {FaTrash} from "react-icons/all";
import { useProjectValue, useSelectedProjectValue } from "../context";
import { firebase } from "../firebase";

function IndividualProject({project}) {
    const [showConfirm, setShowConfirm] = useState(false)
    const { projects, setProjects } = useProjectValue()
    const { setSelectedProject } = useSelectedProjectValue()

    const deleteProject = (docId) => {
        firebase
            .firestore()
            .collection('projects')
            .doc(docId)
            .delete()
            .then(() => {
                setProjects([...projects])
                setSelectedProject('INBOX')
            })
    }

    return (
        <>
            <span className="sidebar__dot">&bull;</span>
            <span className="sidebar__project-name">{project.name}</span>
            <span className="sidebar__project-delete" data-testid='delete-project' onClick={() => setShowConfirm(!showConfirm)}>

                <FaTrash />
                {showConfirm && (
                    <div className="project-delete-modal">
                        <div className="project-delete-modal__inner">
                            <p>Are you sure you want to do this?</p>
                            <button type='button' onClick={() => deleteProject(project.docId)}>
                                Delete
                            </button>
                            <span onClick={() => setShowConfirm(!showConfirm)}>Cancel</span>
                        </div>
                    </div>
                )}

            </span>
        </>
    )

}

export default IndividualProject