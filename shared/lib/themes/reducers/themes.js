/**
 * External dependencies
 */
import { fromJS, Map } from 'immutable';
import transform from 'lodash/object/transform';

/**
 * Internal dependencies
 */
import ThemeConstants from 'lib/themes/constants';

const initialState = fromJS( {
	themes: {},
	currentSiteId: 0
} );

function add( newThemes, themes ) {
	return themes.merge( transform( newThemes, ( result, theme ) => {
		result[ theme.id ] = theme;
	}, {} ) );
}

function setActiveTheme( themeId, themes ) {
	return themes
		.map( theme => theme.delete( 'active' ) )
		.setIn( [ themeId, 'active' ], true );
}

export default( state = initialState, action ) => {
	switch ( action.type ) {
		case ThemeConstants.RECEIVE_THEMES:
			const isNewSite = action.isJetpack && ( action.siteId !== state.get( 'currentSiteId' ) );
			return state
				.update( 'themes', themes => isNewSite ? new Map() : themes )
				.set( 'currentSiteId', action.siteId )
				.update( 'themes', add.bind( null, action.themes ) );

		case ThemeConstants.ACTIVATED_THEME:
			return state.update( 'themes', setActiveTheme.bind( null, action.theme.id ) );
	}
	return state;
};
