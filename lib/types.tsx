import { ReactNode } from "react";

export interface Integration {
    id: string;
    name: string;
    icon: ReactNode;
    description: string;
    category: string;
    color: string;
    bgColor: string;
    textColor: string;
    popular: boolean;
    status: "Available" | "Coming Soon";
}
