## IT 之家日榜 Telegram 推送

> 利用 Github Actions，每天定时获取 IT 之家日榜并推送到 Telegram。

[![ITHome-DailyRank-To-Telegram](https://github.com/ewigl/ithome-dailyrank-to-telegram/actions/workflows/DailyRank.yml/badge.svg)](https://github.com/ewigl/ithome-dailyrank-to-telegram/actions/workflows/DailyRank.yml)

### 仓库变量

- **TELEGRAM_TOKEN**: Telegram 通知的 Bot Token。
- **TELEGRAM_TO**: Telegram 通知的 Chat ID。

### 使用方法

1. Fork 此仓库。
2. 在 fork 后的仓库中启用 Actions。
3. 配置仓库变量。

详细文档: https://ewigl.github.io/notes/posts/programming/github-actions/

### 注意事项

根据 [Github 的政策](https://docs.github.com/zh/actions/managing-workflow-runs-and-deployments/managing-workflow-runs/disabling-and-enabling-a-workflow?tool=webui)，当 60 天内未发生仓库活动时，将自动禁用定时 Workflow。需要再次手动启用。
