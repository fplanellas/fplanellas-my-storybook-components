/// <reference types="react" />
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
export declare const MyLabel: ({ label, fontColor, size, AllCaps, color, }: MyLabelProps) => JSX.Element;
