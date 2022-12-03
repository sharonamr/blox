import { PropsWithChildren } from "react";

export const Card: React.FC<PropsWithChildren<{ title: string }>> = ({ children, title }) => {
  return (
    <div className="p-4">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div>
          <h2 className="text-secondary text-xl">{title}</h2>
          <p className="pt-2">{children}</p>
          <div className="justify-end">
            <button className="btn mt-6 bg-secondary">Done</button>
          </div>
        </div>
      </div>
    </div>
  );
};