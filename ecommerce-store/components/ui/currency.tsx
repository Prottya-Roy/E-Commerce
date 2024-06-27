"use client";

import { useEffect, useState } from "react";

interface CurrencyProps {
    value: string;
};

export const formatter = new Intl.NumberFormat("en-US", {
    style: 'currency',
    currency: 'USD'
});


const Currency: React.FC<CurrencyProps> = ({
    value
}) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <div>
            {formatter.format(Number(value))}
        </div>
    );
};
export default Currency;