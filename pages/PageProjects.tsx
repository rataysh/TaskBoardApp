/** @format */

import {useState} from "react";
import {View} from "react-native";
import {ButtonAdd} from "../components/ButtonAdd";
import {EachProject} from "../components/projects/EachProject";
import {Divider, Text} from "react-native-paper";
import {useTypedSelector} from "../src/hooks/useTypedSelector";
import {projectPage} from "../style/pageProgectStyle";
import {divider} from "../style/variables";

export const PageProjects: React.FC = () => {
    const [createNewProjectModal, setCreateNewProjectModal] =
        useState<boolean>(false);

    const dataProject = useTypedSelector((state) => state.projects);

    return (
        <View style={projectPage.projectList}>
            <View>
                <View style={projectPage.header}>
                    <Text variant='displayMedium'>Task Board</Text>
                    <Divider style={divider.dividerDefault} />
                </View>
                <View style={{marginTop: 18}}>
                    {dataProject.map((project) => (
                        <EachProject project={project} key={project.id} />
                    ))}
                </View>
            </View>
            {/* <CreateNewProjectModal
                    active={createNewProjectModal}
                    setActive={setCreateNewProjectModal}
                /> */}
            <ButtonAdd
                setActive={setCreateNewProjectModal}
                // text='Create new project'
            />
        </View>
    );
};
