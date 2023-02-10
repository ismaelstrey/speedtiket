import React from 'react';
import { KanbanColumn } from './_kanbanColumn/KanbanColumn';
import { KanbanContainer } from './_kanbanContainer';
import { KanbanContainerCard } from './_kanbanContainerCard';

// import { Container } from './styles';

const Kanban = () =>

    <KanbanContainer>
        <KanbanColumn titleColor="bg-red-500" textColor="text-white" title="A FAZER"><KanbanContainerCard/><KanbanContainerCard/><KanbanContainerCard/></KanbanColumn>
        <KanbanColumn titleColor="bg-green-500" textColor="text-white" title="ATENDENDO"><KanbanContainerCard/><KanbanContainerCard/><KanbanContainerCard/></KanbanColumn>
        <KanbanColumn titleColor="bg-yellow-500" textColor="text-white" title="PAUSADOS"><KanbanContainerCard/><KanbanContainerCard/><KanbanContainerCard/></KanbanColumn>
        <KanbanColumn titleColor="bg-blue-500" textColor="text-white" title="RETORNADOS"><KanbanContainerCard/><KanbanContainerCard/><KanbanContainerCard/></KanbanColumn>
        <KanbanColumn titleColor="bg-orange-500" textColor="text-white" title="EXPIRADOS"><KanbanContainerCard/><KanbanContainerCard/><KanbanContainerCard/></KanbanColumn>
    </KanbanContainer>
export { Kanban };