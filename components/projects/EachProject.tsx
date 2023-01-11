/** @format */

import {IProject} from "../../src/interface/IProject";
import {useState} from "react";
import {Avatar, Card, IconButton} from "react-native-paper";
import {projectPage} from "../../style/pageProgectStyle";
import {TouchableOpacity} from "react-native";
import {DelConfirmModal} from "../DelConfirmModal";
import {useNavigation} from "@react-navigation/native";
import {RootStackParams} from "../../src/navigation/ScreenRoots";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {useDispatch} from "react-redux";

interface IEachProjects {
    project: IProject;
}

export const EachProject: React.FC<IEachProjects> = ({project}) => {
    //  flag for modal window ACEPT or NOT del projects
    const [active, setActive] = useState<boolean>(false);
    const navigation =
        useNavigation<NativeStackNavigationProp<RootStackParams>>();
    const dispatch = useDispatch();

    const goToTask = () => {
        dispatch({
            type: "GET_ALL_TASKS",
            payload: project.tasks?.length !== 0 ? project.tasks : [],
        });
        dispatch({
            type: "PROJECT_GET_ID",
            payload: project.id,
        });
        navigation.navigate("Tasks");
    };

    return (
        <TouchableOpacity
            onPress={() => {
                goToTask();
            }}>
            <Card.Title
                title={project.title}
                titleVariant='titleLarge'
                subtitle={project.description}
                subtitleNumberOfLines={3}
                style={projectPage.projectBox}
                left={(props) => <Avatar.Icon {...props} icon='folder' />}
                right={(props) => (
                    <IconButton
                        {...props}
                        icon='delete-outline'
                        onPress={() => {
                            setActive(() => true);
                        }}
                    />
                )}
            />

            <>
                <DelConfirmModal
                    delItem={project}
                    active={active}
                    setActive={setActive}
                />
            </>
        </TouchableOpacity>
    );
};
