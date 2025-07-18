import React, { useRef } from "react";

interface DragScrollWrapperProps {
  children: React.ReactNode;
}

/**
 * DragScrollWrapper
 * Permite desplazamiento horizontal arrastrando con el mouse,
 * excepto sobre columnas o tarjetas Kanban.
 *
 * @param {object} props - Children dentro del wrapper.
 * @returns JSX.Element
 */
export default function DragScrollWrapper({ children }: DragScrollWrapperProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  let isDown = false;
  let startX: number;
  let scrollLeft: number;

  const isExcluded = (target: HTMLElement) => {
    // Devuelve true si hiciste click sobre columna o card
    return target.closest(".react-kanban-column-header") || target.closest(".react-kanban-card");
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isExcluded(e.target as HTMLElement)) {
      // No activar drag-scroll si hiciste click sobre columna/card
      return;
    }
    isDown = true;
    scrollRef.current.classList.add("active");
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
    scrollRef.current.classList.remove("active");
  };

  const handleMouseUp = () => {
    isDown = false;
    scrollRef.current.classList.remove("active");
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      ref={scrollRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      style={{
        overflowX: "auto",
        cursor: "grab",
        width: "100%",
      }}
    >
      {children}
    </div>
  );
}
