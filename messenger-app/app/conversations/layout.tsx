import Sidebar from "../components/sidebar/Sidebar";
import React from "react";
export default async function ConversationsLayout({
  children
}: {
  children: React.ReactNode,
}) {


  return (
      // @ts-expect-error Server Component
    <Sidebar>
      <div className="h-full">
        {children}
      </div>
    </Sidebar>
  );
}
