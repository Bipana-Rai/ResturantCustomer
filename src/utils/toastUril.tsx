// src/utils/toastUtil.ts
import { toast } from "sonner";

export const showToast = (
  message: string,
  type: "success" | "error" | "info" | "warning" = "info",
  description?: string
) => {
  const backgroundColors = {
    success: "#4ade80", // Green
    error: "#f87171", // Red
    info: "#2563eb", // Blue
    warning: "#f59e0b", // Yellow
  };

  toast(message, {
    description,
    style: {
      backgroundColor: backgroundColors[type],
      color: "#FFFFFF",
      fontSize:"16px"
    },
  });
};
