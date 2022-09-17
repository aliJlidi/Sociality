import { useState } from "react";
export function usePanelActive() {
    const [active, setActive] = useState(true);
    return {
        active,
        setActive
    };
}