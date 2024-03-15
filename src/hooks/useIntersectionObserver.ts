import { useEffect, useRef, useState } from "react";

const useIntersectionObserver = <Element extends HTMLElement>(
  options?: IntersectionObserverInit,
) => {
  const ref = useRef<Element>(null);

  const [observerStatus, setObserverStatus] =
    useState<IntersectionObserverEntry | null>(null);

  const handleIntersectionObserver = (
    enteries: IntersectionObserverEntry[],
  ) => {
    setObserverStatus(enteries?.[0] || null);
  };

  useEffect(() => {
    const element = ref?.current;

    const observer = new IntersectionObserver(
      handleIntersectionObserver,
      options,
    );

    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [options]);

  return {
    ref,
    observerStatus,
  };
};

export default useIntersectionObserver;
