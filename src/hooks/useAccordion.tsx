import { useState } from 'react';

interface Props {
    isActive: Function;
    setPanel: Function;
}

const useAccordion = (): Props => {
    const [activePanel, setActivePanel] = useState<string>('');

    const setPanel = (panel): void => setActivePanel(panel.toString());
    const isActive = (panel): boolean => activePanel === panel.toString();

    return {
        isActive,
        setPanel,
    };
};

export default useAccordion;
