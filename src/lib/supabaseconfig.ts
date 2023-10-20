import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import { Database } from "../../types/supabase";

const supabaseUrl = "https://jokydwwoxcmoajduvess.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impva3lkd3dveGNtb2FqZHV2ZXNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc4MjI4NzcsImV4cCI6MjAxMzM5ODg3N30.vnu632DX_fkOD5Und3JXMxQjwK7hJkl1pJi3aCZJhdQ";

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
