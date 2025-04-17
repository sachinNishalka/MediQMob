import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import { AppState } from "react-native";

export const supabaseUrl = "https://vabvequftpzqervnzclm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZhYnZlcXVmdHB6cWVydm56Y2xtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczODc0NDM5MCwiZXhwIjoyMDU0MzIwMzkwfQ.oWeyiNiK-l-YDuwOPboI2v4X5XAOnAAT5BLwgKoHTiA";

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

AppState.addEventListener("change", (state) => {
  if (state === "active") {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});

export default supabase;
