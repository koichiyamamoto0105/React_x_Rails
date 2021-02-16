const DEFAULT_API_LOCALHOST = 'https://.vfs.cloud9.ap-northeast-1.amazonaws.com/api/v1'


export const restaurantsIndex = `${DEFAULT_API_LOCALHOST}/restaurants`
export const foodsIndex = (restaurantId) =>
  `${DEFAULT_API_LOCALHOST}/restaurants/${restaurantId}/foods`
export const lineFoods = `${DEFAULT_API_LOCALHOST}/line_foods`;
export const lineFoodsReplace = `${DEFAULT_API_LOCALHOST}/line_foods/replace`;
export const orders = `${DEFAULT_API_LOCALHOST}/orders`;