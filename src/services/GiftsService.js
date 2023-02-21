import { sandBoxApi } from "./AxiosService"
import { logger } from "../utils/Logger.js"
import { AppState } from "../AppState"
import { Gift } from "../models/Gifts"

class GiftsService {

    async getGifts() {
        const res = await sandBoxApi.get('gifts')
        logger.log('Getting em gifts', res.data)

        AppState.gifts = res.data.map(g => new Gift(g))
    }


}

export const giftsService = new GiftsService()