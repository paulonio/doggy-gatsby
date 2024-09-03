import { FC, ReactNode } from 'react';

import DiscountPlate from '@/components/discount-plate';
import ErrorBoundary from '@/components/error-boundary';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { offerText } from '@/constants/offers';
import { GlobalStyles } from '@/layouts/global-styles';

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <ErrorBoundary>
        <Header />
        <DiscountPlate description={offerText} />
        {children}
        <Footer />
      </ErrorBoundary>
    </>
  );
};

export default Layout;
