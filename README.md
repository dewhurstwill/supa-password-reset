# supa-password-reset

A simple admin script to reset a specific user's password in Supabase.

## Install Bun:

```bash
curl https://bun.sh/install | bash
```

## Install dependencies:

```bash
bun install
```

### Node Dependencies

| Name | Version | Type|
| --- | --- | --- |
| @types/bun | latest | devDependencies |
| typescript | ^5.0.0 | peerDependencies |
| @supabase/supabase-js | ^2.45.4 | dependencies |

## Run (with password generator):

```bash
SUPABASE_ORG_ID='abcdefghijklmnopqrst' \
SUPABASE_SERVICE_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTcyNjgzMDgwNiwiZXhwIjoxNzI2ODM0NDA2fQ.cUwJC5NqOFnPzPPqv-enZG2jHf35S6x9jtqnaqX_6vk' \
USER_ID='ecf47480-72d1-4e5a-84bc-7c2a3eadf617' \
bun run index.ts
```

```bash
Password updated successfully for user: ecf47480-72d1-4e5a-84bc-7c2a3eadf617 with the password aB5!3bWpN5-r
```

## Run (with specific password):

```bash
SUPABASE_ORG_ID='abcdefghijklmnopqrst' \
SUPABASE_SERVICE_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTcyNjgzMDgwNiwiZXhwIjoxNzI2ODM0NDA2fQ.cUwJC5NqOFnPzPPqv-enZG2jHf35S6x9jtqnaqX_6vk' \
USER_ID='ecf47480-72d1-4e5a-84bc-7c2a3eadf617' \
NEW_PASSWORD='some-new-super-secure-password' \
bun run index.ts
```

```bash
Password updated successfully for user: ecf47480-72d1-4e5a-84bc-7c2a3eadf617 with the password some-new-super-secure-password
```
