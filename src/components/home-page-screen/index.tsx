import { Content, Wrapper } from './styled';

import Button from '@/components/button';

const HomePageScreen = () => {
  return (
    <Wrapper>
      <Content>
        <h1 data-testid="main-title">Book your doggy spa day!</h1>
        <Button to="/book-appointment" background="primary">
          Book Appointment
        </Button>
      </Content>
    </Wrapper>
  );
};

export default HomePageScreen;
