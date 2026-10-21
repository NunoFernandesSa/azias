import { MobileLayout } from "./MobileLayout";
import { Navbar } from "../common/Navbar";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <MobileLayout>{children}</MobileLayout>
    </div>
  );
}
