import { LucideProps, icons } from "lucide-react";

export type IconName = keyof typeof icons;

export type IconProps = {
  name: IconName;
} & LucideProps;
