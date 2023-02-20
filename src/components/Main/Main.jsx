import {MainNavActions} from "./_actions/MainNavActions";


const Main = ({children}) =><div className="flex h-full flex-col w-full m-5 border-2 rounded-md border-cyan-300 bg-slate-100">
   <MainNavActions/>    
    {children}
    </div>

export  {Main};
