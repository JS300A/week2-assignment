import React from 'react';
import PropTypes from 'prop-types';
import Author from './author.js'
 

class Articles extends React.Component {
    constructor(props) {
        super(props);
  
    }

    render() {
        const { image, title, description, author, postedDate, minutesToRead } = this.props.data;

        return (
            <div className="card">
          
            <img className="img" src={ image } alt={ title } height='40%' width='40%' />
         
              <div className="column">
                <div className="title"> <p>{ title }</p></div>
                <div className="description"> <p>{ description }</p></div>
                {/* <img class="authorImage" src={author.image}></img> */}
                {/* <div class="author">{ author.name} </div> */}
                <Author image={author.image} name={author.name} postedDate={postedDate} minutesToRead={minutesToRead} />
            </div>
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