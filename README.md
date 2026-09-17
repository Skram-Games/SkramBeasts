# Skrambeasts

*A barcode-scanning monster collector.*

Built by **Skram-Games**. Currently in closed beta.

> **Every barcode hides a beast.**

## What it is

Skrambeasts turns real-world barcodes into a monster-collecting game. Scan (or type in) any barcode and it deterministically generates its own Skrambeast. The same barcode always produces the same creature, for anyone, on any device. No two players ever see a different monster on the same product.

The whole game is a **single self-contained HTML file**. No build step, no bundler, no dependencies to install. Open it in a browser and it runs.

## Core features

- **Deterministic discovery**: every barcode hashes to a specific monster. Body, type, rarity, stats, and traits are all derived from the code itself, with holo variants possible on any rarity.
- **Squad management**: favourite up to 5 Skrambeasts for battle, equip weapons, armour, shields, and costumes, and manage fatigue as tired squad members recover over time. Benched (non-favourited) Skrambeasts render normally; only resting (tired) or busy (out on a Mission) ones show a dimmed state, with a distinct "BUSY" banner for the latter. The Squad tab filters by rarity or by Queen.
- **Missions**: send bench Skrambeasts out on timed missions across 5 tiers (Common through Legendary), each with its own full-colour terrain illustration, duration, and number of mid-mission encounters. An encounter pauses the timer and triggers a real tap battle with a 3-2-1-TAP countdown; win and the mission continues, lose or retreat and the Skrambeast comes home tired with no reward. A "Watch Ad for a second chance" option triggers the moment HP would hit zero, refilling to 75% and continuing the same fight. Clicking an in-progress mission offers to abort it, with a clear warning about what's forfeited. A monster already on a mission can't be released or re-favourited until it returns. Missions left needing a fight for over 12 hours auto-forfeit back to Available as a safety net. Has its own Stats page and 3 achievements.
- **Skram Tags**: earned only from winning mid-Mission encounters, tier-matched to the mission, and never tradeable or giftable. Spend them at the **Quartermaster**, a dedicated Store section priced entirely in Tags rather than coins, topped by a Legendary-exclusive cosmetic set earned through real combat rather than grinding. Tags can also be sold for coins at a modest, non-farmable rate via a Sell Tags option in the Quartermaster.
- **Battle Arena**: solo training battles against generated opponents, no barcode needed. Type icons are shown for both fighters so a matchup can actually be judged before committing. Also the entry point to The Hive (below). A direct **Train** shortcut sits on the Squad tab, next to Missions.
- **The Hive**: a separate endless-wave solo mode. One Skrambeast, no healing beyond a small amount of breathing-room recovery between waves, and difficulty that climbs without limit. Checkpoints every 25 kills offer a free temporary bonus pick, alternating with a "Watch Ad" option for a temporary x2 XP or x2 Coins boost. From wave 50, opponents can carry weapons and armour. From wave 300, a real Queen appears every 12 waves with bonus rewards and a chance at her Crown. A defeat shows a proper result screen with the final battle log before the run ends, rather than cutting straight to the summary. Has its own Stats page and 5 achievements.
- **Wild Queens**: rare, powerful bosses found via decrypted codes. Real 5-v-1 squad battles with coin and XP rewards, guaranteed loot, and a chance at her Crown. Capture chance genuinely stacks with each successful battle against the same encounter, up to 100%, at which point the Battle option greys out.
- **Queen capture**: buy a Smoker from the Scanner section of the Store, then defeat a wild Queen while holding one and select it from the capture-item list that appears afterwards. A defeated Queen persists correctly in the save until a capture decision is actually made, so leaving to buy a Smoker mid-decision and coming back no longer loses her. Recapturing the same Queen's barcode is blocked with a clear message unless the earlier copy has been released first. A captured Queen keeps her real boss-tier power, joins the collection permanently, can be favourited into the squad, and levels up normally.
- **Queen's Crown**: a collectible earned either as a rare drop after beating a wild Queen, or by finding and tapping the crown directly on her portrait during the encounter. Purely cosmetic to wear, sellable and tradeable, but wearing one into a Queen fight gives a real 1-in-5 chance to reflect her attack back at her.
- **Queen Raids**: co-op for up to 5 hunters against one much tougher shared Queen, formed live through the Line Up. Everyone fights with their own squad independently, but every hit lands on the same shared health pool, tracked via each participant's own cumulative damage so nobody's hits ever get overwritten. A Leave Raid option is available once your whole squad has fainted, rather than being stuck with no way out. Forming raids that get abandoned now expire automatically after 10 minutes instead of lingering forever.
- **Boss Training**: repeatable practice battles against Queens you've already discovered, once you've beaten at least one for real. No rewards, just a safe way to test squad builds.
- **Special Attack bar**: present in every battle type. Fill it with 6 successful hits and the tap-zone itself glows blue and pulses, ready for a guaranteed max-power hit on the next tap - no separate overlay circle to miss.
- **Type matchups**: six elemental types with real damage bonuses and weaknesses.
- **Store**: stat upgrades, weapons, armour, shields, cosmetic costumes, party hats, potions, temporary boosts, the Quartermaster, and a Specialist section. Item rows show just the title; full detail lives in a tap-for-more popup.
- **Sound**: all effects are synthesised live via the Web Audio API, no audio files involved.
- **Journal (Scanopedia)**: a full, paginated discovery log of every Skrambeast found so far, with Queens tracked as their own category.
- **Goals (Achievements)**: categories x tiers each, with an in-app guidance popup on every goal explaining how to progress, and a real celebration popup (with description, not just title) the moment one unlocks. Covers core collection, Queen capture, Missions, Player VS Player duels, co-op Raids, and the hidden Easter Eggs.
- **Daily Quests**: a rotating set of daily objectives, each with a real celebration popup on completion.
- **Eggs**: rare incubating finds that hatch into a guaranteed Rare-or-better Skrambeast after a wait. Ad-based time reduction is capped at 5 uses total, shared across every egg incubating at once, not 5 per egg.
- **Hunter Rank**: a 27-tier progression ladder (5 new top-tier ranks above Champion: Apex, Mythic, Ascended, Celestial, Hunter Eternal), separate from individual monster levels.
- **Squad Analysis**: an on-demand panel checking the favourited squad for type coverage gaps, unequipped members, a level-behind weak link, offence/defence balance, and now flags having fewer than 5 favourited Skrambeasts as its own highest-priority suggestion.
- **How to Play**: a reusable spotlight tour system - dims the screen except a live cutout around the real element being explained. A first-launch tour walks new players through what each of the 5 main tabs is for, right after onboarding. Replayable any time via a button above Game Secrets in the Log tab.
- **Notification badges**: the Scan, Squad, and Log tabs show a live count for eggs ready to hatch, unresolved Squad Analysis suggestions, unseen completed Daily Quests, missions needing attention, and pending friend requests, all correctly reflected on the outer tab badge, not just sub-screens.
- **Friends & Global Leaderboard**: Firebase-backed, keyed by a stable internal player ID. Adding someone sends a real request rather than adding instantly. Friends list mimics a classic online/last-seen layout; Global shows the top 20 hunters by Hunter XP.
- **Player VS Player**: two paths from one entry point.
  - **The Line Up**: a live waiting room. Tap someone to send an instant challenge, with a real pop-up for the recipient. Also where co-op Queen Raids get formed and joined.
  - **Trade**: choose a friend or someone new by username to send a direct trade invite, replacing the old manual code-sharing flow entirely. Unanswered invites time out after 5 minutes.
  - Duels show a real battle log, offer "Same Team" for an instant rematch, and pay out coins and Hunter Rank XP for a win, tie, or loss. Win streaks of 3+ earn a skull badge visible to the opponent beforehand. Disconnect detection gives a clear message and a clean way to leave if an opponent goes silent mid-duel, rather than an indefinite wait.
- **Scanner customisation**: bezel shells, laser colours, and cosmetic skins, including an animated Matrix-rain effect with a genuinely blacked-out static backdrop.
- **Easter eggs & Game Secrets**: three hidden Easter Eggs tracked via specific in-app actions, with a dedicated achievement (3 tiers) offering real, specific hints for each one on tap. Plus dozens of Game Secrets unlocked through play.
- **Accessibility**: Reduced Motion, Colourblind-Safe Rarity, High Contrast, Light Mode, and Auto Fighter toggles in Settings.

## Architecture

- **Single file**: the whole game is one HTML file containing all HTML, CSS, and JavaScript.
- **Local save**: personal progress lives in the browser's `localStorage` under the key `skrambeasts-state`, scoped per hosting domain. Settings → Export/Import Save Code lets a player carry their save between hosts manually.
- **Shared backend**: Friends, the Global Leaderboard, Player VS Player pairing, the Line Up, Queen Raids, and Missions all run on a live Firebase Realtime Database project, accessed directly via its REST API. Not domain-scoped, so it survives hosting changes on its own.
- **Security**: every client signs in via Firebase Anonymous Auth on boot, establishing a real, unspoofable identity linked to (not replacing) each player's existing local profile - preserves all existing friends and leaderboard history. Every write to shared data carries that identity's auth token. Firebase Security Rules enforce that a player can only write to their own profile data; verified in the Rules Simulator before publishing (unauthenticated writes denied, authenticated social writes allowed, cross-player profile writes denied) and confirmed live. Closes the original hole where a direct, unauthenticated API call could overwrite another player's leaderboard entry.
- **Multi-participant sync**: Player VS Player duels and Queen Raids avoid overwrites between simultaneous writers by having each participant write only to their own slot in the shared document.
- **Disconnect detection**: heartbeat-based, gives a waiting player a clear signal and a clean exit if an opponent goes silent, instead of an indefinite wait.

## Current status

Firmware `6.21`, beta. Hosted on GitHub Pages (`skram-games.github.io/SkramBeasts`).

An Android build exists via Bubblewrap (TWA), package `io.github.skram_games.twa`, distributed through Google Play Internal Testing. The URL-bar-in-app issue is resolved - `assetlinks.json` (hosted at the `skram-games.github.io` domain root) now lists all three relevant signing certificate fingerprints (local keystore, Play App Signing, and the one from Play Console's own Digital Asset Links preview).

Still pending before a full, non-beta release: real rewarded-ad network integration (currently fully simulated), turning the decrypt-a-code sequence into an actual interactive step rather than just an animation.

## Known limitations

- **Save data is domain-scoped.** Switching hosting providers resets every player's local save to blank on the new URL. The Export/Import Save Code feature is the workaround.
- **Decrypt-a-code mini-game**: currently just an animation.
- **Rewarded ads are simulated**: no real ad network is wired in yet.
- **The Line Up and Queen Raids have no player cap enforcement beyond pagination and the 5-person raid limit.** Reasonable at beta scale.
- **How to Play currently covers only the 5 main tabs.** Deeper contextual tours (Missions internals, Queen encounters, etc.) are deliberately not built yet - waiting to see if real tester confusion actually shows up around a specific screen before building more.

## Ideas parked for later

Deliberately not built yet, by choice rather than oversight:

- **Premade friend messages** ("Fancy a battle?" etc.) - discussed and designed, but concluded the actual player benefit was marginal (mostly a re-engagement nudge dressed as a social feature) relative to the build cost. Parked, not rejected outright.
- **Difficulty selection** (Easy / Normal / Hard at onboarding), deferred until after Queen-capture's difficulty scaling settles.
- **Four additional game modes**: The Tamer (max 5 monsters ever), Lone Wolf (no multiplayer at all), Hunting Squad (one shared clan squad), and Veteran (permadeath).
- **Clan vs clan battles and shared-squad clans**: would need its own separate design, not an extension of the raid or duel systems.

## Credits

Skrambeasts, Skram-Games. © 2026. All rights reserved.
