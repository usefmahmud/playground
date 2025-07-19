import FolderTree from "@/components/features/folder-tree/folder-tree";

import { type FolderTreeType } from "@/types/folder-tree";

const DATA: FolderTreeType[] = [
  {
    id: "1",
    name: "Root Folder",
    isOpen: true,
    children: [
      {
        id: "2",
        name: "Sub Folder 1",
        isOpen: true,
        children: [
          {
            id: "3",
            name: "Sub Folder 1.1",
            isLeaf: true,
          },
          {
            id: "4",
            name: "Sub Folder 1.2",
            isLeaf: true,
          },
        ],
      },
      {
        id: "5",
        name: "Sub Folder 2",
        isLeaf: true,
      },
    ],
    isLeaf: false,
  },
  {
    id: "6",
    name: "Another Root Folder",
    isOpen: false,
    children: [
      {
        id: "7",
        name: "Sub Folder 3",
        isLeaf: true,
      },
    ],
  },
];

const FolderTreePage = () => {
  return (
    <div>
      <FolderTree tree={DATA} />
    </div>
  );
};

export default FolderTreePage;
