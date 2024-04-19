import { cookies } from "next/headers";
import styles from "./cookie-policy.module.css";
import { Container } from "react-bootstrap";

const CookiePolicy = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <h1 className={styles.heading}>Cookie Policy</h1>
        <p className={styles.subHeading}>
          Denkoit or its associated groups or divisions Cookie Policy
        </p>
        <div className={styles.contaierWrapper}>
          <h5>
            <strong>What are cookies?</strong>
          </h5>
          <p>
            Cookies are small text files stored on your device when you visit a
            website. They are widely used to remember you and your preferences,
            improve your browsing experience, and provide targeted information.
          </p>
          <h5>
            <strong>How We Use Cookies</strong>
          </h5>
          <p>
            Denkoit, or its associated groups or divisions uses cookies for a
            variety of purposes, including:
          </p>
          <ul>
            <li>
              <strong>Essential Cookies:</strong> These cookies are strictly
              necessary to operate our website. They allow you to navigate and
              use features like online forms.
            </li>
            <li>
              <strong>Functionality Cookies:</strong> These cookies enhance your
              experience by remembering your preferences and settings (e.g.,
              language).
            </li>
            <li>
              <strong>Analytics Cookies:</strong> We use cookies to collect
              anonymized data about website usage. This helps us understand how
              visitors interact with our site and improve its performance.
            </li>
            <li>
              <strong>Advertising Cookies:</strong> In some cases, we may use
              cookies to deliver targeted advertising based on your browsing
              habits.
            </li>
          </ul>
          <h5>
            <strong>Your Cookie Choices</strong>
          </h5>
          <p>
            You have control over cookies placed on your device. Most web
            browsers allow you to control or disable cookies in your settings.
            Refer to your browser's settings for instructions. Here are some
            general links, but you may need to search for specific guidance for
            your browser:
          </p>
          <ul>
            <li>
              [Browser cookie settings ON Google chrome://settings/cookies]
            </li>
            <li>[Cookie settings ON Mozilla support.mozilla.org]</li>
            <li>[Cookie settings ON Apple support.apple.com]</li>
          </ul>
          <p>
            Please be aware that disabling cookies may limit your experience on
            our website.
          </p>
          <p>
            For further details about how Denkoit uses your personal data,
            please see our Privacy Policy. You can also contact us if you have
            any questions about cookies.
          </p>
          <p>
            By continuing to use our website, you consent to our use of cookies
            as described in this policy.
          </p>
          <p>
            We may update this Cookie Policy from time to time. We will notify
            you of any changes by posting the new Cookie Policy on this page.
          </p>
          <p>
            If you have any questions about our Cookie Policy, please contact us
            at info@denkoit.com
          </p>
        </div>
      </Container>
    </div>
  );
};

export default CookiePolicy;
