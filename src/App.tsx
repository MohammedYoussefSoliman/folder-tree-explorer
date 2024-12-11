import "./App.css";

import AsideExplorer from "./components/AsideExplorer/AsideExplorer";

import { sideItems } from "./data";

function App() {
  return (
    <main>
      <div className="main-content">
        <h1>Folder Explorer Tree</h1>
        <AsideExplorer sideItems={sideItems} />
      </div>
    </main>
  );
}

export default App;
