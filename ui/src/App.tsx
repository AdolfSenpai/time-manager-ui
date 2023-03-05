import { useState } from "react";
import React from 'react';
import "src/assets/styles/App.css";
import NavBar from "src/components/NavBar/NavBar";
import TaskList from "src/components/TaskList/TaskList";
import { Task } from "src/models/Task";

function App() {

    const [tasks, changeTasks] = useState<Task[]>([
        {
            id: "1",
            name: "UI позиций для Tally",
            description: "Для сопоставления определенных документов пользователям нужно сопоставлять позиции.Для сопоставления определенных документов пользователям нужно сопоставлять позиции.Для сопоставления определенных документов пользователям нужно сопоставлять позиции.Для сопоставления определенных документов пользователям нужно сопоставлять позиции.Для сопоставления определенных документов пользователям нужно сопоставлять позиции.Для сопоставления определенных документов пользователям нужно сопоставлять позиции.Для сопоставления определенных документов пользователям нужно сопоставлять позиции.Для сопоставления определенных документов пользователям нужно сопоставлять позиции.Для сопоставления определенных документов пользователям нужно сопоставлять позиции.Для сопоставления определенных документов пользователям нужно сопоставлять позиции.",
            link: "https://entera.atlassian.net/browse/EN-1854"
        },
        { id: "2", name: "task2", description: "asdasdasdasdasfsad", link: "" },
        { id: "3", name: "task3" },
    ]);

    return (
        <div className="App">
            <NavBar />
            <TaskList tasks={tasks} name={"Список задач 1"}/>
        </div>
    );
}

export default App;
