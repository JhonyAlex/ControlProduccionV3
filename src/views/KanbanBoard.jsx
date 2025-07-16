import React from "react";
import Board from "@lourenci/react-kanban";
import "@lourenci/react-kanban/dist/styles.css";

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
            description: "Cliente: ACME, Metros: 500",
          },
        ],
      },
      {
        id: 2,
        title: "Laminado",
        cards: [],
      },
      {
        id: 3,
        title: "Corte",
        cards: [],
      },
    ],
  };

  return (
    <div
      style={{
        width: "100%",
        overflowX: "auto",
        padding: "20px",
      }}
    >
      <h3 style={{ marginBottom: "20px" }}>Tablero Kanban</h3>
      <div style={{ minWidth: "1200px" }}>
        <Board
          initialBoard={board}
          allowAddCard={{ on: "top" }}
          allowRemoveCard
          onCardDragEnd={(card, source, destination) => {
            console.log("Card moved:", card, source, destination);
          }}
        />
      </div>
    </div>
  );
}
