import React from 'react';
import { PropTypes } from 'prop-types';

 

class Articles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articleObj: PropTypes.object

        }
    }

    render() {
        const { image } = this.props.data;
        const { title } = this.props.data;
        const { description } = this.props.data;


        return (
            <div class="card">
            <tr>
            <img class="img" src={ image } alt={ title } height='40%' width='40%' />
            </tr> 
            <tr> 
              <div class="column">
                <div class="title"> <p>{ title }</p></div>
                <div class="description"> <p>{ description }</p></div>
              </div>
            </tr>
              

            </div>
            
        );
    }
}

Articles.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
}

export default Articles;