import ErroPageStyled from "./ErrorPageStyled";

const ErrorPage = () => {
  return (
    <ErroPageStyled>
      <h2 className="error-title">404</h2>
      <h3 className="error-subtitle">Page Not Found</h3>
      <p
        role="alert"
        aria-label="We couldn't find the page you're looking for"
        className="error-description"
      >
        Sorry, we couldn't find the page you're looking for
      </p>
    </ErroPageStyled>
  );
};

export default ErrorPage;
