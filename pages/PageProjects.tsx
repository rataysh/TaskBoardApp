/** @format */

import {useState} from "react";
import {Text, View} from "react-native";
import {ButtonAdd} from "../components/ButtonAdd";
import {projectPage} from "../style/pageProgectStyle";
import {dataProject} from "../src/offlineData";
import {EachProject} from "../components/projects/EachProject";
// import React, {useState} from "react";
// import {ButtonAdd} from "../components/ButtonAdd";
// import {EachProject} from "../components/projects/EachProject";
// import "../styles/projects.scss";
// import {AboutMe} from "../components/footer/footer";
// import {CreateNewProjectModal} from "../components/projects/CreateNewProjectModal";
// import {useTypedSelector} from "../hooks/useTypedSelector";

export const PageProjects: React.FC = () => {
    const [createNewProjectModal, setCreateNewProjectModal] =
        useState<boolean>(false);

    // const dataProject = useTypedSelector((state) => state.projects);

    return (
        <View>
            <View>
                <Text>Task Board</Text>
                <View>
                    <ButtonAdd
                        setActive={setCreateNewProjectModal}
                        text='Create new project'
                    />

                    <View>
                        {dataProject.map((project) => (
                            <EachProject project={project} key={project.id} />
                        ))}
                    </View>
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
