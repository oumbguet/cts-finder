import { useEffect } from "react";
import { lines, stops } from "./data";
import { DraggableLabel } from "./DraggableLabel";

const Menu = ({ mapSize, assignments, toggleSolution, toggleToggleSolution, checkResult, toggleCheckResult }: { mapSize: { width: number, height: number }, assignments: any, toggleSolution: boolean, toggleToggleSolution: Function, checkResult: boolean, toggleCheckResult: Function }) => {
    const usedLabels = Object.values(assignments);
    const availableLabels = stops.filter((stop: any) => !usedLabels.includes(stop.name));

    useEffect(() => {
        console.log("Map size changed:", mapSize);
    }, [mapSize]);

    return (
        <div style={{flexGrow: '1', backgroundColor: "#f0e6d2", padding: "8px", borderRadius: "8px", display: "flex", flexDirection: "column", gap: "10px", alignItems: "start", "overflowY": "scroll", maxHeight: "70vh"}}>
            {/* {mapHeight},
            {mapWidth} */}
            <h3 style={{alignSelf: "center"}}>Arrêts</h3>
            {lines.map(line => (
                <>
                    <div style={{width: "28px", height: "28px", backgroundColor: line.color, borderRadius: "8px", color: "white", display: "flex", justifyContent: "center"}}>{line.name}</div>
                    {
                        availableLabels.filter(stop => stop.lines.length == 1 && stop.lines.includes(line.name)).map(stop => (
                            <DraggableLabel key={stop.name} label={stop.name} />
                        ))
                    }
                </>
            ))}

            {/* Add multi lines stops here */}
            <div style={{width: "28px", height: "28px", backgroundColor: "white", borderRadius: "8px", color: "black", display: "flex", justifyContent: "center"}}>*</div>
            {
                availableLabels.filter(stop => stop.lines.length > 1).map(stop => (
                    <DraggableLabel key={stop.name} label={stop.name} />
                ))
            }

            <span style={{alignSelf: "center", cursor: "pointer", userSelect: "none"}} onClick={() => toggleCheckResult()}>{checkResult ? "Cacher mon résultat" : "Voir mon résultat"}</span>
            <span style={{alignSelf: "center", cursor: "pointer", userSelect: "none"}} onClick={() => toggleToggleSolution()}>{toggleSolution ? "Cacher la solution" : "Voir la solution"}</span>
        </div>
    );
};

export default Menu;