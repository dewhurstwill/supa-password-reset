// Import the Supabase client
import { createClient } from "@supabase/supabase-js";

export function passwordGenerator(length = 12) {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+";
  let password = "";
  for (let i = 0; i < length; i++) {
    const at = Math.floor(Math.random() * charset.length);
    password += charset.charAt(at);
  }
  return password;
}

// Function to update the password for a given user
export async function updatePassword(
  userId: string,
  newPassword: string,
  orgId: string,
  orgKey: string,
) {
  // Initialize the Supabase client with your Supabase URL and Service Role Key
  const supabaseUrl = `https://${orgId}.supabase.co`;
  const supabase = createClient(supabaseUrl, orgKey);
  try {
    // Call the admin API to update the user's password
    const { data, error } = await supabase.auth.admin.updateUserById(userId, {
      password: newPassword,
    });

    if (error) {
      console.error("Error updating password:", error.message);
    } else {
      console.log(
        `Password updated successfully for user: ${userId} with the password ${newPassword}`,
      );
    }
  } catch (err) {
    console.error("Unexpected error:", err.message);
  }
}
