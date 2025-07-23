import { Routes, Route } from "react-router-dom";
import HomePage from "@/routes/home-page";
import FolderTreePage from "@/routes/folder-tree-page";
import VirtualizedListPage from "@/routes/virtualized-list-page";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/folder-tree" element={<FolderTreePage />} />
        <Route path="/virtualized-list" element={<VirtualizedListPage />} />
      </Routes>
    </div>
  );
}

export default App;
