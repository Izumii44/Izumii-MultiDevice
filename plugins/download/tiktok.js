import { tiktokdl } from "../../storage/script/tiktok.js";

export default {
    command: ["tiktok"],
    description: "Mengunduh video tiktok",
    example: "Example: %p%cmd <URL>",
    name: "tiktok",
    tags: "download",

    limit: true,

    run: async(m, { conn, args }) => {
	if (!/https?:\/\/(www\.|v(t|m)\.|t\.)?tiktok\.com/i.test(args[0]))
		throw `Link Invalid!`;
	
		await conn.sendMessage(m.chat, {
          react: {
            text: '⏳',
            key: m.key,
          }})
          try {
  let data = await tiktokdl(args[0])
  await conn.sendMessage(m.chat, {
                    video: {
                        url: data.server1.url
                    },
                    caption: 'Successfully downloading TikTok videos'
                }, {
                    quoted: m
                })
                } catch (e) {
                m.reply('Error feature, please try again');
                }
    }
}
