import supabase from "./supabase";

export async function signup({ firstname, lastname, age, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { firstname, lastname, age } },
  });
  if (error) {
    throw new Error(error.message);
  }
  return { data, error };
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    throw new Error(error.message);
  }
  return { data, error };
}
