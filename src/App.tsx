import { Routes, Route } from "react-router-dom";
import HomePage from "@/routes/home-page";
import FolderTreePage from "@/routes/folder-tree-page";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/folder-tree" element={<FolderTreePage />} />
      </Routes>
    </div>
  );
}

export default App;
