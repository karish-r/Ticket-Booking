import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vdfuefateqhsjnbyjkeo.supabase.co";
const supabaseKey = "sb_publishable_De1fxCD3zIwOiHZaBxRezw_LqHF4Qw5";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);