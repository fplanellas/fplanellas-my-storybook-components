import React from "react";
import "./mylabel.css";

export interface MyLabelProps {
  /**
   * que texto quieres poner?
   */
  label: string;
  /**
   * Que color quieres usar
   */
  fontColor?: string;
  /**
   * que tamaño quieres?
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * Elige entre mayúsculas y minúsculas
   */
  AllCaps?: boolean;
  /**
   * Elige el color entre estos tres
   */
  color?: "primary" | "secondary" | "tertiary";
}

export const MyLabel = ({
  label = "No Label",
  fontColor,
  size = "normal",
  AllCaps = false,
  color = "primary",
}: MyLabelProps) => {
  const capitalize = AllCaps ? "text-capitalize" : "";
  return (
    <span
      className={`label ${size} ${AllCaps} text-${color} ${capitalize}`}
      style={{ color: fontColor }}
    >
      {label}
    </span>
  );
};
