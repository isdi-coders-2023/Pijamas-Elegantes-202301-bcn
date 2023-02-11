import LoadingStyled from "./LoadingStyled";

const Loading = () => {
  return (
    <LoadingStyled
      className="lds-ring"
      role="dialog"
      aria-label="the page is loading"
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </LoadingStyled>
  );
};

export default Loading;
