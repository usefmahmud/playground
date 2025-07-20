export type FolderTreeType = {
  id: string;
  name: string;
  children?: FolderTreeType[];
  isOpen?: boolean;
  type: "folder" | "file";
};
