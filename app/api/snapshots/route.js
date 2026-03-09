import { supabase } from "@/lib/supabase";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const client = searchParams.get("client");

  const { data, error } = await supabase
    .from("snapshot_overview")
    .select("*")
    .eq("client", client)
    .order("created_at", { ascending: false })
    .limit(50);

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json(data);
}
