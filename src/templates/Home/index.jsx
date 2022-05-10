import './style.css';

import { loadPosts } from '../../utils/load-posts'
import React from 'react';
import { PostCard } from '../../components/PostCard';
import { Button } from '../../components/Button/index'

class Home extends React.Component {
  
  state = {
    posts: [],
    allPosts:[],
    page:0,
    postsPerPage:2
  };
  
  timeoutclear = null;

  componentDidMount (){
    this.loadPosts();
  }

  loadPosts = async () => {
    const postsAndPhotos = await loadPosts();
    const {page, postsPerPage} = this.state;
    this.setState({ 
      posts:postsAndPhotos.slice(page,postsPerPage),
      allPosts: postsAndPhotos,
    });
  }

  loadMorePosts = () => {
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage+postsPerPage);
    // console.log('Show more chamado');
    posts.push(...nextPosts)
    this.setState({ posts, page:nextPage })
  }

  render(){
    const { posts } = this.state;

    return (
      <section className="container">
        <div className="posts">
            {posts.map(post=>
              <PostCard post={post} key={post.id}/>
              )            
            }
        </div>
        <Button 
          text='Load More Posts'
          onClick={this.loadMorePosts}
          >
        </Button>
      </section>
    );
  }
}
export default Home;
