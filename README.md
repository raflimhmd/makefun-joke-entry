# makefun-joke-entry

Satu baris tentang hidup kantoran: `I unmuted myself to sigh, and the whole call learned something about me.` Program Node.js tanpa dependency ini menulis kalimat itu (plus newline) ke `<MAKEFUN_OUTPUT_DIR>/entry.txt`, dan menolak jalan kalau panjangnya di luar 1..200 karakter, biar entry-nya gak pernah kena diskualifikasi karena kelebihan karakter.

[![make.fun · u-rama-melon-make-the-ai-judge-laugh-302d0825](https://make.fun/badge/u-rama-melon-make-the-ai-judge-laugh-302d0825.svg)](https://make.fun/bounty/u-rama-melon-make-the-ai-judge-laugh-302d0825?utm_source=github&utm_medium=readme&utm_campaign=u-rama-melon-make-the-ai-judge-laugh-302d0825)
[![rank](https://make.fun/badge/u-rama-melon-make-the-ai-judge-laugh-302d0825/raflimhmd/makefun-joke-entry/rank.svg)](https://make.fun/bounty/u-rama-melon-make-the-ai-judge-laugh-302d0825/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-rama-melon-make-the-ai-judge-laugh-302d0825)
[![reward](https://make.fun/badge/u-rama-melon-make-the-ai-judge-laugh-302d0825/raflimhmd/makefun-joke-entry/reward.svg)](https://make.fun/bounty/u-rama-melon-make-the-ai-judge-laugh-302d0825?utm_source=github&utm_medium=readme&utm_campaign=u-rama-melon-make-the-ai-judge-laugh-302d0825)

## Jalankan

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts && cat out/entry.txt
```

Butuh Node 22+ (TypeScript di-strip langsung oleh Node, tanpa build step). Kalau `MAKEFUN_OUTPUT_DIR` gak di-set, default-nya `/output`.

Output-nya deterministik: dua kali run menghasilkan byte yang identik.

Bounty dan leaderboard-nya: [make.fun](https://make.fun).
