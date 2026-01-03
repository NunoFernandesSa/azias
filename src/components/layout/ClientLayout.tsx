import { MobileLayout } from "./MobileLayout";
import { Navbar } from "./Navbar";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1">
        <Navbar />

        <MobileLayout>{children}</MobileLayout>
      </div>
    </div>
  );
}
