import React from 'react'
import Icon from '../icon/icon.jsx'

export default class Dropdown extends React.Component {
	constructor(props) {
		super(props)

		this.handleDropdownChange = this.handleDropdownChange.bind(this)
		this.setDropdownLabel = this.setDropdownLabel.bind(this)
		this.renderOptions = this.renderOptions.bind(this)
	}

	handleDropdownChange(e) {
		const value = e.target.value
		this.props.onDropdownSelect(value)
	}

	setDropdownLabel() {
		const { dropdownLabel, options } = this.props
		const findOption = options.find(option => {
			return option['value'] === dropdownLabel
		})
		return findOption['display']
	}

	renderOptions() {
		const { options } = this.props
		return options.map(option => {
			return (
				<option key={`${option['value']}`} value={`${option['value']}`}>
					{`${option['display']}`}
				</option>
			)
		})
	}

	render() {
		const { dropdownLabel } = this.props
		return (
			<div className="dropdown">
				<span className="dropdown-label">{this.setDropdownLabel()}</span>
				<select onChange={this.handleDropdownChange} value={dropdownLabel}>
					{this.renderOptions()}
				</select>
				<Icon className="dropdown-icon" name="chevron" size={13} />
			</div>
		)
	}
}
