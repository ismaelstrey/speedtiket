const KanbanContainer = ({ children }) => (
  <div className="flex min-[320px]:flex-col md:flex-col sm:flex-col lg:flex-row w-full h-full ">
    {children}
  </div>
);

export { KanbanContainer };
