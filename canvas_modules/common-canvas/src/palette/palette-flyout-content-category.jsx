/*******************************************************************************
 * Licensed Materials - Property of IBM
 * (c) Copyright IBM Corporation 2017. All Rights Reserved.
 *
 * Note to U.S. Government Users Restricted Rights:
 * Use, duplication or disclosure restricted by GSA ADP Schedule
 * Contract with IBM Corp.
 *******************************************************************************/

import React from "react";
import PropTypes from "prop-types";
import DownIcon from "../../assets/images/down_enabled.svg";
import UpIcon from "../../assets/images/up_enabled.svg";

const ARROW_HEIGHT = 14;
const ARROW_WIDTH = 14;

class PaletteFlyoutContentCategory extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			categoryName: this.props.categoryName
		};

		this.categorySelected = this.categorySelected.bind(this);
	}

	categorySelected() {
		this.props.categorySelectedMethod(this.state.categoryName);
	}

	render() {
		var image = <img className="palette-flyout-category-arrow" src={DownIcon} height={ARROW_HEIGHT} width={ARROW_WIDTH} />;
		if (this.props.selectedCategory === this.props.categoryName) {
			image = <img className="palette-flyout-category-arrow" src={UpIcon} height={ARROW_HEIGHT} width={ARROW_WIDTH} />;
		}
		var content = (
			<div className="palette-flyout-category" onClick={this.categorySelected} value={this.props.categoryName}>
				{this.props.categoryName + " (" + this.props.itemCount + ")"} {image}
			</div>
		);
		return content;
	}
}

PaletteFlyoutContentCategory.propTypes = {
	categoryName: PropTypes.string.isRequired,
	selectedCategory: PropTypes.string.isRequired,
	categorySelectedMethod: PropTypes.func.isRequired,
	itemCount: PropTypes.number.isRequired
};

export default PaletteFlyoutContentCategory;