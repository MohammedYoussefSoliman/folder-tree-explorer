type FileType = {
  type: "file";
  meta?: string;
};
type FolderType = {
  type: "folder";
  data?: SideItem[];
};

export type SideItem = {
  name: string;
} & (FileType | FolderType);
