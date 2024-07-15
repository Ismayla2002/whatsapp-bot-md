const { bot } = require('../lib/')
bot(
	{
		pattern: 'echo ?(.*)',
		fromMe: true,
		desc: 'Echoes back the message',
		type: 'misc',
	},
	async (message, match) => {
		if (!match)
			return await message.send('_Example: echo Hello World_')
		return await message.send(match)
	}
)
