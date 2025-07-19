import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import type { FolderTreeType } from "@/types/folder-tree";
import { File, Folder, FolderOpen } from "lucide-react";
import { useState } from "react";

interface FolderTreeProps {
  tree: FolderTreeType[];
}

const FolderTree = ({ tree }: FolderTreeProps) => {
  const [treeData, setTreeData] = useState(tree);

  const handleCollapse = (id: string) => {
    const toggleItemById = (items: FolderTreeType[]): FolderTreeType[] => {
      return items.map((item) => {
        if (item.id === id) {
          return { ...item, isOpen: !item.isOpen };
        } else if (item.children && item.children.length > 0) {
          return { ...item, children: toggleItemById(item.children) };
        }
        return item;
      });
    };

    setTreeData((prevTree) => toggleItemById(prevTree));
  };

  return (
    <div>
      {treeData.map((folder) => (
        <Collapsible
          key={folder.id}
          open={folder.isOpen}
          onOpenChange={() => handleCollapse(folder.id)}
        >
          <CollapsibleTrigger>
            <FolderTreeItem
              name={folder.name}
              type={folder.isLeaf ? "file" : "folder"}
              isOpen={folder.isOpen}
            />
          </CollapsibleTrigger>
          <CollapsibleContent className="ms-5">
            {folder.children && folder.children.length > 0 && (
              <FolderTree tree={folder.children} />
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
