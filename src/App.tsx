import './App.css'
import Map from './Map';
import Menu from './Menu';
import { useState } from 'react';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const [mapSize, setMapSize] = useState({ width: 0, height: 0 });
  const [assignments, setAssignments] = useState({});
  const [toggleSolution, setToggleSolution] = useState(false);
  const [checkResult, setCheckResult] = useState(false);

  return (
    <DndProvider backend={HTML5Backend}>
      <h1>CTS FINDER</h1>
      <div style={{display: 'flex', width: '80vw', gap: '10px'}}>
        <Map onResize={setMapSize} assignments={assignments} setAssignments={setAssignments} toggleSolution={toggleSolution} checkResult={checkResult} />
        <Menu mapSize={mapSize} assignments={assignments} toggleSolution={toggleSolution} toggleToggleSolution={() => setToggleSolution(!toggleSolution)} checkResult={checkResult} toggleCheckResult={() => setCheckResult(!checkResult)} />
      </div>
    </DndProvider>
  );
}

export default App;
