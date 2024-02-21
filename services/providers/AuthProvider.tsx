"use client";

import { SessionProvider } from "next-auth/react";
import FirebaseAuthProvider from "./FirebaseAuthProvider";

export default function AuthProvider({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  return (
    <SessionProvider>
      <FirebaseAuthProvider>
        {children}
    </FirebaseAuthProvider>
    </SessionProvider>
  );
}
