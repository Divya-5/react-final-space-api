import React, { Component } from 'react'

class PostList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }
    async componentDidMount() {
        const url = "https://finalspaceapi.com/api/v0/character"
        const res = await fetch(url);
        const posts = await res.json();
        this.setState({ posts })
    }
    render() {
        const { posts } = this.state;
        return (
            <>
                <h1>
                    Final Space React API
            </h1>
                <div className='content-wrapper'>
                    {posts && posts.length && posts.map(posts => <div key={posts.id}>
                        <div className="container">
                            <div className="img-container">
                                <img src={posts.img_url} alt={posts.name} />
                            </div>
                            <div className="info">
                                <span className="number">{posts.id}</span>
                                <h3 className="name">{posts.name}</h3>
                                <span><strong>Status:</strong>{posts.status}</span>
                                <div classNameName='gender'>
                                    <strong>Gender: </strong> {posts.gender}
                                </div>
                                <div>  <strong> Hair: </strong>{posts.hair}</div>
                                <div className="species"><strong> Species: </strong><span>{posts.species}</span></div>
                            </div>
                        </div>
                    </div>
                    )
                    }
                </div>
            </>

        )
    }
}
export default PostList