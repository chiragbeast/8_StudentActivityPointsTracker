# SAPT Project - Git Commands Reference

---

## Session 1 — Admin Dashboard Backend Push to `sahil` branch

### 1. `git status`
```
git status
```
**Purpose:** Check which files were modified, staged, or untracked before doing anything. Showed 2 modified and 2 untracked files.

---

### 2. `git checkout sahil`
```
git checkout sahil
```
**Purpose:** Switch to the `sahil` branch. Failed because there were uncommitted local changes that would be overwritten.

---

### 3. `git stash`
```
git stash
```
**Purpose:** Temporarily saves all uncommitted changes (modified + untracked) to a stash, cleaning the working directory so we can safely switch branches.

---

### 4. `git checkout sahil` (after stash)
```
git checkout sahil
```
**Purpose:** Successfully switched to the `sahil` branch now that the working directory was clean.

---

### 5. `git stash pop`
```
git stash pop
```
**Purpose:** Restores the previously stashed changes back onto the current branch (`sahil`). Had conflicts because `server.js` and `AdminDashboard.jsx` didn't exist in `sahil` at all — resulted in "deleted by us" conflict markers.

---

### 6. `git add` (staging files)
```
git add backend/server.js frontend/src/components/AdminDashboard.jsx backend/controllers/ backend/routes/ .gitignore
```
**Purpose:** Stage all the new and modified files for commit, including the conflict-resolved files from stash pop.

---

### 7. `git stash drop`
```
git stash drop
```
**Purpose:** Deletes the stash entry since the changes were already applied and staged — no longer needed.

---

### 8. `git commit`
```
git commit -m "feat: admin dashboard backend API + frontend wired to live MongoDB data"
```
**Purpose:** Creates a commit with all staged files. The message follows conventional commits format (`feat:` for new features).

---

### 9. `git push origin sahil` (first attempt — failed)
```
git push origin sahil
```
**Purpose:** Attempted to push the local `sahil` branch to GitHub. **Failed** with `non-fast-forward` error — meaning the remote had newer commits that our local branch didn't have.

---

### 10. `git pull origin sahil --rebase`
```
git pull origin sahil --rebase
```
**Purpose:** Fetch remote `sahil` commits and rebase our local commits on top of them (instead of merge, which keeps history cleaner). Resulted in add/add conflicts in `server.js` and `AdminDashboard.jsx`.

---

### 11. `git checkout --ours` (conflict resolution)
```
git checkout --ours backend/server.js frontend/src/components/AdminDashboard.jsx
```
**Purpose:** During the rebase conflict, this picks **our local version** of the conflicted files (the ones with the backend API integration) and discards the remote version.

---

### 12. `git add` (marking conflicts resolved)
```
git add backend/server.js frontend/src/components/AdminDashboard.jsx
```
**Purpose:** After resolving conflicts manually, mark the files as resolved by staging them again.

---

### 13. `git rebase --continue`
```
git rebase --continue
```
**Purpose:** Tell git to continue the rebase process after conflicts have been resolved and staged.

---

### 14. `git push origin sahil` (second attempt — success)
```
git push origin sahil
```
**Purpose:** Push the successfully rebased local branch to GitHub remote. This time it succeeded and updated the remote `sahil` branch.

---

## Quick Reference — Common Git Concepts Used

| Term | Meaning |
|------|---------|
| `git stash` | Temporarily shelves uncommitted work so you can switch branches |
| `git stash pop` | Restores stashed work and removes it from the stash |
| `--rebase` | Replays your commits on top of remote commits (cleaner than merge) |
| `--ours` | During conflict resolution: keep the local/current branch version |
| `--theirs` | During conflict resolution: keep the incoming/remote version |
| `non-fast-forward` | Remote has commits your local branch doesn't — need to pull first |

---
