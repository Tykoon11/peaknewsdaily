---
title: "Position Sizing 101: How Much to Risk Per Trade"
summary: ""
status: "published"
slug: "/education/position-sizing-101"
---

Position Sizing 101: How Much to Risk Per Trade

For beginners who want professional, no-BS rules that keep you alive. Education only, not financial advice.

TL;DR

Pick a fixed risk per trade (most beginners: 0.5–1.0% of account).

Place your stop first, then size the position so a full stop-out loses only that amount.

Use R-multiples (your per-trade risk) for targets and journaling.

Keep portfolio heat (sum of all open risks) under 3–6%, and lower if positions are correlated.

If your stop must be wider, your size must shrink. No exceptions.

What “position sizing” actually means

Position sizing is deciding how big your trade should be so that a normal losing trade costs only a pre-decided slice of your account. It is the difference between a manageable drawdown and a blown account. Your edge plays out over many trades—sizing ensures you survive long enough to benefit.

Step 1 — Choose your fixed risk per trade

Very conservative: 0.25–0.5%

Standard beginner: 1.0%

Experienced with proven edge: 1.5–2.0% (only after real results)

Example: $10,000 account at 1% risk → you may lose $100 if your stop is hit.

Step 2 — Place your stop (before you size)

Size follows the stop. Never the other way around.

Common stop methods:

Structure-based: below a swing low / above a swing high.

ATR-based (volatility): stop distance = k × ATR (usually 1–2×).

Rule-based: e.g., close beyond a key level or channel.

If a valid stop is far away, reduce size. Do not move stops to fit the size you want.

Step 3 — Calculate size (by market)
A) Stocks & ETFs

Formula:
shares = (account_value × risk%) ÷ (entry_price − stop_price)

Worked example:

Account: $10,000 · Risk: 1% → $100

Entry: $50.00 · Stop: $48.50 → risk/share $1.50

Shares: $100 ÷ $1.50 = 66 (round down)

Max loss ≈ 66 × $1.50 = $99

1R (per-share risk) = $1.50 → +2R target = $53.00, +3R = $54.50

B) Forex (spot)

Pip value depends on lot size and pair.

Rough guide for USD-quoted majors:
1.00 lot ≈ $10/pip, 0.10 lot ≈ $1/pip, 0.01 lot ≈ $0.10/pip

Formula:
lots = (account_value × risk%) ÷ (stop_pips × $/pip at 1.00 lot)

Worked example (EURUSD):

Account: $5,000 · Risk: 1% → $50

Stop: 25 pips

At 1.00 lot ≈ $10/pip → denominator = 25 × $10 = $250

Lots = $50 ÷ $250 = 0.20 lots

Risk at stop ≈ 25 pips × $2/pip = $50

Always confirm your broker’s pip values; they vary by pair.

C) Futures

Each contract has a tick size and tick value.

Formula:
contracts = (account_value × risk%) ÷ (stop_ticks × tick_value)

Worked example (E-mini S&P, ES):

Tick = 0.25; tick value = $12.50

Account: $20,000 · Risk: 0.75% → $150

Stop: 8 ticks (2.00 points) → risk/contract 8 × $12.50 = $100

Contracts: $150 ÷ $100 = 1.5 → take 1 contract (keeps risk ≤ $150)

If your sizing rounds up past your risk, drop to a micro contract where available.

D) Linear Crypto Perpetuals (USDT-margined)

PnL ≈ position_size_in_coin × price_change($)

Formulas:
coin_size = (account_value × risk%) ÷ stop_dollars
notional = coin_size × entry_price → verify margin & liquidation buffer.

Worked example (SOL-PERP):

Account: $2,000 · Risk: 0.5% → $10

Entry: $150 · Stop: 5% → $7.50

Coin size = $10 ÷ $7.50 = 1.33 SOL

Notional ≈ 1.33 × $150 = $200 (leverage light; healthy buffer)

Crypto leverage can hide overexposure. Size to risk first, then check notional vs equity and liquidation distance.

Step 4 — Control your portfolio heat

Heat = sum of all open trade risks.

Beginners: cap heat at 3–4% (e.g., three or four 1% positions).

Intermediate: 5–6% with proof of edge.

Highly correlated positions (same sector/coin theme) count as one bet—halve sizes or lower heat.

Step 5 — Track results in R-multiples

1R = your initial risk per trade (dollars per share/contract/coin).

Log outcomes as −1R, +2R, +3R etc.

Expectancy = (Win% × AvgWinR) − (Loss% × AvgLossR).
This strips out noise from price and focuses on whether your process works.

ATR (volatility) sizing in plain English

When markets are quiet, ATR is small → stops tighten → size can increase while risk stays constant.
When markets are wild, ATR is large → stops widen → size shrinks.
This keeps your dollar risk per trade stable across regimes.

Quick recipe:

Measure 14-period ATR on your timeframe.

Choose k (e.g., 1.5).

Stop distance = k × ATR.

Use the standard sizing formula with that distance.

Scaling in or out (without breaking your risk rules)

If you scale in, treat each add as a new trade with its own stop and keep total risk ≤ your cap.

Scaling out (partial profits) can smooth equity curves, but do not move the initial stop closer just to “be right.”

Common mistakes (be ruthless with these)

Sizing first, stop later → backwards.

Changing risk% trade to trade → kills consistency.

Adding to losers → increases heat after your thesis failed.

Ignoring correlation → five tech longs at 1% each ≠ 5% heat.

Leverage blindness (futures/crypto) → notional and liquidation distance matter.

Rounding up position size past your risk → round down.

Print-friendly checklist

 Account balance noted: ______

 Fixed risk per trade: ______%

 Valid stop set (structure/ATR/rule)

 Size computed from formula (rounded down)

 Portfolio heat after entry: ______% (≤ cap)

 Target(s) set in R (e.g., +2R, +3R)

 Trade logged in journal with entry, stop, size, rationale

Quick reference formulas

Stocks/ETFs
shares = (account × risk%) ÷ (entry − stop)

Forex
lots = (account × risk%) ÷ (stop_pips × $/pip at 1.00 lot)

Futures
contracts = (account × risk%) ÷ (stop_ticks × tick_value)

Linear Crypto Perps
coin_size = (account × risk%) ÷ stop_dollars
notional = coin_size × entry_price

Expectancy
(win_rate × avg_win_R) − ((1 − win_rate) × avg_loss_R)

FAQs

What risk% should I start with?
Use 0.5–1.0%. If emotions run hot or you’re new, go 0.25–0.5% until your journal shows control.

My calculated size is tiny—should I skip the trade?
Yes, if you can’t execute it cleanly. Or find a valid tighter stop. Never inflate size to “make it worth it.”

Do trailing stops change my initial size?
No. Size from the initial stop. Trailing is for locking gains, not for taking more size.

Can slippage/fees push me over risk?
Yes. Build a small buffer (e.g., size for 0.9% when your cap is 1.0%) or widen your assumed stop by a tick/pip.

How many trades can I run at once?
As many as fit inside your heat cap. If they’re correlated, cut sizes or reduce the number of simultaneous positions.

Final word

Position sizing is plumbing, not opinion. Set a fixed risk %, place a real stop, do the math, round down, and record the result in R. Repeat this boring discipline and your edge—if you have one—will finally have room to work.