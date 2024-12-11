import { icons } from "lucide-react";

import { IconProps } from "./Icon.types";

export default function Icon({ name, ...rest }: IconProps) {
  const SelectedIcon = icons[name];

  return <SelectedIcon {...rest} />;
}
