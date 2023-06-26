/**
 * TODO
 *
 * Aqui é onde vamos fazer o Manager que vai controlar a música/bot, por ex:
 * http: https://198.343.4.24/api/pause/{guildid}/{channelid}/
 * js: new Client({ guildId: '', channelId: '' }).pauseMusic()
 */

import SongController from "./SongController";
import Base from "./base";

class Client extends Base {
	songController = new SongController;
}

export default Client