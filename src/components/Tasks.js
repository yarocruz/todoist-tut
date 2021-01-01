import React, {useEffect} from 'react'

import Checkbox from "./Checkbox";
import { useTasks } from "../hooks";
import { collatedTasks } from "../constants";
import { getTitle, getCollatedTitle, collatedTasksExist } from "../helpers";
import { useSelectedProjectValue, useProjectValue } from "../context";

function Tasks() {
    const { selectedProject } = useSelectedProjectValue()
    const { projects } = useProjectValue()
    const { tasks } = useTasks(selectedProject)

    let projectName = ''

    console.log(projects)
    if (projects && selectedProject && !collatedTasksExist(selectedProject)) {
        projectName = getTitle(projects, selectedProject).name
        console.log('projectName 1: ', projectName)
    }

    if (collatedTasksExist(selectedProject) && selectedProject) {
        projectName = getCollatedTitle(collatedTasks, selectedProject).name
        console.log('projectName2: ', projectName)
    }

    useEffect(() => {
        document.title = `${projectName}: Todoist`
    })

    console.log('tasks', tasks)

    return (
        <div className="tasks" data-testid="tasks">
            <h2 data-testid="project-name">{projectName}</h2>

            <ul className="tasks__list">
                {tasks.map(task => (
                    <li key={`${task.id}`}>
                        <Checkbox id={task.id} />
                        <span>{task.task}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Tasks