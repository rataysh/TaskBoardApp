/** @format */

import {useState} from "react";
import {View} from "react-native";
import {ButtonAdd} from "../components/ButtonAdd";
import {projectPage} from "../style/pageProgectStyle";
import {dataProject} from "../src/offlineData";
import {EachProject} from "../components/projects/EachProject";
import {Divider} from "react-native-paper";
import {Text} from "react-native-paper";


export const PageProjects: React.FC = () => {
    const [createNewProjectModal, setCreateNewProjectModal] =
        useState<boolean>(false);

    // const dataProject = useTypedSelector((state) => state.projects);

    return (
        <View style={projectPage.projectList}>
            <View>
                <View style={{marginTop: 50}}>
                    <Text variant='displayMedium'>Task Board</Text>
                    <Divider style={{paddingBottom: 1}} />
                </View>
                <View style={{marginTop: 18}}>
                    {dataProject.map((project) => (
                        <EachProject project={project} key={project.id} />
                    ))}
                </View>
                {/* <CreateNewProjectModal
                    active={createNewProjectModal}
                    setActive={setCreateNewProjectModal}
                /> */}
            </View>
            <ButtonAdd
                setActive={setCreateNewProjectModal}
                text='Create new project'
            />
        </View>
    );
};
