import { passwordGenerator, updatePassword } from "./utils";

async function main() {
  const orgId = process.env.SUPABASE_ORG_ID || "";
  const orgKey = process.env.SUPABASE_SERVICE_KEY || "";
  const userId = process.env.USER_ID || "";
  const newPassword = process.env.NEW_PASSWORD || passwordGenerator();

  if (!orgId) {
    console.error("SUPABASE_ORG_ID environment variable required");
    process.exit(1);
  } else if (!orgKey) {
    console.error("SUPABASE_SERVICE_KEY environment variable required");
    process.exit(1);
  } else if (!userId) {
    console.error("USER_ID environment variable required");
    process.exit(1);
  }

  updatePassword(userId, newPassword, orgId, orgKey);
}

main();
