const ErrorMessage = ({ children }): JSX.Element => {
  return (
    <p className="mb-4 text-[crimson] text-center text-sm font-semibold">
      {children}
    </p>
  );
};

export default ErrorMessage;
