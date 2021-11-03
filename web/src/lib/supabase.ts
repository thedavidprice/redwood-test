import { createClient } from '@supabase/supabase-js'

export const supabaseClient = createClient(
  process.env.REDWOOD_ENV_SUPABASE_URL,
  process.env.REDWOOD_ENV_SUPABASE_KEY
)
