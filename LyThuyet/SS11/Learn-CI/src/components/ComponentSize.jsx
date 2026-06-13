import { useState, useEffect, useRef } from 'react';

function useComponentSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  // tham chiếu tới phần tử cần theo dõi
  const ref = useRef();

  // theo dõi sự thay đổi của phần tử hiện tại tham chiếu
  useEffect(() => {  
    const observer = new ResizeObserver((entries) => {
      if (entries[0]) {
        const { width, height } = entries[0].contentRect;
        setSize({ width, height });
      }
    });

    const element = ref.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref]);

  return [ref, size];
}

export default useComponentSize;