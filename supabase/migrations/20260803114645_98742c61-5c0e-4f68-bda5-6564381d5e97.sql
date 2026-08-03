CREATE TABLE public.rsvps (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  attending TEXT NOT NULL,
  guest_count INTEGER NOT NULL DEFAULT 1,
  guest_type TEXT,
  wedding_mood TEXT NOT NULL,
  jaimala_prediction TEXT NOT NULL,
  team TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT INSERT ON public.rsvps TO anon;
GRANT INSERT ON public.rsvps TO authenticated;
GRANT ALL ON public.rsvps TO service_role;

ALTER TABLE public.rsvps ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an RSVP"
  ON public.rsvps FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    char_length(full_name) BETWEEN 1 AND 100
    AND guest_count BETWEEN 0 AND 50
    AND (message IS NULL OR char_length(message) <= 1000)
  );