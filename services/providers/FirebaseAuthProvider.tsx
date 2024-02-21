"use client";
import { auth } from "@/utils/firebase";
import { signInWithCustomToken } from "firebase/auth";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";

async function syncFirebase(session: Session | null) {
  if (session && session.firebaseToken) {
    try {
        await signInWithCustomToken(auth ,session.firebaseToken) ;
    } catch (e) {
      console.log("Error occured", e);
    }
  }else{
    auth.signOut();
  }
}

function FirebaseAuthProvider({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  
  useEffect(() => {
    if (!session) return;
    syncFirebase(session);
  }, [session]);

  return <>{children}</>;
}

export default FirebaseAuthProvider;
