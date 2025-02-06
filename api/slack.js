import { WebClient } from "@slack/web-api";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { grade, division, name, email, message } = req.body;

  if (!process.env.SLACK_TOKEN || !process.env.SLACK_CHANNEL_ID) {
    return res.status(500).end();
  }

  try {
    const webClient = new WebClient(process.env.SLACK_TOKEN);
    const slackMessage = `
新しい問い合わせがありました：
- 学年: ${grade}
- 学部: ${division}
- 名前: ${name}
- メール: ${email}
- 内容:
${message}`;

    await webClient.chat.postMessage({
      text: slackMessage,
      channel: process.env.SLACK_CHANNEL_ID,
    });

    res.status(200).end();
  } catch (error) {
    res.status(500).end();
  }
}