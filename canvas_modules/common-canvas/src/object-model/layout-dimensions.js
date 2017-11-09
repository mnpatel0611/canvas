
const haloLayout = {

	// CSS classes
	cssSelectionHighlight: "d3-obj-selection-highlight",
	cssNodeBodyOutline: "d3-node-body-outline",
	cssNodeLabel: "d3-node-label",
	cssNodePortOutput: "d3-node-port-output",
	cssNodePortInput: "d3-node-port-input",
	cssNodePortInputArrow: "d3-node-port-input-arrow",
	cssNewConnectionLine: "d3-new-connection-line",
	cssNewConnectionStart: "d3-new-connection-start",
	cssNewConnectionBlob: "d3-new-connection-blob",
	cssNewConnectionArrow: "d3-new-connection-arrow",
	cssDataLink: "canvas-data-link",

	// Connection type decides whether the node to node connections use the
	// 'halo' connection mechanism and arrows pointing directly from source to
	// target or the 'ports' connections with connection lines draw from output
	// ports to input ports.
	connectionType: "halo",

	// Node format specifies whether the image and label are arranged side by side
	// (horizontal) or with the image above the label (vertical).
	nodeFormatType: "vertical",

	// Default node sizes. The height might be overridden for nodes with a more ports
	// than will fit in the default size.
	defaultNodeWidth: 60,
	defaultNodeHeight: 66,

	imageWidth: 48,
	imageHeight: 48,

	imagePosX: 6,
	imagePosY: 0,

	// Sets the justification of label and icon within the node height. This
	// overrides any labelPosY value provided. Possible value are "center" or
	// "none". Specify "none" to use the labelPosY value.
	labelAndIconVerticalJustification: "none",

	// Horizontal Justification of the lable based on label position X and Y.
	labelHorizontalJustification: "center",

	// Specifies whether a label that has been truncated should be displayed
	// in full when the pointer is hovered over the truncated label.
	displayFullLabelOnHover: true,

	labelWidth: 52,
	labelHeight: 12,

	// The underhang of letters below the baseline for the label font used
	labelDescent: 3,

	labelPosX: 4,
	labelPosY: 53,

	decoratorHeight: 12,
	decoratorWidth: 12,

	decoratorTopY: 0,
	decoratorBottomY: 36,

	decoratorLeftX: 6,
	decoratorRightX: 42,

	// Draw node as a simple rectangle
	nodeShape: "rectangle",

	// The gap between a node or comment and its selection highlight rectangle
	highLightGap: 4,

	// Whether to display a link line when linked node/comments overlap
	displayLinkOnOverlap: false,

	// What point to draw the link line towards. Possible values are image_center or node_center.
	// This is used for comment links going towards nodes.
	drawLinkLineTo: "image_center",

	// Error indicator dimensions
	errorCenterX: 54,
	errorCenterY: 0,
	errorRadius: 7,

	// The gap between node or comment and the link line.
	linkGap: 7,

	// When sizing a comment this decides the size of the corner area for
	// diagonal sizing.
	cornerResizeArea: 10,

	// The gap between the edge of the comment rectangle and the comment text.
	commentWidthPadding: 3,

	// Initialize values for drawing connectors. minInitialLine is the
	// size of the vertical line protruding from the source or target handles
	// when such a line is required for drawing connectors.
	elbowSize: 10,
	minInitialLine: 30,

	// Comment Halo size
	haloCommentGap: 11, // Gap between comment rectangle and its halo

	// Node Halo sizes
	haloCenterX: 30,
	haloCenterY: 24,
	haloRadius: 29
};

const portsHorizontal = {
	// CSS classes
	cssSelectionHighlight: "d3-obj-selection-highlight-austin",
	cssNodeBodyOutline: "d3-node-body-outline-austin",
	cssNodeLabel: "d3-node-label-austin",
	cssNodePortOutput: "d3-node-port-output-austin",
	cssNodePortInput: "d3-node-port-input-austin",
	cssNodePortInputArrow: "d3-node-port-input-arrow-austin",
	cssNewConnectionLine: "d3-new-connection-line-austin",
	cssNewConnectionStart: "d3-new-connection-start-austin",
	cssNewConnectionBlob: "d3-new-connection-blob-austin",
	cssNewConnectionArrow: "d3-new-connection-arrow-austin",
	cssDataLink: "canvas-data-link-austin",

	// Connection type decides whether the node to node connections use the
	// 'halo' connection mechanism and arrows pointing directly from source to
	// target or the 'ports' connections with connection lines draw from output
	// ports to input ports.
	connectionType: "ports",

	// Node format specifies whether the image and label are arranged side by side
	// (horizontal) or with the image above the label (vertical).
	nodeFormatType: "horizontal",

	// Default node sizes. The height might be overridden for nodes with a more ports
	// than will fit in the default size.
	defaultNodeWidth: 160,
	defaultNodeHeight: 40,

	imageWidth: 26,
	imageHeight: 26,

	imagePosX: 6,
	imagePosY: 7,

	// Sets the justification of label and icon within the node height. This
	// overrides any labelPosY value provided. Possible value are "center" or
	// "none". Specify "none" to use the labelPosY value.
	labelAndIconVerticalJustification: "center",

	// Horizontal Justification of the lable based on label position X and Y.
	labelHorizontalJustification: "left",

	// Specifies whether a label that has been truncated should be displayed
	// in full when the pointer is hovered over the truncated label.
	displayFullLabelOnHover: false,

	labelWidth: 104,
	labelHeight: 12,

	// The underhang of letters below the baseline for the label font used
	labelDescent: 3,

	labelPosX: 38,
	labelPosY: 14,

	decoratorHeight: 12,
	decoratorWidth: 12,

	decoratorTopY: 0,
	decoratorBottomY: 28,

	decoratorLeftX: 2,
	decoratorRightX: 144,

	// Draw node as a rectangle with port arcs around the ports
	nodeShape: "port-arcs",

	// The gap between a node or comment and its selection highlight outline
	highLightGap: 2,

	// Whether to display a link line when linked node/comments overlap
	displayLinkOnOverlap: true,

	// What point to draw the link line towards. Possible values are image_center or node_center.
	// This is used for comment links going towards nodes.
	drawLinkLineTo: "node_center",

	// Error indicator dimensions
	errorCenterX: 30,
	errorCenterY: 10,
	errorRadius: 5,

	// The gap between node or comment and the link line.
	linkGap: 7,

	// When sizing a comment this decides the size of the corner area for
	// diagonal sizing.
	cornerResizeArea: 10,

	// The gap between the edge of the comment rectangle and the comment text.
	commentWidthPadding: 3,

	// Initialize values for drawing connectors. minInitialLine is the
	// size of the vertical line protruding from the source or target handles
	// when such a line is required for drawing connectors.
	elbowSize: 10,
	minInitialLine: 30,

	// Radius of the port circle
	portRadius: 3,

	// Radius of an imaginary circle around the port. This controls the
	// spacing of ports and the size of port arcs when nodeShape is set to
	// port-arcs.
	portArcRadius: 6,

	// Spacing between the port arcs around the ports.
	portArcSpacing: 3,

	// Default position of a single port - for vertical node format this
	// is half way down the image rather than the center of the node.
	portPosY: 20,

	// Comment port (circle) radius
	commentPortRadius: 5,

	// Display of vertical ellipsis to show context menu
	ellipsisWidth: 4,
	ellipsisHeight: 16,
	ellipsisPosX: 148,
	ellipsisPosY: 12
};

const portsVertical = {
	// CSS classes
	cssSelectionHighlight: "d3-obj-selection-highlight",
	cssNodeBodyOutline: "d3-node-body-outline",
	cssNodeLabel: "d3-node-label",
	cssNodePortOutput: "d3-node-port-output",
	cssNodePortInput: "d3-node-port-input",
	cssNodePortInputArrow: "d3-node-port-input-arrow",
	cssNewConnectionLine: "d3-new-connection-line",
	cssNewConnectionStart: "d3-new-connection-start",
	cssNewConnectionBlob: "d3-new-connection-blob",
	cssNewConnectionArrow: "d3-new-connection-arrow",
	cssDataLink: "canvas-data-link",

	// Connection type decides whether the node to node connections use the
	// 'halo' connection mechanism and arrows pointing directly from source to
	// target or the 'ports' connections with connection lines draw from output
	// ports to input ports.
	connectionType: "ports",

	// Node format specifies whether the image and label are arranged side by side
	// (horizontal) or with the image above the label (vertical).
	nodeFormatType: "vertical",

	// Default node sizes. The height might be overridden for nodes with a more ports
	// than will fit in the default size.
	defaultNodeWidth: 70,
	defaultNodeHeight: 75,

	imageWidth: 48,
	imageHeight: 48,

	imagePosX: 11,
	imagePosY: 5,

	// Sets the justification of label and icon within the node height. This
	// overrides any labelPosY value provided. Possible value are "center" or
	// "none". Specify "none" to use the labelPosY value.
	labelAndIconVerticalJustification: "center",

	// Horizontal Justification of the lable based on label position X and Y.
	labelHorizontalJustification: "center",

	// Specifies whether a label that has been truncated should be displayed
	// in full when the pointer is hovered over the truncated label.
	displayFullLabelOnHover: true,

	labelWidth: 64,
	labelHeight: 12,

	// The underhang of letters below the baseline for the label font used
	labelDescent: 3,

	labelPosX: 3,
	labelPosY: 57,

	decoratorHeight: 12,
	decoratorWidth: 12,

	decoratorTopY: 5,
	decoratorBottomY: 41,

	decoratorLeftX: 10,
	decoratorRightX: 46,

	// Draw node as a simple rectangle
	nodeShape: "rectangle",

	// The gap between a node or comment and its selection highlight rectangle
	highLightGap: 4,

	// Whether to display a link line when linked node/comments overlap
	displayLinkOnOverlap: true,

	// What point to draw the link line towards. Possible values are image_center or node_center.
	// This is used for comment links going towards nodes.
	drawLinkLineTo: "node_center",

	// Error indicator dimensions
	errorCenterX: 48,
	errorCenterY: 0,
	errorRadius: 5,

	// The gap between node or comment and the link line.
	linkGap: 7,

	// When sizing a comment this decides the size of the corner area for
	// diagonal sizing.
	cornerResizeArea: 10,

	// The gap between the edge of the comment rectangle and the comment text.
	commentWidthPadding: 3,

	// Initialize values for drawing connectors. minInitialLine is the
	// size of the vertical line protruding from the source or target handles
	// when such a line is required for drawing connectors.
	elbowSize: 10,
	minInitialLine: 30,

	// Radius of the port circle
	portRadius: 6,

	// Radius of an imaginary circle around the port. This controls the
	// spacing of ports and the size of port arcs when nodeShape is set to
	// port-arcs.
	portArcRadius: 10, // Defines an imaginary circle around the circle port

	// Spacing between the port arcs around the ports.
	portArcSpacing: 0,

	// Default position of a single port - for vertical node format this
	// is half way down the image rather than the center of the node.
	portPosY: 29,

	// Comment port (circle) radius
	commentPortRadius: 5,

	// Display of vertical ellipsis to show context menu
	ellipsisWidth: 5,
	ellipsisHeight: 15,
	ellipsisPosX: 56,
	ellipsisPosY: 7
};


export default class LayoutDimensions {
	static getLayout(type) {
		if (type === "halo") {
			return haloLayout;
		} else if (type === "ports-vertical") {
			return portsVertical;
		}
		return portsHorizontal;
	}
}