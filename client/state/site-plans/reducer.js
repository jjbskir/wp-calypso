/**
 * External dependencies
 */
import { combineReducers } from 'redux';

/**
 * Internal dependencies
 */
import { createSitePlanObject } from './assembler';
import {
	RECEIVE_SITE_PLANS
} from './action-types';

const sitePlans = ( state = {}, action ) => {
	switch ( action.type ) {
		case RECEIVE_SITE_PLANS:
			return {
				[ action.siteId ]: action.plans.map( createSitePlanObject )
			}
	}

	return state;
}

export default combineReducers( {
	sitePlans
} );
