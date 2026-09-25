---
name: commit-msg
description: Generate a Conventional-Commits-style message from the staged diff and commit it. Trigger when the user says "write a commit message", "generate a commit", "commit my changes", or runs /commit-msg.
---

# commit-msg

Generate a commit message from the staged changes and create the commit.

## Workflow

1. **Check for staged changes.** Run `git diff --staged --stat`. If there is no
   output (nothing staged), STOP and tell the user to stage their changes first
   (e.g. `git add <files>`). Do not commit unstaged work.

2. **Read the staged diff.** Run `git diff --staged` and read it to understand
   what changed and why.

3. **Generate the message** in exactly this format:

   ```
   type(scope): short subject

   - bullet of what changed
   - bullet of why
   ```

   - `type` is one of: `feat`, `fix`, `refactor`, `chore`, `docs`, `style`, `test`.
   - `scope` is a short area name derived from the diff (e.g. the component,
     module, or directory touched). Omit `(scope)` only if no meaningful scope fits.
   - Subject line MUST be under 60 characters, imperative mood, no trailing period.
   - Body bullets are optional but encouraged: one for *what* changed, one for *why*.

4. **Commit.** Run `git commit` with the generated message.

## Rules

- NEVER include a `Co-Authored-By:` trailer or any other attribution trailer.
- Only ever commit what is already staged — never run `git add` yourself.
- Do not use `--no-verify` or skip hooks.
