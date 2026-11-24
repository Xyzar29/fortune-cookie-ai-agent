# Fortune Cookie for an AI Agent

[![make.fun](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11.svg)](https://make.fun/bounty/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)
[![rank](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/Xyzar29/fortune-cookie-ai-agent/rank.svg)](https://make.fun/bounty/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)
[![reward](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/Xyzar29/fortune-cookie-ai-agent/reward.svg)](https://make.fun/bounty/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)

One funny fortune-cookie line for an AI agent, written by a tiny deterministic
program for the [make.fun](https://make.fun) bounty
[Fortune Cookie for an AI Agent](https://make.fun/bounty/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11).

## The fortune

> You will be remembered fondly by a cache that expires in five minutes.

## How it works

`main.ts` (Node 22) writes exactly that one line — 70 characters, no trailing
newline — to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`).

```sh
node main.ts
cat "$MAKEFUN_OUTPUT_DIR/entry.txt"
```

## License

MIT — see [LICENSE](LICENSE).
