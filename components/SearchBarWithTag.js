import React from 'react';

export default class SearchBarWithTag extends React.Component {
	constructor() {
		super();
		//The inputText state and the tags currently displayed
		this.state = {
			currentTags: ["fruit: apple", "color: black"],
			gotRidOfScrollbar: false,
			hasPlaceholder: true,
		}
		//Tags the user can choose from
		this.tags = ["fruit", "color"]

		this.handleChange = this.handleChange.bind(this);
		this.saveTag = this.saveTag.bind(this);
		this.deleteTag = this.deleteTag.bind(this);
		this.removePlaceholder = this.removePlaceholder.bind(this);
		this.inputRef = React.createRef();
		this.inputWrapperRef = React.createRef();
		this.focusSearchbar = this.focusSearchbar.bind(this)
		this.handleScrollLeft = this.handleScrollLeft.bind(this)
	}

	//Get rid of the ugly scrollbar but still keep scrolling functionality
	componentDidMount() {
		if (!this.state.gotRidOfScrollbar) {
			var inputWrapper = this.inputWrapperRef.current;
			inputWrapper.style.paddingBottom = inputWrapper.offsetHeight - inputWrapper.clientHeight + "px";
			this.setState({ gotRidOfScrollbar: true })
		}
		this.focusSearchbar(this.inputRef)
	}

	render() {
		return (
			<div className="SearchBar TextInput">
				<div id="SearchBar__InputWrapper" className="SearchBar__InputWrapper" ref={this.inputWrapperRef}>
					<TagWrapper currentTags={this.state.currentTags} saveTag={this.saveTag} deleteTag={this.deleteTag} />
					<SearchInput inputText={this.state.inputText} handleChange={this.handleChange} removePlaceholder={this.removePlaceholder} hasPlaceholder={this.state.hasPlaceholder} ref={this.inputRef} handleScrollLeft={this.handleScrollLeft} />
				</div>
			</div>
		);
	}

	handleChange(event) {
		let str = event.target.innerText;
		for (let tag of this.tags) {
			let regexp;
			if (event.key === 'Enter') {
				//When `Enter` was pressed we do not have to check for a comma or a space
				regexp = new RegExp(`@${tag} ([^ ,\u00A0]+)`);
			} else {
				regexp = new RegExp(`@${tag} ([^ ,\u00A0]+)[ ,\u00A0]`);
			}
			if (regexp.test(str)) {
				//User typed a new tag, add it to currentTags
				let selected = str.match(regexp)[1];
				let currentTags = this.state.currentTags;
				currentTags.push(tag + ": " + selected)
				let newText = str.replace(regexp, '');
				event.target.innerText = newText;
				this.setState({
					currentTags: currentTags,
				}, () => { this.focusSearchbar(this.inputRef) });
			}
		}
	}

	handleScrollLeft() {
		console.log()
		let scrollLeft = this.inputWrapperRef.current.scrollLeft
		if (scrollLeft !== 0) {
			this.inputWrapperRef.current.scrollLeft = Math.max(0, scrollLeft - 8);
		}
	}

	//User is done with editing tag, so save it and re-render the tags.
	saveTag(index, text) {
		let currentTags = this.state.currentTags;
		currentTags[index] = text
		this.setState({ currentTags: currentTags });
		this.focusSearchbar(this.inputRef);
	}

	focusSearchbar(ref) {
		if (ref && ref.current) {
			let input = ReactDOM.findDOMNode(ref.current)
			input.focus();
			let range = document.createRange();
			range.selectNodeContents(input);
			range.collapse(false);
			let selection = window.getSelection();
			selection.removeAllRanges();
			selection.addRange(range);
		}
	}

	//Deletes a tag
	deleteTag(index) {
		let currentTags = this.state.currentTags;
		currentTags.splice(index, 1);
		this.setState({ currentTags: currentTags });
	}

	removePlaceholder() {
		this.setState({ hasPlaceholder: false, inputText: '' });
	}
}


function TagWrapper(props) {
	let elements = []
	for (let tag of props.currentTags) {
		elements.push(
			<SearchTag key={elements.length} tagText={tag} deleteTag={props.deleteTag} saveTag={props.saveTag} index={elements.length} />
		);
	}
	return (
		<div className="SearchBar__TagWrapper">
			{elements}
		</div>
	);
}

class SearchTag extends React.Component {
	constructor() {
		super();
		this.blockEnter = this.blockEnter.bind(this);
		this.deleteTag = this.deleteTag.bind(this);
		this.stopEditing = this.stopEditing.bind(this)
		this.inputRef = React.createRef();
		this.state = {
			editing: false
		}
	}

	componentDidUpdate() {
		let input = this.inputRef.current
		if (input) {
			input.focus();
			let range = document.createRange();
			range.selectNodeContents(input);
			range.collapse(false);
			let selection = window.getSelection();
			selection.removeAllRanges();
			selection.addRange(range);
		}
	}

	render() {
		if (this.state.editing) {
			return (
				<div className='SearchBar__Tag'>
					<span>{this.props.tagText.substring(0, this.props.tagText.indexOf(':') + 1)}&nbsp;</span>
					<span onKeyDown={this.blockEnter} className="SearchBar__TagEditor" contentEditable={true} ref={this.inputRef} onBlur={this.stopEditing} dangerouslySetInnerHTML={{ __html: this.props.tagText.substring(this.props.tagText.indexOf(':') + 1) }}></span>
					<button className="SearchBar__CloseButton" onClick={this.deleteTag}>{'\u2716'}</button>
				</div>
			);
		} else {
			return (
				<div className='SearchBar__Tag'>
					<button className="SearchBar__TagText" onClick={() => { this.setState({ editing: true }) }} tabIndex="0">{this.props.tagText}</button>
					<button className="SearchBar__CloseButton" onClick={this.deleteTag}>{'\u2716'}</button>
				</div>
			);
		}
	}

	blockEnter(event) {
		if (event.key === "Enter") {
			event.preventDefault();
			this.setState({ editing: false });
			let text = event.target.previousSibling.innerText + event.target.innerText;
			this.props.saveTag(this.props.index, text);
		}
	}

	deleteTag() {
		this.props.deleteTag(this.props.index);
	}

	stopEditing() {
		this.setState({ editing: false })
	}
}

class SearchInput extends React.Component {
	constructor() {
		super();
		this.handleKeyDown = this.handleKeyDown.bind(this);
	}

	//When pressing enter, prevent it from creating a newline, finish tag instead
	handleKeyDown(event) {
		if (event.key === "Enter") {
			event.preventDefault();
			this.props.handleChange(event);
		} else if (event.key === "ArrowLeft" && window.getSelection().anchorOffset === 0) {
			this.props.handleScrollLeft()
		}
	}

	render() {
		if (this.props.hasPlaceholder) {
			return (
			<span onFocus={this.props.removePlaceholder} onInput={this.props.handleChange} onKeyDown={this.handleKeyDown} className="SearchBar__Input" tabIndex="0"></span>
			);
		} else {
			return (
				<span onInput={this.props.handleChange} onKeyDown={this.handleKeyDown} className="SearchBar__Input" contentEditable={true} tabIndex="0" ></span>
			);
		}

	}
}