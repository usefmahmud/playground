import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import type { FolderTreeType } from "@/types/folder-tree";
import { File, Folder, FolderOpen } from "lucide-react";
import { useState } from "react";

interface FolderTreeWithStateProps {
  tree: FolderTreeType[];
}

export const FolderTreeWithState = ({ tree }: FolderTreeWithStateProps) => {
  const [treeData, setTreeData] = useState(tree);

  const toggleItemById = (
    items: FolderTreeType[],
    id: string
  ): FolderTreeType[] => {
    return items.map((item) => {
      if (item.id === id) {
        return { ...item, isOpen: !item.isOpen };
      } else if (item.children && item.children.length > 0) {
        return { ...item, children: toggleItemById(item.children, id) };
      }
      return item;
    });
  };

  const handleToggle = (id: string) => {
    setTreeData((prevTree: FolderTreeType[]) => toggleItemById(prevTree, id));
  };

  return <FolderTree tree={treeData} onToggle={handleToggle} />;
};

interface FolderTreeProps {
  tree: FolderTreeType[];
  onToggle?: (id: string) => void;
}

const FolderTree = ({ tree, onToggle }: FolderTreeProps) => {
  const handleCollapse = (id: string) => {
    if (onToggle) {
      onToggle(id);
    }
  };

  return (
    <div>
      {tree.map((folder) => (
        <Collapsible
          key={folder.id}
          open={folder.isOpen}
          onOpenChange={() => handleCollapse(folder.id)}
        >
          <CollapsibleTrigger>
            <FolderTreeItem
              name={folder.name}
              type={folder.type}
              isOpen={folder.isOpen}
            />
          </CollapsibleTrigger>
          <CollapsibleContent className="ms-2 ps-3 border-l-1 border-gray-600/30">
            {folder.children && folder.children.length > 0 && (
              <FolderTree tree={folder.children} onToggle={onToggle} />
            )}
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  );
};

export default FolderTree;

interface FolderTreeItemProps {
  name: string;
  type: "file" | "folder";
  isOpen?: boolean;
}

const FolderTreeItem = ({ name, type, isOpen }: FolderTreeItemProps) => {
  return (
    <button
      className={cn(
        "flex  items-center gap-1  rounded-sm cursor-pointer",
        isOpen && type === "file" && "bg-black/5"
      )}
    >
      <span>
        {isOpen ? (
          type === "folder" ? (
            <FolderOpen className="size-4" />
          ) : (
            <File className="size-4" />
          )
        ) : type === "folder" ? (
          <Folder className="size-4" />
        ) : (
          <File className="size-4" />
        )}
      </span>
      <h1>{name}</h1>
    </button>
  );
};
