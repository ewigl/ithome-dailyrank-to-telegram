import { appendFileSync } from "fs";

// https://api.rebang.today/v1/items?tab=ithome&sub_tab=today&page=1&version=1
const API_HOST = "https://api.rebang.today";
const API_PATH = "/v1/items";
const API_PARAM = "?tab=ithome&sub_tab=today&page=1&version=1";

async function getITHomeRankDaily(account) {
  const response = await fetch(API_HOST + API_PATH + API_PARAM, {
    method: "GET",
  });

  const responseJson = await response.json();

  const newsList = JSON.parse(responseJson.data.list);

  const formatedNewsList = newsList.map((item, index) => {
    const { title, url, desc } = item;
    return `*${title}*\n\n${desc}[查看详情](${url})`;
  });

  return formatedNewsList.join("\n\n\n");
}

function setGitHubOutput(name, value) {
  appendFileSync(process.env.GITHUB_OUTPUT, `${name}<<EOF\n${value}\nEOF\n`);
}

async function main() {
  let tg_token, tg_to;

  if (process.env.TELEGRAM_TOKEN && process.env.TELEGRAM_TO) {
    tg_token = process.env.TELEGRAM_TOKEN;
    tg_to = process.env.TELEGRAM_TO;
  } else {
    console.error("未正确配置环境变量。");
    setGitHubOutput("result", "未正确配置环境变量。");
    process.exit(1);
  }

  const result = await getITHomeRankDaily();

  setGitHubOutput("result", result);
}

main();
