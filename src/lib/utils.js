// Utilidades compartidas para los componentes de shadcn/ui
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
