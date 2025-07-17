import React, { useState } from "react";

// ¡La nueva estrella! Importamos los componentes de @hello-pangea/dnd
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

// Importaciones de tu sistema de diseño (se mantienen igual)
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import Card from "@mui/material/Card";

// Estructuras de datos (las mismas que tenías, ¡perfecto!)
interface CardData {
  id: string; // Es mejor usar strings para los IDs en D&D
  title: string;
  description?: string;
}

interface ColumnData {
  id: string;
  title: string;
  cards: CardData[];
}

interface BoardData {
  [key: string]: ColumnData; // Usamos un objeto para un acceso más fácil por ID
}

// Datos iniciales del tablero (adaptados a los nuevos tipos)
const initialBoard: BoardData = {
  "columna-impresion": {
    id: "columna-impresion",
    title: "Impresión",
    cards: [
      { id: "card-1", title: "Pedido #1234", description: "Cliente: ACME, Metros: 500" },
      { id: "card-2", title: "Pedido #5678", description: "Cliente: Stark Ind, Metros: 1200" },
    ],
  },
  "columna-laminado": {
    id: "columna-laminado",
    title: "Laminado",
    cards: [],
  },
  "columna-corte": {
    id: "columna-corte",
    title: "Corte",
    cards: [],
  },
};

export default function KanbanBoard() {
  const [board, setBoard] = useState<BoardData>(initialBoard);

  // La función MÁGICA: se ejecuta cuando sueltas una tarjeta.
  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;

    // 1. Si se suelta fuera de una columna, no hacemos nada.
    if (!destination) {
      return;
    }

    // 2. Si se suelta en la misma posición, no hacemos nada.
    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    const startColumn = board[source.droppableId];
    const endColumn = board[destination.droppableId];

    // 3. Mover dentro de la misma columna
    if (startColumn === endColumn) {
      const newCards = Array.from(startColumn.cards);
      const [removed] = newCards.splice(source.index, 1);
      newCards.splice(destination.index, 0, removed);

      const newColumn = {
        ...startColumn,
        cards: newCards,
      };

      setBoard({
        ...board,
        [newColumn.id]: newColumn,
      });
      return;
    }

    // 4. Mover entre columnas diferentes
    const startCards = Array.from(startColumn.cards);
    const [removed] = startCards.splice(source.index, 1);
    const newStartColumn = {
      ...startColumn,
      cards: startCards,
    };

    const endCards = Array.from(endColumn.cards);
    endCards.splice(destination.index, 0, removed);
    const newEndColumn = {
      ...endColumn,
      cards: endCards,
    };

    setBoard({
      ...board,
      [newStartColumn.id]: newStartColumn,
      [newEndColumn.id]: newEndColumn,
    });
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={3} px={2}>
        <MDTypography variant="h5" gutterBottom>
          Tablero Kanban 2.0
        </MDTypography>
        {/* El contexto general que maneja todo el estado del D&D */}
        <DragDropContext onDragEnd={onDragEnd}>
          <MDBox display="flex" gap={2} alignItems="flex-start">
            {Object.values(board).map((column) => (
              // Cada columna es una zona "Droppable"
              <Droppable key={column.id} droppableId={column.id}>
                {(provided, snapshot) => (
                  <MDBox
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    sx={{
                      backgroundColor: snapshot.isDraggingOver ? "action.hover" : "grey.200",
                      padding: 2,
                      borderRadius: 1,
                      width: 300,
                      minHeight: 500,
                    }}
                  >
                    <MDTypography variant="h6">{column.title}</MDTypography>
                    {column.cards.map((card, index) => (
                      // Cada tarjeta es un elemento "Draggable"
                      <Draggable key={card.id} draggableId={card.id} index={index}>
                        {(provided, snapshot) => (
                          <MDBox
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            mb={1.5}
                          >
                            <Card
                              sx={{
                                padding: 2,
                                boxShadow: snapshot.isDragging ? "0px 5px 15px rgba(0,0,0,0.3)" : "default",
                              }}
                            >
                              <MDTypography variant="subtitle2">{card.title}</MDTypography>
                              <MDTypography variant="body2">{card.description}</MDTypography>
                            </Card>
                          </MDBox>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder} {/* Espacio reservado para la tarjeta mientras se arrastra */}
                  </MDBox>
                )}
              </Droppable>
            ))}
          </MDBox>
        </DragDropContext>
      </MDBox>
    </DashboardLayout>
  );
}