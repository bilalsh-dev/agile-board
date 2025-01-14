import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
      {/* Sidebar  */}
      <Sidebar />
      <main
        className={`dark:bg-dark-bg "md:pl-64" flex w-full flex-col bg-gray-50`}
      >
        <Navbar />
        {/* Navbar  */}
        {children}
      </main>
    </div>
  );
};

export default DashboardWrapper;
