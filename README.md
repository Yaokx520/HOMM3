# HOMM3 趣味人格测试

这是一个可以直接部署到 GitHub Pages 的静态测试站点，素材来自当前仓库中的：

- `asser/list.txt`
- `asser/figures/*.pcx`
- `asser/music/*.mp3`

站点代码位于 `docs/`，结果池为 19 位英雄，总题库 38 题，每次测试随机抽取 12 题。

## 本地准备

先生成网页可用素材：

```powershell
py -3 .\tools\prepare_assets.py
```

然后可直接打开 [docs/index.html](F:\Github Develop\HOMM3\docs\index.html)，或者起一个本地静态服务：

```powershell
py -3 -m http.server 8000 --directory docs
```

## 部署到 GitHub Pages

1. 把仓库推到 GitHub。
2. 在仓库 `Settings -> Pages` 中选择从分支部署。
3. 选择当前分支和 `/docs` 目录。
4. 保存后等待 GitHub Pages 构建完成。

你的仓库地址是 [Yaokx520/HOMM3](https://github.com/Yaokx520/HOMM3)，对应的 GitHub Pages 链接通常会是：

`https://yaokx520.github.io/HOMM3/`

## 一键分享

- 结果页现在支持“系统分享”和“复制链接”。
- 分享链接会带上 `?hero=英雄编号` 参数，例如 `?hero=H045`，打开后会直接显示对应结果页。
- 如果浏览器不支持系统分享，会自动回退为复制链接。

## 设计说明

- 结果池使用 19 位英雄，是因为 `38 题 x 4 选项 = 152`，刚好可以让 19 位英雄在总题库中各被映射 8 次，实现等权分布。
- 结果计算并不只看单题映射，还结合了速度、运营、控场、爆发、体面、抽象六个倾向轴，减少“全员挤到同一位英雄”的情况。
- 音乐使用 7 组原始 BGM，对应不同人格氛围。
