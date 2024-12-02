import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({}); // Ensure an initial empty object
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`https://open.er-api.com/v6/latest/${currency}`)
            .then((res) => res.json())
            .then((res) => {
                if (res.rates) {
                    setData(res.rates); // Use `res.rates` directly
                } else {
                    setData({});
                }
            })
            .catch(() => setData({})) // Handle errors gracefully
            .finally(() => setLoading(false));
    }, [currency]);

    return { data, loading };
}

export default useCurrencyInfo;
