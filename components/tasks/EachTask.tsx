/** @format */

import moment from "moment";
import {Box, Text} from "native-base";
import React, {useEffect, useState} from "react";
import {TouchableOpacity} from "react-native";
// import {Draggable} from "react-beautiful-dnd";
// import {BsCalendar} from "react-icons/bs";
// import {MdDragIndicator, MdOutlineDeleteForever} from "react-icons/md";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../src/hooks/useTypedSelector";
import {ITask} from "../../src/interface/ITask";

interface IEachTask {
    task: ITask;
    index: number;
}

export const EachTask: React.FC<IEachTask> = ({task, index}) => {
    const dispatch = useDispatch();
    // const certainProject = useLocation();
    const projectId = useTypedSelector((state) => state.idProject);

    const deleteTask = () => {
        dispatch({
            type: "DEL_TASK_GET_ID_AND_TASK",
            payload: {
                projId: projectId,
                task: task,
            },
        });
        dispatch({
            type: "POP_UP_OPEN_DEL_TASK",
        });
    };

    // for precedence COLOR change
    const [precedence, setPrecedence] = useState(task?.precedence);
    const [colorPrecedence, setColorPrecedence] = useState("");
    useEffect(() => {
        setPrecedence(task?.precedence);
    }, [task?.precedence]);
    useEffect(() => {
        setColorPrecedence(
            precedence === "low"
                ? "#46f7b7"
                : precedence === "medium"
                ? "#F5EB88"
                : "#FFA775"
        );
    }, [precedence]);

    return (
        // <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
        //     {(provided, snapshot) => (
        <TouchableOpacity
            onPress={() => {
                dispatch({
                    type: "POP_UP_OPEN_EACH_TASK",
                });
                dispatch({
                    type: "TASK_GET_ID",
                    payload: task.id,
                });
            }}>
            <Box

            // ref={provided.innerRef}
            // {...provided.draggableProps}
            // {...provided.dragHandleProps}
            // style={{
            //     backgroundColor: snapshot.isDragging ? "#39bae8" : "",
            //     ...provided.draggableProps.style,
            // }}
            >
                {/* <MdOutlineDeleteForever
                        className='del'
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            deleteTask();
                        }}
                    /> */}

                {/* <span className='dnd'><MdDragIndicator /></span> */}
                <Text style={{backgroundColor: colorPrecedence}}>
                    {task?.precedence + " priority"}
                </Text>
                <Text>{task.title}</Text>
                <Text>{task.description}</Text>
                <Text>
                    <Text>
                        {/* <BsCalendar /> */}
                        {moment(task?.dateCreate).format("DD-MMM-YYYY")}
                    </Text>
                    <Text>
                        <Text>Sub-tasks:</Text>
                        {task.subTasks?.length ?? 0}
                    </Text>
                </Text>
            </Box>
        </TouchableOpacity>
        // )}
        // </Draggable>
    );
};
