import React from "react";
import DesktopSidebar from "@/app/components/sidebar/DesktopSidebar";
import MobileFooter from "@/app/components/sidebar/MoblieFooter";

async function Sidebar({ children }: {
    children: React.ReactNode,
}) {
    // const currentUser = await getCurrentUser();

    return (
        <div className="h-full">
            <DesktopSidebar/>
            <MobileFooter />
            <main className="lg:pl-20 h-full">
                {children}
            </main>
        </div>
    )
}

export default Sidebar;