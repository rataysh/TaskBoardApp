/** @format */

import {useNavigation} from "@react-navigation/native";
import {Box, Text, View} from "native-base";
import React, {useEffect, useState} from "react";
import {DelConfirmModal} from "../../components/DelConfirmModal";
import {TaskBoards} from "../../components/tasks/TaskBoards";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {ITask} from "../interface/ITask";

export const ScreenTasks: React.FC = () => {
    const [creatNewTaskModal, setCreatNewTaskModal] = useState<boolean>(false);
    // const project = useLocation();

    // For create new sub-task
    // active modal view
    const chekSubTaskModal = useTypedSelector((state) => state.subTaskView);
    const [createNewSubTask, setCreateNewSubTask] = useState<boolean>(false);
    useEffect(() => {
        setCreateNewSubTask(chekSubTaskModal);
    }, [chekSubTaskModal]);
    // id Progect
    const projectId = useTypedSelector((state) => state.idProject);
    // id task
    const chekTaskIdForSub = useTypedSelector((state) => state.idTask);
    const [taskIdForSub, setTaskIdForSub] = useState<number>(0);
    useEffect(() => {
        setTaskIdForSub(chekTaskIdForSub);
    }, [chekTaskIdForSub]);

    //Pop-up for confirm del Task
    const [modalDeleteTask, setModalDeleteTask] = useState<boolean>(false);
    const checkActiveModalDel = useTypedSelector(
        (state) => state.modalViewDelTask
    );
    useEffect(() => {
        setModalDeleteTask(checkActiveModalDel);
    }, [checkActiveModalDel]);

    // For get allProjects data into reducer
    const allProject = useTypedSelector((state) => state.projects);
    const [eachProjectTasks, setEachProjectTasks] = useState<ITask[]>([]);
    useEffect(() => {
        let eachProject: ITask[] = allProject.filter(
            (proj) => proj.id === projectId
        )[0].tasks;
        setEachProjectTasks(eachProject);
    }, [allProject]);

    // Change title
    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({title: allProject.filter(proj=> proj.id === projectId)[0].title});
    }, []);

    return (
        <Box>
            <Box>
                <Box>
                    {/* <Box>{project.state.title}</Box>
                    <Box>{project.state.description}</Box> */}
                </Box>
                <Box>
                    <Box>
                        {/* <ButtonAdd
                            text='Add new task'
                            setActive={setCreatNewTaskModal}
                        /> */}
                        {/* <creatNewTaskModal
                            tasks={eachProjectTasks}
                            active={creatNewTaskModal}
                            setActive={setCreatNewTaskModal}
                        />
                        <CreateNewTaskModal
                            active={createNewSubTask}
                            setActive={setCreateNewSubTask}
                            tasks={eachProjectTasks}
                            taskIdForSub={taskIdForSub}
                            subFlag={true}
                        /> */}
                        <DelConfirmModal
                            delItem={false}
                            active={modalDeleteTask}
                            setActive={setModalDeleteTask}
                        />
                    </Box>
                    <>
                        <TaskBoards tasks={eachProjectTasks} />
                    </>
                </Box>
            </Box>
        </Box>
    );
};
