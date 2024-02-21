import { adminAuth, adminDb } from "@/utils/firebase-admin";
import { NextAuthOptions } from "next-auth";
import GoogleProviders from "next-auth/providers/google";

export const authOptions : NextAuthOptions = {
    providers : [
        GoogleProviders({
            clientId : process.env.GOOGLE_CLIENT_ID!,
            clientSecret : process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    callbacks : {
        jwt: async ({user ,token}) =>{
            if(user){
                token.sub = user.id
            }
            return token
        },
        session: async ({session , token})=>{
            if(session){
                if(token.sub){
                    session.user.id = token.sub ;
                    const firebaseToken = await adminAuth.createCustomToken(token.sub) ;
                    session.firebaseToken = firebaseToken ;
                }
            }
            return session
        }
    },
    session : {
        strategy : 'jwt'
    },
    // adapter : FirestoreAdapter(adminDb)

} satisfies NextAuthOptions ;