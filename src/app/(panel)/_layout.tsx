import { Stack, router } from "expo-router";
import { useEffect } from "react";
import { supabase } from "../config/supabase";

type sessionSupabase = import('@supabase/supabase-js').Session | null;


export default function RootLayout() {

  useEffect(() => {
    const signed = false;

    requestAnimationFrame(() => {
      supabase.auth.onAuthStateChange((_event: string, session: sessionSupabase) => {
        if (session) {
          console.log("User is signed in");
          router.replace("/(panel)/home/page");
          return
        }
        console.log("Não logado");
        router.replace("/(auth)/signin/page");
      });
    });
  }, []);

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name="(auth)"
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name="(panel)"
        options={{
          headerShown: false
        }}
      />
    </Stack>
  )
}