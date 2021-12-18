/**
 * Created by Arman Samiei on 10/3/2021.
 */
import axios from 'axios'
export const MAX_NUMBER_OF_CARDS = 60;
export const MIN_NUMBER_OF_CARDS = 10;
export const GAME_PAGE_URL = 'gamepage';
export const GAME_END_PAGE_URL = 'gameendpage';
export const NUMBER_OF_TOPS_TO_SHOW = 10;
export const CARD_IMAGES_URL = `https://sahabino-front.herokuapp.com/placeholder/get-by-size`
export default axios.create({
    baseURL: `${CARD_IMAGES_URL}`,
});