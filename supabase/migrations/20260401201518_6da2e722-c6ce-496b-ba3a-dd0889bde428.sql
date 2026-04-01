ALTER TABLE public.email_verification_codes 
ADD COLUMN IF NOT EXISTS attempt_count integer DEFAULT 0,
ADD COLUMN IF NOT EXISTS invalidated_at timestamptz;