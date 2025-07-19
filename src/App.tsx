import { Routes, Route } from "react-router-dom";
import FolderTreePage from "@/routes/folder-tree-page";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/folder-tree" element={<FolderTreePage />} />
      </Routes>
    </div>
  );
}

export default App;
