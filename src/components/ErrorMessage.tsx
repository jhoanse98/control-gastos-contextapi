import React, { PropsWithChildren } from "react";

const ErrorMessage = ({ children }: PropsWithChildren) => {
  return (
    <p className="bg-red-600 p-2 text-white font-bold text-center text-sm">
      {children}
    </p>
  );
};

export default ErrorMessage;
