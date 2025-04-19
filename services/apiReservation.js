import supabase from "./supabase";

export async function createReservation(reservation) {
  const { data, error } = await supabase
    .from("reservation")
    .insert([
      {
        userId: reservation.userId,
        doctorId: reservation.doctorId,
        date: reservation.date,
        time: reservation.time,
        queNumber: reservation.queNumber,
      },
    ])
    .select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
