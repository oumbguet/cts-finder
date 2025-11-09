import './App.css'
import Map from './Map';
import Menu from './Menu';
import { useState } from 'react';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const [mapSize, setMapSize] = useState({ width: 0, height: 0 });
  const [assignments, setAssignments] = useState({});
  const [toggleSolution, setToggleSolution] = useState(true);

  return (
    <DndProvider backend={HTML5Backend}>
      <h1>TITRE CTS</h1>
      <div style={{display: 'flex', width: '80vw', gap: '10px'}}>
        <Map onResize={setMapSize} assignments={assignments} setAssignments={setAssignments} toggleSolution={toggleSolution} />
        <Menu mapSize={mapSize} assignments={assignments} toggleSolution={() => setToggleSolution(!toggleSolution)} />
      </div>
    </DndProvider>
  );
}

export default App;
