import React from "react";
import Board from "@lourenci/react-kanban";
import "@lourenci/react-kanban/dist/styles.css";

/**
 * Componente KanbanBoard
 * Muestra un tablero Kanban con columnas y tarjetas de ejemplo.
 */
export default function KanbanBoard() {
  const board = {
    columns: [
      {
        id: 1,
        title: "Impresión",
        cards: [
          {
            id: 1,
            title: "Pedido #1234",
            description: "Cliente: ACME, Metros: 500"
          }
        ]
      },
      {
        id: 2,
        title: "Laminado",
        cards: []
      },
      {
        id: 3,
        title: "Corte",
        cards: []
      }
    ]
  };

  return (
    <div style={{ padding: 20 }}>
      <h3>Tablero Kanban</h3>
      <Board
        initialBoard={board}
        allowAddCard={{ on: "top" }}
        allowRemoveCard
        onCardDragEnd={(card, source, destination) => {
          console.log("Card moved:", card, source, destination);
        }}
      />
    </div>
  );
}
