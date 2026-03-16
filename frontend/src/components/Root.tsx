import { Outlet } from "react-router";
import Taskbar from "./Taskbar";

export default function Root() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <div className="flex flex-col h-screen">
        <Taskbar />
        <div className="flex-1 overflow-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
