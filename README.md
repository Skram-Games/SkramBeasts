# Skrambeasts

*A barcode-scanning monster collector.*

Built by **Skram-Games**. Currently in closed beta.

> **Every barcode hides a beast.**

## What it is

Skrambeasts turns real-world barcodes into a monster-collecting game. Scan (or type in) any barcode and it deterministically generates its own Skrambeast. The same barcode always produces the same creature, for anyone, on any device. No two players ever see a different monster on the same product.

The whole game is a **single self-contained HTML file**. No build step, no bundler, no dependencies to install. Open it in a browser and it runs.

## Core features

- **Deterministic discovery**: every barcode hashes to a specific monster. Body, type, rarity, stats, and traits are all derived from the code itself, with holo variants possible on any rarity.
- **Squad management**: favourite up to 5 Skrambeasts for battle, equip weapons, armour, shields, and costumes, and manage fatigue as tired squad members recover over time. The Squad tab filters by rarity or by Queen.
- **Battle Arena**: solo training battles against generated opponents, no barcode needed. Also the entry point to The Hive (below).
- **The Hive**: a separate endless-wave solo mode. One Skrambeast, no healing beyond a small amount of breathing-room recovery between waves, and difficulty that climbs without limit. Checkpoints every 25 kills offer a free temporary bonus pick, alternating with a "Watch Ad" option for a temporary x2 XP or x2 Coins boost. From wave 50, opponents can carry weapons and armour. From wave 300, a real Queen appears every 12 waves with bonus rewards and a chance at her Crown. Has its own Stats page and 5 achievements.
- **Wild Queens**: rare, powerful bosses found via decrypted codes. Real 5-v-1 squad battles with coin and XP rewards, guaranteed loot, and a chance at her Crown.
- **Queen capture**: buy a Smoker from the Scanner section of the Store, then defeat a wild Queen while holding one and select it from the capture-item list that appears afterwards, the same flow as a regular wild capture. Any other item gets explicitly rejected rather than silently ignored. A captured Queen keeps her real boss-tier power, joins the collection permanently, can be favourited into the squad, and levels up normally. Having Queens in the squad raises opponent difficulty in the Arena, in The Hive, and against future wild Queens on purpose. A squad of captured Queens is meant to be a genuine endgame flex.
- **Queen's Crown**: a collectible earned either as a rare drop after beating a wild Queen, or by finding and tapping the crown directly on her portrait during the encounter. No on-screen hints, no counter. A few taps in, a subtle nudge suggests something's giving; enough taps triggers a full claim. Ownership is tracked properly across both raw inventory and whatever's currently equipped, so putting one on no longer resets the ability to find another. Purely cosmetic to wear, sellable and tradeable, but wearing one into a Queen fight gives a real 1-in-5 chance to reflect her attack back at her.
- **Queen Raids**: co-op for up to 5 hunters against one much tougher shared Queen, formed live through the Line Up (below). Everyone fights with their own squad independently, but every hit lands on the same shared health pool. Each participant writes only their own cumulative damage, so nobody's hits ever get overwritten by anyone else's. A live roster shows the whole party and each person's current Skrambeast. Her HP scales with how many people actually show up, so a full party faces a genuinely bigger fight rather than a trivial one. A win leaves behind "a bag of various items"; opening it triggers a full loot reveal, more generous than any solo Queen kill. Crown odds are rolled independently per participant and scale up the fewer people are still present when she falls, keeping the raid's overall expected crown yield roughly constant regardless of party size.
- **Boss Training**: repeatable practice battles against Queens you've already discovered, once you've beaten at least one for real. No rewards, just a safe way to test squad builds.
- **Special Attack bar**: present in every battle type (wild, Arena, The Hive, Queen fights, Raids, Boss Training, Player VS Player). Fill it with 6 successful hits and a brief window opens to land a guaranteed, unmitigated max-power hit.
- **Type matchups**: six elemental types with real damage bonuses and weaknesses.
- **Store**: stat upgrades, weapons, armour, shields, cosmetic costumes, party hats, potions, and temporary XP, coin, and damage boosts, plus a Specialist section for late-game items.
- **Sound**: all effects are synthesised live via the Web Audio API, no audio files involved. Covers hits, crits, captures, level-ups, Hunter Rank-ups, achievements, equipping gear, egg tapping and hatching, and potion use.
- **Journal (Scanopedia)**: a full, paginated discovery log of every Skrambeast found so far, with Queens correctly tracked as their own category rather than folded into Legendary.
- **Goals (Achievements)**: categories x 5 tiers each, with an in-app guidance popup on every goal explaining how to progress. Covers core collection, Queen capture, Player VS Player duels, and co-op Raids.
- **Daily Quests**: a rotating set of daily objectives.
- **Eggs**: rare incubating finds that hatch into a guaranteed Rare-or-better Skrambeast after a wait. Ad-based time reduction is capped at 5 uses per egg.
- **Hunter Rank**: a 22-tier progression ladder, separate from individual monster levels. Once the whole squad is maxed out, battle XP overflows into Hunter Rank instead of being wasted, and converts to coins once Hunter Rank is maxed too. Player VS Player wins feed into this as well.
- **Squad Analysis**: an on-demand panel that checks your favourited squad for type coverage gaps, unequipped members, a level-behind weak link, and offence/defence balance, with a specific bench suggestion when it finds one worth making. Each suggestion has its own dismiss button, so acting on one clears just that one rather than the whole panel.
- **Notification badges**: the Scan, Squad, and Log tabs show a live count for eggs ready to hatch, unresolved Squad Analysis suggestions, unseen completed Daily Quests, and pending friend requests.
- **Friends & Global Leaderboard**: Firebase-backed, keyed by a stable internal player ID rather than the display username, so renaming no longer orphans friend connections. Adding someone sends a real request rather than adding them instantly; they see it in a dedicated Requests section and can accept or decline. Friends list mimics a classic online/last-seen layout; Global shows the top 20 hunters by Hunter XP.
- **Player VS Player**: reworked around two paths from one entry point.
  - **The Line Up**: a live waiting room. Step in and other hunters currently browsing become visible in real time, paginated once it fills up. Tap someone to send an instant challenge, with a real pop-up for whoever's on the receiving end rather than a buried menu slot. Also where co-op Queen Raids get formed and joined.
  - **Pair by Code**: the original short-code pairing flow, kept for trading or for connecting with someone specific rather than whoever happens to be around.
  - Duels themselves now show a real battle log on the result screen, offer "Same Team" for an instant rematch without re-picking, and pay out meaningfully better rewards (coins and Hunter Rank XP for a win, tie, or loss). Win streaks of 3 or more earn a skull badge visible to the opponent before the fight even starts: bronze, silver, gold, and a glowing flame tier at 15. Tracked on its own Stats page alongside total wins, losses, and ties.
- **Scanner customisation**: bezel shells, laser colours, and cosmetic skins, including a fully animated Matrix-rain effect.
- **Easter eggs & Game Secrets**: three hidden Easter Eggs tracked via specific in-app actions, plus dozens of Game Secrets (cryptic hints, not spoilers) unlocked through play and readable in the Log tab.
- **Accessibility**: Reduced Motion, Colourblind-Safe Rarity, High Contrast, Light Mode, and Auto Fighter toggles in Settings.

## Architecture

- **Single file**: the whole game is one HTML file containing all HTML, CSS, and JavaScript. A table-of-contents comment near the top of the `<script>` block maps out every major section (Achievements, Boss/Queen system, Store data, Battle logic, The Hive, Player VS Player, Raids, and so on). Read that first when navigating the code.
- **Local save**: personal progress (squad, coins, stats, inventory) lives in the browser's `localStorage` under the key `skrambeasts-state`, scoped per hosting domain. Settings → Export/Import Save Code lets a player carry their save between hosts manually. Saves from before the project's rename are picked up automatically on first load and migrated onto the current key; nothing was lost in the switch.
- **Shared backend**: Friends, the Global Leaderboard, Player VS Player pairing, the Line Up, and Queen Raids all run on a live Firebase Realtime Database project. This data is not domain-scoped, so it survives hosting changes on its own. Only the local save is at risk when switching hosts.
- **No server-side code**: everything runs client-side; Firebase is accessed directly via its REST API.
- **Multi-participant sync**: both Player VS Player duels and Queen Raids avoid a common pitfall with several simultaneous writers. No client ever overwrites another player's data, because each participant only ever writes to their own slot in the shared document. A raid's remaining HP, for example, is computed by summing everyone's individually-tracked damage rather than decrementing one shared number. That's what makes it safe for multiple people to hit the same target at once without losing hits to a race condition.
- **Disconnect detection**: once both sides of a duel are ready, each client writes a lightweight heartbeat timestamp on its own poll cycle. If an opponent's heartbeat goes stale for 25 seconds, the waiting player gets a clear message and a clean way to leave, instead of an indefinite, uninformative wait with no signal either way.

## Current status

Firmware `6.0`, beta. Hosted on GitHub Pages (`skram-games.github.io/SkramBeasts`).

An Android build exists via Bubblewrap (TWA), package `io.github.skram_games.twa`, and installs and loads correctly on a real device. Still pending before a full, non-beta release: real rewarded-ad network integration (currently fully simulated), turning the decrypt-a-code sequence into an actual interactive step rather than just an animation, and the Play App Signing fingerprint below.

## Known limitations

- **Save data is domain-scoped.** Switching hosting providers resets every player's local save to blank on the new URL. The Export/Import Save Code feature is the workaround, but testers need to be told to back up before a planned migration, not after.
- **Decrypt-a-code mini-game**: currently just an animation. Turning it into an actual interactive step is a flagged future idea, not yet built.
- **Rewarded ads are simulated**: no real ad network is wired in yet. Fine for beta, needs fixing before full release.
- **Play App Signing fingerprint**: once the app is uploaded to Google Play Console, Play App Signing will generate a second SHA-256 fingerprint that needs adding to `assetlinks.json` as a second entry. Not yet done, since the app hasn't been uploaded.
- **The Line Up and Queen Raids have no player cap enforcement beyond pagination and the 5-person raid limit.** Reasonable at beta scale, worth revisiting if the player base grows enough that a single shared list becomes unwieldy.

## Ideas parked for later

Deliberately not built yet, by choice rather than oversight:

- **Difficulty selection** (Easy / Normal / Hard at onboarding), deferred until after Queen-capture's difficulty scaling settles, since both touch the same core combat formula.
- **Four additional game modes**: The Tamer (max 5 monsters ever), Lone Wolf (no multiplayer at all), Hunting Squad (one shared clan squad), and Veteran (permadeath). All genuinely future ideas, not in progress.
- **Clan vs clan battles and shared-squad clans**: Queen Raids cover the co-op-against-a-boss direction. A true clan-vs-clan mode or a persistent shared clan squad would need its own separate design, not an extension of the raid or duel systems.

## Credits

Skrambeasts, Skram-Games. © 2026. All rights reserved.
