import { useRef, useEffect } from "react";
import map from './assets/map.png';
import { stops } from "./data";
import { DropZone } from "./DropZone";

const Map = ({ onResize, assignments, setAssignments, toggleSolution }: any) => {
    const handleDrop = (zoneId: any, label: any) => {
        setAssignments((prev: any) => ({ ...prev, [zoneId]: label }));
    };
    const imgRef = useRef(null);

    useEffect(() => {
        const img: any = imgRef.current;

        if (!img) return;

        const observer = new ResizeObserver(() => {
            const { width, height } = img.getBoundingClientRect();
            onResize?.({ width, height });
        });

        observer.observe(img);

        // Cleanup
        return () => observer.disconnect();
    }, [onResize]);

    return (
        <div style={{ position: "relative", flexGrow: 2, borderRadius: "8px", overflow: "hidden" }}>
            <img ref={imgRef} src={map} id="map" alt="Map" style={{
                objectFit: 'contain',
                borderRadius: "8px",
                width: '100%',
                height: 'auto',
            }} />
            {toggleSolution && stops.map((stop) => (
                <DropZone id={stop.name} key={stop.name} position={stop.position} assignedLabel={assignments[stop.name]} onDrop={handleDrop} removeLabel={() => {
                    setAssignments((prev: any) => {
                        const newAssignments = { ...prev };
                        delete newAssignments[stop.name];
                        return newAssignments;
                    });
                }} />
            ))}
        </div>
    );
};

export default Map;
