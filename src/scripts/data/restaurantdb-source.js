/* eslint-disable no-unreachable */
import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDbSource {
    static async listResto() {
        const response = await fetch(API_ENDPOINT.LIST);
        const responseJson = await response.json();
        return responseJson.restaurants;
    }

    static async detailResto(id) {
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        const responseJson = await response.json();
        return responseJson.restaurant;
    }

    static async searchResto(value) {
        const response = await fetch(API_ENDPOINT.SEARCH(value));
        const responseJson = await response.json();
        return responseJson.restaurants;
    }

    static async reviewResto(review) {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(review),
        };
        const response = await fetch(API_ENDPOINT.REVIEW, options);
        return response;
    }
}

export default RestaurantDbSource;