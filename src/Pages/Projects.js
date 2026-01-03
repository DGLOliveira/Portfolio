import { useContext, useEffect } from "react";
import { Context } from "./../Context/Context.js";
import Project from "./../Components/Project.js"
import projects_info from "./../Data/projects_info.json"

export default function Projects() {

    const context = useContext(Context);

    //Creates a list for scroll navigation
    // done in such a way that projects can added/removed without needing to hardcode the list
    useEffect(() => {
        let scrollList = [
            "intro",
            "about"
        ];
        for (let i = 0; i < Object.keys(projects_info).length; i++) {
            scrollList.push("project" + i);
        }
        scrollList.push("contact");
        context.setScrollList(scrollList);
    }, [])

    return (
        <>
            {Object.keys(projects_info).map((project, index) => {
                return (
                    <Project
                        project={projects_info[project]}
                        index={index}
                    />
                )
            })}
        </>
    )
}