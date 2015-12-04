/**
 * External dependencies
 */
import React from 'react';
import classNames from 'classnames';

/**
 * Internal dependencies
 */
import Card from 'components/card';
import Gridicon from 'components/gridicon';

export default React.createClass( {

	displayName: 'HeaderCake',

	propTypes: {
		onClick: React.PropTypes.func.isRequired,
		onTitleClick: React.PropTypes.func,
		backText: React.PropTypes.oneOfType( [
			React.PropTypes.element,
			React.PropTypes.string
		] )
	},

	getDefaultProps() {
		return {
			isCompact: false
		};
	},

	render() {
		const classes = classNames(
			'header-cake',
			this.props.className,
			{
				'is-compact': this.props.isCompact
			}
		);

		return (
			<Card className={ classes }>
				<a className="header-cake__back" onClick={ this.props.onClick }>
					<Gridicon icon="chevron-left" size={ 16 } />
					<span className="header-cake__back-text">{ this.props.backText || this.translate( 'Back' ) }</span>
				</a>
				<div className="header-cake__title" onClick={ this.props.onTitleClick }>
					{ this.props.children }
				</div>
			</Card>
		);
	}

} );
