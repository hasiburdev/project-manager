import "@/styles/global.css";
import GlassPane from "@/components/GlassPane";
import Sidebar from "@/components/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head></head>
      <body className="h-screen w-screen candy-mesh p-6">
        <GlassPane className="w-full h-full flex">
          <Sidebar />
          {children}
        </GlassPane>
        <div id="modal"></div>
      </body>
    </html>
  );
};

export default DashboardLayout;
