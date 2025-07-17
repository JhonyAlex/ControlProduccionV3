import React from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "../components/MDBox";
import MDTypography from "../components/MDTypography";
import Board from "@lourenci/react-kanban";
import DragScrollWrapper from "../components/DragScrollWrapper";
import "@lourenci/react-kanban/dist/styles.css";
import "assets/css/custom-scrollbar.css";

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
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={3} px={2}>
        <MDTypography variant="h5" gutterBottom>
          Tablero Kanban
        </MDTypography>
        <MDBox
          className="react-kanban-scroll"
          sx={{
            width: "100%",
            cursor: "grab",
          }}
        >
          <DragScrollWrapper>
            <MDBox sx={{ minWidth: "1200px" }}>
              <Board
                initialBoard={board}
                allowAddCard={{ on: "top" }}
                allowRemoveCard
                onCardDragEnd={(card, source, destination) => {
                  console.log("Card moved:", card, source, destination);
                }}
              />
            </MDBox>
          </DragScrollWrapper>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}
