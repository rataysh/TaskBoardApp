/** @format */

import {Box, Text} from "native-base";
import React from "react";
// import {Droppable} from "react-beautiful-dnd";
import {ITask} from "../../src/interface/ITask";
import {EachTask} from "./EachTask";

interface IEachBoard {
    title: string;
    tasks: ITask[];
}

export const EachBoard: React.FC<IEachBoard> = ({tasks, title}) => {
    return (
        // <Droppable droppableId={title}>
        // {(provided) => (
        <Box
        // className='eachBoard'
        // {...provided.droppableProps}
        // ref={provided.innerRef}
        >
            <Text>{title}</Text>
            {tasks
                .sort((a, b) => (a.index! > b.index! ? 1 : -1))
                .map((task: ITask, index) => {
                    return <EachTask task={task} key={task.id} index={index} />;
                })}

            {/* {provided.placeholder} */}
        </Box>
        // )}
        // </Droppable>
    );
};
