import supabase from "./supabase";

export async function getDoctors() {
  let { data, error } = await supabase.from("doctor").select("*");

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }

  return data;
}

export async function getDoctorById(id) {
  let { data, error } = await supabase
    .from("doctor")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }
  return data;
}
