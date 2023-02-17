import React, {useState, useEffect} from 'react';
import { useTranslation } from "react-i18next";

const ClockDate = () => {
    const { t } = useTranslation();
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 1000);
    }, []);
    return (
        <div className="App">
            <p className='clockDateStyles'>
            {dateState.toLocaleString(t("codeLang"), {
                hour: 'numeric',
                minute: 'numeric',
                hour12: false,
            })}
            </p>
            <p className='clockDateStyles dateSize'>
            {' '}
            {dateState.toLocaleDateString(t("codeLang"), {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
            })}
            </p>
            
        </div>
    );
}

export default ClockDate