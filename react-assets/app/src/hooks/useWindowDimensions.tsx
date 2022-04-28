import { useState, useEffect } from 'react';

type Size = {
  width: number;
  height: number;
};

function getWindowDimensions(): Size {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function useWindowDimensions(): Size {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  const handleResize = (): void => {
    setWindowDimensions(getWindowDimensions());
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
