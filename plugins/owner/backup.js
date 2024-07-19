import { promisify } from "util"
import cp, { exec as _exec } from "child_process"

export default {
    command: ["backup"],
    description: "Backing up files",
    example: "",
    name: "backup",
    tags: "owner",

    owner: true,
    private: true,

    run: async(m, { conn }) => {
        let exec = promisify(_exec).bind(cp)
        let { stdout } = await exec("zip -r storage/backup.zip * -x 'node_modules/*'")

        if (stdout) conn.sendMessage(m.chat, { document: await func.fs.readFileSync("./storage/backup.zip"), fileName: "backup-script.zip", mimetype: "application/zip", caption: "Successfully backed up the script [ ✅ ]" }, { quoted: m })
        func.fs.unlinkSync("./storage/backup.zip")
    }
}
