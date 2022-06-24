import './style.css';

import { loadPosts } from '../../utils/load-posts'
import React from 'react';
import { PostCard } from '../../components/PostCard';
import { Button } from '../../components/Button/index'
import { TextInput } from '../../components/TextInput/index'

class Home extends React.Component {
  
  state = {
    posts: [],
    allPosts:[],
    page:0,
    postsPerPage:3,
    searchValue: ''
  };
  
  timeoutclear = null;

  handleSearch = (e) => {
    const { value } = e.target;
    this.setState({ 
      searchValue:value
    })
  }

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
    const { posts, searchValue, allPosts } = this.state;

    const filteredPosts = !!searchValue ? 
      allPosts.filter(post => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase())
      })
     : posts

    return (
      <section className="container">
        <div className="search-container">
          <TextInput 
          handleSearch={this.handleSearch} 
          searchValue={searchValue} />
        </div>

        <br /><br /><br />
        <div className="posts">
            {filteredPosts.map(post=>
              <PostCard post={post} key={post.id}/>
              )            
            }
        </div>
        <div className="button-container">
          <Button 
            text='Load More Posts'
            onClick={this.loadMorePosts}
            disabled={false}
            >
          </Button>
        </div>
      </section>
    );
  }
}
export default Home;
