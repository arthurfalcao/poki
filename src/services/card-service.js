import api from './api';

/**
 * Retorna o cards
 *
 * @export
 * @param {number} [pageSize=null]
 * @returns {array}
 */
export function getCards(pageSize = null) {
  if (pageSize) {
    return api.get(`cards?pageSize=${pageSize}`);
  }
  return api.get('cards');
}

/**
 * Retorna único card pelo código.
 *
 * @export
 * @param {number} id
 * @returns {Promise}
 */
export function getCard(id) {
  return api.get(`cards/${id}`);
}
