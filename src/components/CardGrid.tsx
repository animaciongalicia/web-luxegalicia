/**
 * Rejilla equilibrada: elige el número de columnas según el número de
 * tarjetas para que no queden huecos, y centra la última fila cuando el
 * total es impar. Todas las tarjetas de una fila tienen la misma altura.
 */
export function cardWidth(count: number, maxCols: 2 | 3 | 4 = 3) {
  if (count <= 1) return "w-full max-w-md";
  if (maxCols >= 4 && count % 4 === 0) return "w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)]";
  if (maxCols === 2 || (count % 2 === 0 && count % 3 !== 0)) return "w-full sm:w-[calc(50%-1rem)]";
  return "w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)]";
}

export default function CardGrid({
  count,
  maxCols = 3,
  children,
  className = "",
}: {
  count: number;
  maxCols?: 2 | 3 | 4;
  children: (widthClass: string) => React.ReactNode;
  className?: string;
}) {
  const narrow = maxCols === 2 || (count % 2 === 0 && count % 3 !== 0 && !(maxCols >= 4 && count % 4 === 0));
  return (
    <div className={`mx-auto flex flex-wrap justify-center gap-8 ${narrow ? "max-w-5xl" : ""} ${className}`}>
      {children(cardWidth(count, maxCols))}
    </div>
  );
}
