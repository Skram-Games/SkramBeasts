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
- **Battle Arena** — solo training battles against generated opponents, no barcode needed. Also the entry point to **The Hive** (see below).
- **The Hive** — a separate endless-wave solo mode: one Skrambeast, no healing (only a small amount of breathing-room recovery between waves), waves that get progressively harder without limit. Checkpoints every 25 kills offer a free temporary bonus pick. From wave 50 onward, opponents can carry weapons and armour; from wave 300 onward, a real Queen appears every 12 waves, with bonus rewards and a chance at her Crown. Has its own dedicated Stats page and 5 achievements.
- **Wild Queens** — rare, powerful bosses found via decrypted codes. Real 5-v-1 squad battles with coin/XP rewards, guaranteed loot, and a chance at her Crown.
- **Queen capture** — buy a Smoker from the Specialist store, then defeat a wild Queen while holding one for a guaranteed capture (no RNG). A captured Queen keeps her real boss-tier power, joins the collection permanently, can be favourited into the squad, and levels up normally. Having Queens in the squad scales up opponent difficulty in the Arena, in The Hive, and against future wild Queens — deliberately, since a squad of captured Queens is meant to be a genuine endgame flex.
- **Queen's Crown** — a collectible obtainable either as a rare drop after beating a wild Queen, or by tapping her crown during the encounter itself (one guaranteed claim per Queen, resets once you own none). Purely cosmetic to wear, sellable and tradeable, but wearing one into a Queen fight gives a real 1-in-5 chance to reflect her attack back at her.
- **Boss Training** — repeatable practice battles against Queens you've already discovered, once you've beaten at least one for real. No rewards, just a safe way to test squad builds.
- **Special Attack bar** — present in every battle type (wild, Arena, The Hive, Queen fights, Boss Training). Fill it with 6 successful hits and a brief window opens to land a guaranteed, unmitigated max-power hit.
- **Type matchups** — six elemental types with real damage bonuses and weaknesses.
- **Store** — stat upgrades, weapons, armour, shields, cosmetic costumes, party hats, potions, and temporary XP/coin/damage boosts, plus a Specialist section for late-game items (including the Smoker).
- **Sound** — all effects are synthesised live via the Web Audio API (no audio files), covering hits, crits, captures, level-ups, Hunter Rank-ups, achievements, equipping gear, egg tapping/hatching, and potion use.
- **Journal (Scanopedia)** — a full, paginated discovery log of every Skrambeast you've found, with Queens correctly tracked as their own category rather than folded into Legendary.
- **Goals (Achievements)** — 40 categories × 5 tiers each (200 total), with an in-app guidance popup on every goal explaining how to progress.
- **Daily Quests** — a rotating set of daily objectives.
- **Eggs** — rare incubating finds that hatch into a guaranteed Rare-or-better Skrambeast after a wait. Ad-based time reduction is capped at 5 uses per egg.
- **Hunter Rank** — a 22-tier progression ladder, separate from individual monster levels. Once your whole squad is maxed out, battle XP overflows into Hunter Rank instead of being wasted, and converts to coins once Hunter Rank is maxed too.
- **Friends & Global Leaderboard** — Firebase-backed, keyed by a stable internal player ID rather than the display username, so renaming no longer orphans friend connections. Friends list mimics a classic online/last-seen layout; Global shows the top 20 hunters by Hunter XP.
- **Player VS Player** — live pairing between two devices via a short numeric code, supporting item trading and squad duels, plus instant duel requests sent directly from a friend's profile.
- **Scanner customisation** — bezel shells, laser colours, and cosmetic skins (including a fully animated Matrix-rain effect).
- **Easter eggs & Game Secrets** — three hidden Easter Eggs tracked via specific in-app actions, plus 45 Game Secrets (cryptic hints, not spoilers) unlocked through play and readable in the Log tab.
- **Accessibility** — Reduced Motion, Colourblind-Safe Rarity, High Contrast, Light Mode, and Auto Fighter toggles in Settings.

## Architecture

- **Single file**: `scannimals.html` contains all HTML, CSS, and JavaScript. There's a table-of-contents comment near the top of the `<script>` block that maps out every major section (Achievements, Boss/Queen system, Store data, Battle logic, The Hive, etc.) — read that first when navigating the code.
- **Local save**: personal progress (squad, coins, stats, inventory) is stored in the browser's `localStorage`, scoped per hosting domain. Settings → Export/Import Save Code lets a player carry their save between hosts manually.
- **Shared backend**: Friends, the Global Leaderboard, and Player VS Player pairing run on a live Firebase Realtime Database project. This data is *not* domain-scoped, so it survives hosting changes on its own — only the local save is at risk when switching hosts.
- **No server-side code**: everything runs client-side; Firebase is accessed directly via its REST API.

## Current status

Firmware `3.0`, beta. Hosted on GitHub Pages (`skram-games.github.io/SkramBeasts`) as of the move away from Netlify.

An Android build exists via Bubblewrap (TWA), package `io.github.skram_games.twa`. The `.well-known/assetlinks.json` Digital Asset Links check has verified passing on the web side. **Currently blocked**: the installed signed APK fails to load `manifest.json` with a `DNS_PROBE_FINISHED_NXDOMAIN` error rather than a normal 404 — meaning a hostname is failing to resolve entirely, not that a file is missing on a working domain. Leading hypothesis is a misconfigured field in `twa-manifest.json` on the Bubblewrap build machine (possibly the manifest URL itself ending up in a field meant for the site's actual start URL). Not yet confirmed — needs the actual `twa-manifest.json` contents to diagnose properly.

Also pending before a full (non-beta) release: real rewarded-ad network integration (currently fully simulated), Player VS Player disconnect/abandonment handling, and turning the decrypt-a-code sequence into an actual interactive step rather than just an animation.

## Known limitations

- **Save data is domain-scoped.** Switching hosting providers resets every player's local save to blank on the new URL. The Export/Import Save Code feature is the workaround, but testers need to be told to back up *before* a planned migration, not after.
- **Decrypt-a-code mini-game** — currently just an animation; turning it into an actual interactive step is a flagged future idea, not yet built.
- **Rewarded ads are simulated** — there's no real ad network wired in yet. Fine for beta, needs fixing before full release.
- **Play App Signing fingerprint** — once the app is uploaded to Google Play Console, Play App Signing will generate a second SHA-256 fingerprint that needs adding to `assetlinks.json` as a second entry. Not yet done, since the app hasn't been uploaded.

## Ideas parked for later

Deliberately not built yet, by choice rather than oversight:

- **Difficulty selection** (Easy / Normal / Hard at onboarding) — deferred until after Queen-capture's difficulty-scaling settles, since both touch the same core combat formula.
- **Four additional game modes** — The Tamer (max 5 monsters ever), Lone Wolf (no multiplayer at all), Hunting Squad (one shared clan squad), and Veteran (permadeath). All genuinely future ideas, not in progress.

## Credits

Skrambeasts — Skram-Games. © 2026. All rights reserved.
