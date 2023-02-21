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

    async submit(formData) {
        let gift = new Gift(formData)
        const res = await sandBoxApi.post('gifts', { params: formData })
        logger.log("sending gift", res.data)
    }
}

export const giftsService = new GiftsService()