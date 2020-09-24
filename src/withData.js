import React from 'react'

const withData = (WrappedComponent, dataSource) => {
    class InnerComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: ''
            }
        }
        componentDidMount() {
            fetch(this.props.dataSource)
            .then((response) => response.json())
            .then((json) => {
            console.log(json);
            this.setState({data: json});
            })
        }
        
        render() {
          return <WrappedComponent data={this.state.data} {...this.props}/>
        }

    }
        return InnerComponent;
    }

export default withData;