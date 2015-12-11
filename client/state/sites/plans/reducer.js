/**
 * Internal dependencies
 */
import { createSitePlanObject } from './assembler';
import {
	RECEIVE_SITE_PLANS
} from './action-types';

export const plans = ( state = {}, action ) => {
	switch ( action.type ) {
		case RECEIVE_SITE_PLANS:
			return {
				[ action.siteId ]: action.plans.map( createSitePlanObject )
			}
	}

	return state;
};
