import { createContext } from "react";

interface ToastifyContextType {
    showToast: () => unknown;
}

export const ToastifyCreateContext = createContext<ToastifyContextType | undefined>(undefined)