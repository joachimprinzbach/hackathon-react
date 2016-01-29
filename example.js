var DataBindingForm = React.createClass({
    getInitialState: function() {
        return {value: 'ReactJS'};
    },
    handleValueChange: function(e) {
        this.setState({value: e.target.value});
    },
    render: function() {
        return (
            <form className="dataBindingForm">
                <label>Hello</label>
                <input
                    type="text"
                    placeholder="Databinding"
                    value={this.state.value}
                    onChange={this.handleValueChange}
                />
                <br />
                <p>{ this.state.value }</p>
            </form>
        );
    }
});

ReactDOM.render(
    <DataBindingForm />,
    document.getElementById('appContainer')
);

