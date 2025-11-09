import { useDrop } from "react-dnd";

export const DropZone = ({ id, position, assignedLabel, onDrop, removeLabel }: any) => {
    const [{ isOver, canDrop }, drop] = useDrop(() => ({
        accept: "LABEL",
        drop: (item: any) => onDrop(id, item.label),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }));

    const highlight = isOver && canDrop ? "rgba(0,255,0,1)" : "white";

    return (
        <div
            // @ts-ignore
            ref={drop}
            style={{
                position: "absolute",
                left: `${position[0]}%`,
                top: `${position[1]}%`,
                width: `${position[2]}%`,
                height: `${position[3]}%`,
                borderRadius: "4px",
                border: "1px solid #ccc",
                backgroundColor: highlight,
                fontSize: "0.8em",
                fontWeight: "bold",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                verticalAlign: "middle",
                textAlign: "center",
                lineHeight: `${position[3] * 85}%`,
                cursor: assignedLabel ? "pointer" : "default",
            }}
            onClick={removeLabel}
        >
            {assignedLabel || ""}
        </div>
    );
};
