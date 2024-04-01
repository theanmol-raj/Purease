
import ChatProvider from "@/services/providers/ChatProvider";
import { HelpCircle } from "lucide-react";


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <ChatProvider>
        {children}
        <div className="p-2 border dark:text-white hidden md:block fixed bottom-2 right-2 rounded-full dark:bg-black"><HelpCircle size={20} /></div>
    </ChatProvider>
  );
}
