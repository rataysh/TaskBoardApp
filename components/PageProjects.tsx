/** @format */

import {Text, View} from "react-native";
// import React, {useState} from "react";
// import {ButtonAdd} from "../components/ButtonAdd";
// import {EachProject} from "../components/projects/EachProject";
// import "../styles/projects.scss";
// import {AboutMe} from "../components/footer/footer";
// import {CreateNewProjectModal} from "../components/projects/CreateNewProjectModal";
// import {useTypedSelector} from "../hooks/useTypedSelector";

export const PageProjects = () => {
    // const [createNewProjectModal, setCreateNewProjectModal] =
    //     useState<boolean>(false);

    // const dataProject = useTypedSelector((state) => state.projects);

    return (
        <View>
            <View>
                <Text>Task Board</Text>
                <View>
                    <Text>TEST TEMPPrP</Text>
                    {/* <ButtonAdd
                        setActive={setCreateNewProjectModal}
                        text='Create new project'
                    /> */}

                    {/* <div className='projectsBox'>
                        {dataProject.map((project) => (
                            <EachProject project={project} key={project.id} />
                        ))}
                    </div> */}
                </View>
                {/* <CreateNewProjectModal
                    active={createNewProjectModal}
                    setActive={setCreateNewProjectModal}
                /> */}
                {/* <>
                    <AboutMe />
                </> */}
            </View>
        </View>
    );
};
