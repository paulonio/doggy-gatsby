import {
  Content,
  ContentWrapper,
  FooterItem,
  SocialLink,
  SocialsWrapper,
  StyledLink,
  Wrapper,
} from './styled';

import EmailForm from '@/components/email-form';
import Policy from '@/components/policy';
import { NAVIGATION_LINKS_MOCK, SERVICES_LINKS_MOCK } from '@/constants/footer';
import { SOCIALS } from '@/constants/socials';

const Footer = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Content>
          <FooterItem>
            <h4>Customer Service</h4>
            {SERVICES_LINKS_MOCK.map(({ href, text }) => {
              return (
                <StyledLink to={href} key={text} $size="m">
                  {text}
                </StyledLink>
              );
            })}
          </FooterItem>
          <FooterItem>
            <EmailForm />
            <div>
              <h4>Connect With Us On Social Media</h4>
              <SocialsWrapper>
                {SOCIALS.map(({ href, Icon }) => (
                  <SocialLink href={href} key={href}>
                    <Icon />
                  </SocialLink>
                ))}
              </SocialsWrapper>
            </div>
          </FooterItem>
          <FooterItem>
            <h4>Navigation</h4>
            {NAVIGATION_LINKS_MOCK.map(({ href, text }) => {
              return (
                <StyledLink to={href} key={text} $size="s">
                  {text}
                </StyledLink>
              );
            })}
          </FooterItem>
        </Content>
      </ContentWrapper>
      <Policy />
    </Wrapper>
  );
};

export default Footer;
