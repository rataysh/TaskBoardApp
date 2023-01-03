/** @format */

import {IProject} from "../../src/interface/IProject";
import {useState} from "react";
import {Avatar, Card, IconButton} from "react-native-paper";
import {projectPage} from "../../style/pageProgectStyle";
import {Box} from "native-base";
import {TouchableOpacity, View} from "react-native";
import {DelConfirmModal} from "../DelConfirmModal";

interface IEachProjects {
    project: IProject;
}

export const EachProject: React.FC<IEachProjects> = ({project}) => {
    //  flag for modal window ACEPT or NOT del projects
    const [active, setActive] = useState<boolean>(false);

    // const dispatch = useDispatch();

    return (
        <TouchableOpacity onPress={() => {}}>
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
            {/* <Link
                onClick={() => {
                    dispatch({
                        type: "GET_ALL_TASKS",
                        payload:
                            project.tasks?.length !== 0 ? project.tasks : [],
                    });
                }}
                to={`/taskBoard/tasks/${project.id}`}
                state={project}
                style={{textDecoration: "none"}}> */}
            <></>
            {/* </Link> */}
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
