import * as React from "react"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, ...other }: ButtonProps): JSX.Element {
  return (
    <button type="button" className="bg-green-500 py-3 px-2 rounded-lg" {...other}>
      {children}
    </button>
  );
}

Button.displayName = "Button";
