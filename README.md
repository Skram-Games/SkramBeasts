# Skrambeasts

*A barcode-scanning monster collector.*

Built by **Skram-Games**. Currently in closed beta.

> **Every barcode hides a beast.**

## What it is

Skrambeasts turns real-world barcodes into a monster-collecting game. Scan (or type in) any barcode and it deterministically generates its own Skrambeast — the same barcode always produces the same creature, for anyone, on any device. No two players ever see a different monster on the same product.

The whole game is a **single self-contained HTML file** — no build step, no bundler, no dependencies to install. Open it in a browser and it runs.

## Core features

- **Deterministic discovery** — every barcode hashes to a specific monster: body, type, rarity, stats, and traits are all derived from the code itself, with holo variants possible on any rarity.
- **Squad management** — favourite up to 5 Skrambeasts for battle, equip weapons/armour/shields/costumes, manage fatigue as tired squad members recover over time.
- **Arena** — solo training battles against generated opponents, no barcode needed.
- **Wild Queens** — rare, powerful bosses found via decrypted codes. Real 5-v-1 squad battles with coin/XP rewards, guaranteed loot, and a rare chance at her Crown — a tradeable-but-unsellable collectible.
- **Boss Training** — repeatable practice battles against Queens you've already discovered, once you've beaten at least one for real.
- **Type matchups** — six elemental types with real damage bonuses and weaknesses.
- **Store** — stat upgrades, weapons, armour, shields, cosmetic costumes, party hats, and temporary XP/coin/damage boosts.
- **Journal (Scanopedia)** — a full, paginated discovery log of every Skrambeast you've found.
- **Goals (Achievements)** — 26 categories × 5 tiers each (130 total), with an in-app guidance popup on every goal explaining how to progress.
- **Daily Quests** — a rotating set of daily objectives.
- **Eggs** — rare incubating finds that hatch into a guaranteed Rare-or-better Skrambeast after a wait.
- **Hunter Rank** — a 22-tier progression ladder, separate from individual monster levels. Once your whole squad is maxed out, battle XP overflows into Hunter Rank instead of being wasted, and converts to coins once Hunter Rank is maxed too.
- **Friends & Global Leaderboard** — Firebase-backed, keyed by unique player-chosen usernames (not codes). Friends list mimics a classic online/last-seen layout; Global shows the top 20 hunters by Hunter XP.
- **Player VS Player** — live pairing between two devices via a short numeric PIN, supporting item trading and squad duels.
- **Scanner customisation** — bezel shells, laser colours, and cosmetic skins (including a fully animated Matrix-rain effect).
- **Easter eggs** — a set of hidden secrets tracked in a Secrets Known counter, discoverable through specific in-app actions.

## Architecture

- **Single file**: `scannimals.html` contains all HTML, CSS, and JavaScript. There's a table-of-contents comment near the top of the `<script>` block that maps out every major section (Achievements, Boss/Queen system, Store data, Battle logic, etc.) — read that first when navigating the code.
- **Local save**: personal progress (squad, coins, stats, inventory) is stored in the browser's `localStorage`, scoped per hosting domain. Settings → Export/Import Save Code lets a player carry their save between hosts manually.
- **Shared backend**: Friends, the Global Leaderboard, and Player VS Player pairing run on a live Firebase Realtime Database project. This data is *not* domain-scoped, so it survives hosting changes on its own — only the local save is at risk when switching hosts.
- **No server-side code**: everything runs client-side; Firebase is accessed directly via its REST API.

## Current status

Firmware `1.95`, beta. Hosted and tested via Netlify during the beta period. An Android conversion is planned — see the `ANDROID CONVERSION REQUIREMENT` comment block near the top of the script for what that build needs to set (it's mostly already wired up, since Firebase is genuinely configured, not a placeholder).

## Known limitations

- **Save data is domain-scoped.** Switching hosting providers (e.g. Netlify → GitHub Pages) resets every player's local save to blank on the new URL. The Export/Import Save Code feature is the workaround, but testers need to be told to back up *before* a planned migration, not after.
- **Username changes can orphan old friend references.** When a player sets a new unique username, their old one is freed up and removed from the shared backend. Anyone who'd already added them under the old username needs to re-add them manually. Properly fixing this needs a stable internal ID separate from the display username — flagged as a known trade-off, not a bug.
- **Decrypt-a-code mini-game** — currently just an animation; turning it into an actual interactive step is a flagged future idea, not yet built.

## Credits

Skrambeasts — Skram-Games. © 2026. All rights reserved.
