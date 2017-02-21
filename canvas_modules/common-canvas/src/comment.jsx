/****************************************************************
** IBM Confidential
**
** OCO Source Materials
**
** SPSS Modeler
**
** (c) Copyright IBM Corp. 2016
**
** The source code for this program is not published or otherwise
** divested of its trade secrets, irrespective of what has been
** deposited with the U.S. Copyright Office.
*****************************************************************/

import React from 'react';
import ReactDOM from 'react-dom';
import {DND_DATA_TEXT} from '../../../constants/constants.js';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBox: false,
      context: false,
      value: this.props.comment.text
    };
    this.dragStart = this.dragStart.bind(this);
    //this.drag = this.drag.bind(this);
    this.dragEnd = this.dragEnd.bind(this);

    this.drop = this.drop.bind(this);

    this.linkDragStart = this.linkDragStart.bind(this);
    this.linkDragOver = this.linkDragOver.bind(this);
    this.linkDragEnd = this.linkDragEnd.bind(this);
    this.linkDrop = this.linkDrop.bind(this);

    this.commentClicked = this.commentClicked.bind(this);
    this.commentDblClicked = this.commentDblClicked.bind(this);
    this.showContext = this.showContext.bind(this);

    this.commentChange = this.commentChange.bind(this);

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleMouseEnterInnerBox = this.handleMouseEnterInnerBox.bind(this);
  }

  handleMouseEnterInnerBox(ev){
      this.setState({
        showBox:false
      });
    }

    handleMouseLeave(ev){
      this.setState({
        showBox:false
      });
    }

    handleMouseEnter(ev){
      this.setState({
        showBox:true
      });
    }

    linkDragStart(connType, ev) {
        ev.dataTransfer.effectAllowed = 'link';

        //avoiding halo's ghost image when dragging
        let ghost = document.createElement("div");
        ghost.style.height="1px";
        ghost.style.width="1px";
        document.body.appendChild(ghost);
        ev.dataTransfer.setDragImage(ghost, 0, 0);

        ev.dataTransfer.setData(DND_DATA_TEXT,
          JSON.stringify({
            operation: 'link',
            id: this.props.comment.id,
            label: this.props.comment.text,
            connType: connType
           }));
      }

      linkDragOver(ev) {
        ev.preventDefault();
      }

      linkDragEnd(connType, ev) {
      }

      linkDrop(ev) {
        this.drop(ev);
      }

  dragStart(ev) {
    ev.dataTransfer.effectAllowed = 'move';

    ev.dataTransfer.setData(DND_DATA_TEXT,
      JSON.stringify({
        operation: 'move',
        id: this.props.comment.id,
        label: this.props.comment.text
       }));
  }

  dragEnd(ev) {
  }

  drop(ev) {
    this.props.commentActionHandler('dropOnComment', ev);
  }

  commentClicked(ev) {
    ev.stopPropagation();
    // comment is already bound
    this.props.commentActionHandler('selected', ev);
  }

  commentDblClicked(ev) {
    ev.stopPropagation();
    this.props.commentActionHandler('editComment', ev);
  }

  commentChange(ev) {
      this.setState({value: ev.target.value});
      this.props.commentActionHandler('changeComment', ev);
  }

  showContext(ev) {
    this.setState({ context: true });
  }

  render() {
    let zoom = this.props.zoom;

    var commentStyle = {
      position: 'absolute',
      top: zoom,
      left: zoom,
      width: Math.round(this.props.comment.width * zoom),
      height: Math.round(this.props.comment.height * zoom),
      fontSize: this.props.fontSize,
      background: this.props.comment.background,
      color: this.props.comment.foreground,
      lineHeight: 1.0,
      overflow: 'hidden'
    };

    var className = "canvas-comment";
    if (this.props.selected) {
      className += " selected";
    }

    var commentArea = <p>{this.state.value}</p>;
    if (this.props.editable) {
        commentArea = <textarea value={this.state.value} spellCheck="true" onChange={this.commentChange} ></textarea>;
    }

    let bTop = Math.round(this.props.comment.yPos * zoom) - (10 * zoom);
    let bLeft = Math.round(this.props.comment.xPos * zoom) + (10 * zoom);
    let bWidth = Math.round(this.props.comment.width * zoom) + (25 * zoom);
    let bHeight = Math.round(this.props.comment.height * zoom) + (20 * zoom);


    let bInnerTop = Math.round(this.props.comment.yPos * zoom) - (zoom);
    let bInnerLeft = Math.round(this.props.comment.xPos * zoom) + (20 * zoom);
    let bInnerWidth = Math.round(this.props.comment.width * zoom) + (5 * zoom);
    let bInnerHeight = Math.round(this.props.comment.height * zoom) + (zoom);


    let paddingBoxStyle = {

          top: bTop,
          left: bLeft,
          width: bWidth,
          height: bHeight,
          border: `${ 8 * zoom}px solid white`,
          position: 'absolute',
          borderRadius: '0%',

          backgroundColor : 'white'

    };

    let boxStyle = (this.state.showBox)
      ? {
          top: bTop,
          left: bLeft,
          width: bWidth,
          height: bHeight,
          border: `${ 7 * zoom}px solid #4178be`,
          position: 'absolute',
          borderRadius: '0%',
          zIndex:1,
          //backgroundColor : 'yellow'
      }
      : {
        top: bTop,
        left: bLeft,
        width: bWidth,
        height: bHeight,
        position: 'absolute',
        borderRadius: '0%',
        zIndex:1,
        //backgroundColor : 'yellow'
      };

      let innerBoxStyle =
         {
           top: bInnerTop,
           left: bInnerLeft,
           width: bInnerWidth,
           height: bInnerHeight,
           position: 'absolute',
           borderRadius: '0',
           zIndex:1,
           //backgroundColor : 'red'
        };

      let box =
        <div>
          <div
            className="padding-box"
            style={paddingBoxStyle}
            >
          </div>

          <div
            className="comment-box"
            style={boxStyle}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            draggable="true"
            onDragStart={this.linkDragStart.bind(null, 'comment')}
            onDragEnd={this.linkDragEnd.bind(null, 'comment')}
            onDrop={this.linkDrop}
            onDragOver={this.linkDragOver}
            onClick={this.props.commentActionHandler.bind(null, 'comment')}
          >
          </div>

          <div
            className="comment-inner-box"
            style={innerBoxStyle}
            onMouseEnter={this.handleMouseEnterInnerBox}
            draggable="true"
            onDragStart={this.dragStart}
            onDragEnd={this.dragEnd}
            onDrop={this.drop}
            onContextMenu={this.props.onContextMenu}
          >
            <div 
              className={className}
              style={commentStyle}
              draggable="true"
              onDragStart={this.dragStart}
              onDragEnd={this.dragEnd}
              onDrop={this.drop}
              onClick={this.commentClicked}
              onDoubleClick={this.commentDblClicked}
              onContextMenu={this.props.onContextMenu}
            >
              {commentArea}
            </div>
          </div>
        </div>;

    return (
          <div>
            {box}
          </div>
    );
  }
}

Comment.propTypes = {
  comment: React.PropTypes.object,
  commentActionHandler: React.PropTypes.func,
  onContextMenu: React.PropTypes.func,
  fontSize: React.PropTypes.number,
  zoom: React.PropTypes.number,
  selected: React.PropTypes.bool,
  editable: React.PropTypes.bool
};

export default Comment;
