import React from 'react'
import { MainTitle } from '../Components/MainTitleComponent';
import { CardComponent } from '../Components/CardComponent';
import { SearchBar } from '../Components/SearchBarComponent';
import { useState } from 'react';
import { nfd } from 'unorm';
import {
    BookText,
    Blocks,
    Puzzle,
    Split,
    BrainCircuit,
    Ampersands,
    Divide,
    Route,
    Workflow,
    Binary,
    RefreshCcw,
    FileText,
    Database,
    Brain,
    Server,
    Link,
    NotepadText,
    FileType,
    Box,
    Dna,
    Apple
} from 'lucide-react';
import 'animate.css';


const MainScreen = () => {

    const arrayTopics = [

        {
            id: 1,
            title: 'Tecnologías de la información',
            description: 'Se abordan temas básicos, variables, algoritmos, pseudocódigo, punteros, diagramas de flujo.',
            route: '/Aprendiendo',
            icons: [
                <Blocks size={27} className='text-[#5cafad] p-0.5 m-1 ' />,
                <Puzzle size={27} className='text-[#5cafad] p-0.5 m-1' />,
                <BookText size={27} className='text-[#5cafad] p-0.5 m-1' />,
            ],
        },

        {
            id: 2,
            title: 'Emprendiemiento e innovación',
            description: 'Se abordan temas como valores, distintos tipos de operadores y distintos tipos de expresiones.',
            route: '/Expresiones',
            icons: [
                <Ampersands size={27} className='text-icon_color p-0.5 m-1' />,
                <Divide size={27} className='text-icon_color p-0.5 m-1' />,
                <BrainCircuit size={27} className='text-icon_color p-0.5 m-1' />
            ],
        },

        {
            id: 3,
            title: 'Programación Web',
            description: ' Son componentes de la programación que permiten controlar el flujo de ejecución de un programa.',
            route: '/Estructuras-de-control',
            icons: [
                <Split size={27} className='text-icon_color p-0.5 m-1' />,
                <Workflow size={27} className='text-icon_color p-0.5 m-1' />,
                <RefreshCcw size={27} className='text-icon_color p-0.5 m-1' />
            ],
        },

        {
            id: 4,
            title: 'Diseño de Software',
            description: 'Son las que organizan nuestro proyecto en ejecución, se abordan sus distintas clasificaciones.',
            route: '/Estructuras-de-datos',
            icons: [
                <FileText size={27} className='text-icon_color p-0.5 m-1' />,
                <Route size={27} className='text-icon_color p-0.5 m-1' />,
                <Binary size={27} className='text-icon_color p-0.5 m-1' />
            ],
        },

        {
            id: 5,
            title: 'Soporte TI',
            description: 'Se refiere a un conjunto de datos relacionados entre sí que pertenecen a un mismo contexto.',
            route: '/Bases-de-datos',
            icons: [
                <Database size={27} className='text-icon_color p-0.5 m-1' />,
                <Server size={27} className='text-icon_color p-0.5 m-1' />,
                <Brain className='text-icon_color p-0.5 m-1' />,

            ],
        },
    ];


    const [topic, setTopic] = useState(arrayTopics);

    const [search, setSearch] = useState('');

    const searchTopic = topic.filter(topic =>
        (topic.title).toLowerCase().includes(nfd(search).toLowerCase())) ||
        (topic.description).toLowerCase().includes(nfd(search).toLowerCase());


    return (
        <>
            <div className='flex justify-normal items-center flex-col animate__animated animate__fadeInDown'>
                <MainTitle>
                    Temas de Peritazgo 2024
                </MainTitle>
                <SearchBar search={search} setSearch={setSearch} />
                <div className='flex flex-wrap items-center justify-center gap-x-36 gap-y-16 p-8'>
                    {searchTopic.map(renderTopic => (<CardComponent
                        key={renderTopic.id}
                        route={renderTopic.route}
                        title={renderTopic.title}
                        description={renderTopic.description}
                        icons={renderTopic.icons}
                    />))}
                </div>
            </div>
        </>


    )
}

export default MainScreen