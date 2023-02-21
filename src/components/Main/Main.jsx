import { MainNavActions } from "./_actions/MainNavActions";

const Main = ({ children }) => (
  <div className="flex h-full flex-col w-full min-[320px]:w-screen min-[320px]:m-0 m-5 border-2 rounded-md border-cyan-300 bg-slate-100">
    <MainNavActions />
    {children}
  </div>
);

export { Main };
