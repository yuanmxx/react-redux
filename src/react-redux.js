import React,{Component} from 'react'
import PropTypes from 'prop-types'

// Provider
export class Provider extends Component {
    static childContextTypes = {
      store: PropTypes.object
    }
  
    getChildContext() {
      return { store: this.props.store }
    }
  
    render() {
      return this.props.children
    }
}

// connect
export function connect(mapStateToProps,mapDispatchToProps){
    return function(Com){
        class Connect extends Component{
            static contextTypes = {
                store: PropTypes.object
            }
            componentDidMount() {  
                const { store:{ subscribe } } = this.context;
                subscribe(this.handleChangeView);
            }

            handleChangeView = () => {
                // 用你想要得方法去更新视图,这里我就要setState方法
                this.setState({})
            }

            render(){
                const { store:{ getState,dispatch },props } = this.context;
                return(
                    <Com 
                        {...mapStateToProps(getState())}
                        {...mapDispatchToProps(dispatch)}
                    />
                )
            }
        }
        return Connect;
    }
}