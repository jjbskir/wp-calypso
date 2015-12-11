/**
 * Internal dependencies
 */
import wpcom from 'lib/wp';
import {
	RECEIVE_SITE_PLANS,
	FAIL_SITE_PLANS_REQUEST
} from './action-types';

export function fetchSitePlans( siteId ) {
	return ( dispatch ) => {
		return new Promise( ( resolve ) => {
			wpcom.undocumented().getSitePlans( siteId, ( error, data ) => {
				if ( error ) {
					dispatch( failSitePlansRequest( siteId, error ) );
				} else {
					dispatch( receiveSitePlans( siteId, data ) );
				}

				resolve();
			} );
		} );
	}
}

/**
 * Returns an action object to be used in signalling that an object containing
 * the plans for a given site have been received.
 *
 * @param  {Object} siteId ID of the concerned site
 * @param  {Object} plans  Plans received
 * @return {Object}        Action object
 */
export function receiveSitePlans( siteId, plans ) {
	return {
		type: RECEIVE_SITE_PLANS,
		siteId,
		plans
	}
}

/**
 * Returns an action object to be used in signalling that a network request for
 * getting site-specific plans has failed.
 *
 * @param  {Number} siteId Site ID
 * @param  {Object} error  API response error
 * @return {Object}        Action object
 */
export function failSitePlansRequest( siteId, error ) {
	return {
		type: FAIL_SITE_PLANS_REQUEST,
		siteId,
		error
	}
}
