import {
  FooterContainer,
  FooterContent,
  FooterConnect,
  SocialIcons,
  FooterSlogan,
  ContactDetails,
} from "./footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterConnect>Connect With Us</FooterConnect>
        <SocialIcons>
          <a
            href="https://github.com/mdsamir8863?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-github fa-2x" aria-hidden="true"></i>
          </a>
          {/* <a
            href="/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
          </a> */}
          <a
            href="https://www.linkedin.com/in/md-samir-28257a244/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
          </a>
        </SocialIcons>
        <ContactDetails>
          <h3>Email: Ansari131211@gmail</h3>
          <h3>Phone:8863987825</h3>
        </ContactDetails>
        <FooterSlogan>
          <p>UrbanStyle: Where Fashion Meets Comfort!</p>
        </FooterSlogan>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
