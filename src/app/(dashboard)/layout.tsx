import Header from "@/layout/Header";
import Sidebar from "@/layout/Sidebar";

type Props = Readonly<React.PropsWithChildren>;

const DashboardLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex h-[100dvh] flex-col overflow-y-auto">
      <header className="flex h-[5rem] flex-col">
        <Header />
      </header>
      <div className="flex flex-1 overflow-y-auto">
        <aside className="hidden max-w-[16rem] flex-[25%] flex-col md:flex">
          <Sidebar />
        </aside>
        <main className="flex flex-1 flex-col overflow-y-auto p-2">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
