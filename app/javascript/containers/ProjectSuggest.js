import React from "react";
import Autosuggest from "react-autosuggest";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as ProjectActions from "../actions/projectActions";

class ProjectSuggest extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
      suggestions: []
    };
  }

  escapeRegexCharacters = str => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  getSuggestions = value => {
    const escapedValue = this.escapeRegexCharacters(value.trim());

    if (escapedValue === "") {
      return [];
    }

    const regex = new RegExp("^" + escapedValue, "i");
    const suggestions = this.props.projects.filter(language =>
      regex.test(language.name)
    );

    if (suggestions.length === 0) {
      return [{ isAddNew: true }];
    }

    return suggestions;
  };

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };

  getSuggestionValue = suggestion => {
    if (suggestion.isAddNew) {
      this.props.actions.createProject({ name: this.state.value });
      this.props.handleProjectCreation(suggestion)
      return this.state.value;
    }
    this.props.handleProjectSuggest(suggestion.id)
    return suggestion.name;
  };

  renderSuggestion = suggestion => {
    if (suggestion.isAddNew) {
      return (
        <span>
          [+] Add new: <strong>{this.state.value}</strong>
        </span>
      );
    }

    return suggestion.name;
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      name: "project",
      title: "Project",
      placeholder: "Project",
      value,
      onChange: this.onChange
    };
    const theme = {
      container: "autosuggest",
      input: "form-control",
      suggestionsContainer: "dropdown",
      suggestionsList: `dropdown-menu ${suggestions.length ? "show" : ""}`,
      suggestion: "dropdown-item",
      suggestionFocused: "active"
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
        theme={theme}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ProjectActions, dispatch)
});

export default connect(null, mapDispatchToProps)(ProjectSuggest);