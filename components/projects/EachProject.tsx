/** @format */

import {IProject} from "../../src/interface/IProject";
import {View} from "react-native";
import {useState} from "react";
import {Avatar, Card, Divider, IconButton, Text} from "react-native-paper";
import { projectPage } from "../../style/pageProgectStyle";


interface IEachProjects {
    project: IProject;
}

export const EachProject: React.FC<IEachProjects> = ({project}) => {
    //  flag for modal window ACEPT or NOT del projects
    const [active, setActive] = useState<boolean>(false);

    // const dispatch = useDispatch();

    return (
        <>
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
                        icon='arrow-right'
                        onPress={() => {}}
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
            <>
                {/* <MdOutlineDeleteForever
                        className='del'
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setActive(!active);
                        }}
                    /> */}

                {/* <View>
                    <Text variant='titleLarge'>{project.title}</Text>
                    <Text variant='titleSmall'>{project.description}</Text>
                </View> */}
            </>
            {/* </Link> */}
            <>
                {/* <DelConfirmModal
                    delItem={project}
                    active={active}
                    setActive={setActive}
                /> */}
            </>
        </>
    );
};
