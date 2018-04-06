/*******************************************************************************
 * Licensed Materials - Property of IBM
 * (c) Copyright IBM Corporation 2016, 2018. All Rights Reserved.
 *
 * Note to U.S. Government Users Restricted Rights:
 * Use, duplication or disclosure restricted by GSA ADP Schedule
 * Contract with IBM Corp.
 *******************************************************************************/

import React from "react";
import PropTypes from "prop-types";
import Checkbox from "ap-components-react/dist/components/Checkbox";
import ControlUtils from "./../../util/control-utils";

export default class CheckboxsetControl extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(evt) {
		let values = this.props.controller.getPropertyValue(this.props.propertyId);
		if (typeof values === "undefined" || values === null) {
			values = [];
		}
		var index = values.indexOf(evt.target.id);
		if (evt.target.checked && index < 0) {
			// Add to values
			values = values.concat([evt.target.id]);
		}
		if (!(evt.target.checked) && index >= 0) {
			// Remove from values
			values.splice(index, 1);
		}
		this.props.controller.updatePropertyValue(this.props.propertyId, values);
	}

	render() {
		let controlValue = this.props.controller.getPropertyValue(this.props.propertyId);
		if (typeof controlValue === "undefined" || controlValue === null) {
			controlValue = [];
		}
		const conditionProps = {
			propertyId: this.props.propertyId,
			controlType: "checkboxset"
		};
		const conditionState = ControlUtils.getConditionMsgState(this.props.controller, conditionProps);

		const errorMessage = conditionState.message;
		const messageType = conditionState.messageType;
		const icon = conditionState.icon;
		const stateDisabled = conditionState.disabled;
		const stateStyle = conditionState.style;

		let controlIconContainerClass = "control-icon-container";
		if (messageType !== "info") {
			controlIconContainerClass = "control-icon-container-enabled";
		}
		var buttons = [];

		for (var i = 0; i < this.props.control.values.length; i++) {
			var val = this.props.control.values[i];
			var checked = (controlValue.indexOf(val) >= 0);
			var classType = "";
			if (this.state.validateErrorMessage && this.state.validateErrorMessage.type) {
				classType = this.state.validateErrorMessage.type;
			}
			buttons.push(<Checkbox ref={val}
				{...stateDisabled}
				className={"checkboxset-ui-conditions-state-" + classType}
				style={stateStyle}
				id={val}
				key={val + i}
				name={this.props.control.valueLabels[i]}
				onChange={this.handleChange}
				checked={checked}
			/>);
		}

		return (
			<div style={stateStyle}>
				<div id={controlIconContainerClass}>
					<div id={ControlUtils.getControlID(this.props.control, this.props.propertyId)} className="checkbox" style={stateStyle} >
						{buttons}
					</div>
					{icon}
				</div>
				{errorMessage}
			</div>
		);
	}
}

CheckboxsetControl.propTypes = {
	control: PropTypes.object.isRequired,
	propertyId: PropTypes.object.isRequired,
	controller: PropTypes.object.isRequired
};