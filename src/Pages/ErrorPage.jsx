import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const { status } = error;
  return (
    <div>
      <h1>Oops !!</h1>
      {status || error.error.message}
    </div>
  );
};

export default ErrorPage;
