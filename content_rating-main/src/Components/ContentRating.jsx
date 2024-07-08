
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
    constructor() {
        super();
        this.state = {
            likes: 0,
            dislikes: 0,
            totalRatings: 0,
            handleLike: () => {
                this.setState((prevState) => ({
                    likes: prevState.likes + 1,
                    totalRatings: prevState.totalRatings + 1
                }));
            },
            handleDislike: () => {
                this.setState((prevState) => ({
                    dislikes: prevState.dislikes + 1,
                    totalRatings: prevState.totalRatings + 1
                }));
            }
        }
    }
    render() {
        return (
            <>
                <div className='content-rating'>
                    <p>
                    React is like the superhero of JavaScript libraries, straight out of Facebook's secret lab. 
                    With its component-based architecture, React chops up complex user interfaces into reusable little pieces, 
                    much like a chef prepping ingredients. With its virtual DOM, React sneaks in updates to the UI faster 
                    than Speedy Gonzales, ensuring a buttery smooth user experience. Adored by developers of SPAs, web applications, 
                    and even mobile apps via React Native, React does it all: navigation, state management, 
                    creating robust and scalable applications. Basically, React is the Swiss Army knife for modern developers, 
                    enabling them to craft dynamic and interactive user interfaces with astonishing ease. In short, with React, 
                    web development becomes child's play!
                    </p>
                    <div className='rating-buttons'>
                        <button className="like-button" onClick={this.state.handleLike}>
                            Like ({this.state.likes})
                        </button>
                        <button className="dislike-button" onClick={this.state.handleDislike}>
                            Dislike ({this.state.dislikes})
                        </button>
                        <p>Total Ratings: {this.state.totalRatings}</p>
                    </div>
                </div>
            </>
        );
    }
}

export default ContentRating;
