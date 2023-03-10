import { useState, useEffect } from "react";

type IState<T> = T | undefined | (() => T | undefined);

export function useLocalStorage<T>(key: string, initialValue?: IState<T>) {
    const [state, setState] = useState<T | undefined>(() => {
        const jsonValue = localStorage.getItem(key);
        if (jsonValue == null) {
            if (typeof initialValue === "function") {
                return (initialValue as () => T | undefined)();
            } else {
                return initialValue;
            }
        } else {
            return JSON.parse(jsonValue);
        }
    });

    useEffect(() => {
        if (state === undefined) {
            localStorage.removeItem(key);
            return;
        }

        console.log(state);

        localStorage.setItem(key, JSON.stringify(state));
    }, [state, key]);

    return [state, setState] as [T | undefined, typeof setState];
}
