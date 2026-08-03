import { supabase } from "@/integrations/supabase/client";

export type RsvpPayload = {
  full_name: string;
  attending: string;
  guest_count: number;
  guest_type: string | null;
  wedding_mood: string;
  jaimala_prediction: string;
  team: string;
  message: string | null;
};

const LOCAL_KEY = "wedding.rsvps.pending";

function saveLocally(payload: RsvpPayload) {
  if (typeof window === "undefined") return;
  try {
    const existing = JSON.parse(window.localStorage.getItem(LOCAL_KEY) ?? "[]") as RsvpPayload[];
    existing.push(payload);
    window.localStorage.setItem(LOCAL_KEY, JSON.stringify(existing));
  } catch {
    // storage unavailable — nothing further we can do client-side
  }
}

/**
 * Single storage seam for RSVP submissions. Swap the body of this function to
 * move to a different backend; nothing else in the app touches storage.
 */
export async function submitRsvp(payload: RsvpPayload): Promise<{ stored: "cloud" | "local" }> {
  try {
    const { error } = await supabase.from("rsvps").insert(payload);
    if (error) throw error;
    return { stored: "cloud" };
  } catch (error) {
    console.error("RSVP could not be saved remotely, keeping a local copy", error);
    saveLocally(payload);
    return { stored: "local" };
  }
}