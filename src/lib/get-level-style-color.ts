import { TLEVELS } from "@/constants";

export function getLevelStyleColor(level: TLEVELS) {
  let color: string = "";
  switch (level) {
    case "success":
      color = "hsl(var(--success))";
      break;
    case "error":
      color = "hsl(var(--error))";
      break;
    case "warning":
      color = "hsl(var(--warning))";
      break;
    default:
      color = "muted";
      break;
  }
  return color;
}
