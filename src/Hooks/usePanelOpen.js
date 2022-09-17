import { useState } from "react";
export function usePanelOpen() {
    const [open, setOpen] = useState(true);
    return {
        open,
        setOpen
    };
}