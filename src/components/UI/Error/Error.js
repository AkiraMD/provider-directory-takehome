import './Error.scss';

const Error = ({ message }) => {
  return (
    <div className="error">
      <h1>Not Found</h1>
      <h2>Sorry, we couldn't find what you were looking for.</h2>
      <p>{message}</p>
    </div>
  );
};

export default Error;
