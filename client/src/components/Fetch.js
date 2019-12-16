import React from 'react';
import axios from 'axios';
import Card from './Card';

class Fetch extends React.Component {
    constructor(){
        super()
        this.state = {
            data: []
        }
    };

    componentDidMount(){
        axios.get('http://localhost:5000/api/players')
        .then(res=>{
            this.setState({
                data: res.data
            })
            console.log('FETCH: ', this.state.data)
        })
        .catch(err=>{
            console.log('error: ', err)
        })
    };

    render(){
        return(
            <div>
                This is the Fetch Component
                {this.state.data.map((item, index)=>{
                    return <Card
                    item={item}
                    key={this.index}
                    />
                })}
            </div>
        )
    }
};

export default Fetch;