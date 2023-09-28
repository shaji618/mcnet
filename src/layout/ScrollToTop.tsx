import { FC, ReactElement, ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router';

const ScrollToTop: FC<{ children?: ReactNode }> = ({
  children
}): ReactElement => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;
};

export default ScrollToTop;
