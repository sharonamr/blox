import { PropsWithChildren } from "react";

export const Button: React.FC<PropsWithChildren<{onClick: () => void, size?: number}>> = ({ children, onClick, size = 200 }) => {
  return <button className="btn btn-primary btn-sm" style={{width: size}} onClick={onClick}>{children}</button>;
};