import { useDrop } from "react-dnd";

export const DropZone = ({ id, solution, position, assignedLabel, onDrop, removeLabel, toggleSolution, checkResult }: any) => {
    const [{ isOver, canDrop }, drop] = useDrop(() => ({
        accept: "LABEL",
        drop: (item: any) => onDrop(id, item.label),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }));

    const isCorrect = () => {
        console.log("Check result", checkResult);
        if (!assignedLabel || !checkResult) return "white";

        return assignedLabel === solution ? "rgba(117, 255, 117, 1)" : "rgba(255, 128, 128, 1)";
    }
    const highlight = isOver && canDrop ? "rgba(0,255,0,1)" : isCorrect();

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
                color: "black",
                fontSize: "0.9em",
                fontWeight: "bold",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                verticalAlign: "middle",
                textAlign: "center",
                lineHeight: `${position[3] * 75}%`,
                cursor: assignedLabel ? "pointer" : "default",
            }}
            onClick={removeLabel}
        >
            {toggleSolution ? solution : assignedLabel}
        </div>
    );
};
