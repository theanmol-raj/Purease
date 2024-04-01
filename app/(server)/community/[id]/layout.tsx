import CommunityNavigation from "@/components/CommunityNavigation";



export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>      
      {children}
      <CommunityNavigation />
    </>
  );
}
