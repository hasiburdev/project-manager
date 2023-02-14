import "@/styles/global.css";
import GlassPane from "@/components/GlassPane";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head></head>
      <body className="h-screen w-screen rainbow-mesh p-6">
        <GlassPane className="w-full h-full flex justify-center">
          {children}
        </GlassPane>
      </body>
    </html>
  );
};

export default DashboardLayout;
