import React from 'react';
import { PropTypes } from 'prop-types';

class Author extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authorObj: PropTypes.object

        };
    }

    render() { 
        const { image } = this.props.data.author;
        const { name } = this.props.data.author;


        return (
            <div class="card">
                <img class="img" src={ image } alt='' height='20%' width='20%' />
            
              <div class="column">
                <div class="name"> <p>{ name }</p></div>
              </div>

            </div>

            
        );
    }
}

Author.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string
}

export default Author;