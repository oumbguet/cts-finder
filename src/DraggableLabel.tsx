import { useDrag } from "react-dnd";

export const DraggableLabel = ({ label }: { label: string }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "LABEL",
    item: { label },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    // @ts-ignore
    <div ref={drag} key={label} style={{padding: "4px", borderRadius: "4px", backgroundColor: "#ffffff", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", width: "100%", boxSizing: "border-box"}}>
        {label}
    </div>
  );
};
