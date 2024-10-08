import React from "react";

export type InViewHookT<T extends HTMLElement> = {
    ref: React.LegacyRef<T>;
    inView: boolean;
};

export default function useInView<T extends HTMLElement>(): InViewHookT<T> {
    const elementRef = React.useRef<T>(null);
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry?.isIntersecting ?? false);
            },
            {
                threshold: 0.5, // Adjust this threshold as needed
            },
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);
    return { ref: elementRef, inView: isVisible };
}
