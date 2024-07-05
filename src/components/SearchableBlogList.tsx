import React, { useState, ChangeEvent } from 'react';
import { TextField, Button, Grid, Box, Pagination } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import BlogPostCard from './BlogPostCard';
import usePagination from '../hooks/usePagination';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
}

interface SearchableBlogListProps {
  posts: BlogPost[];
}

const SearchableBlogList: React.FC<SearchableBlogListProps> = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const postsPerPage = 6;
  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const {
    currentData: currentPosts,
    handlePageChange,
    currentPage,
  } = usePagination(filteredPosts, postsPerPage);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <Box sx={{ display: 'flex', mb: 4 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <Button variant="contained" sx={{ ml: 1 }}>
          <SearchIcon />
        </Button>
      </Box>
      <Grid container spacing={3}>
        {currentPosts.map((post) => (
          <Grid item xs={12} sm={6} key={post.id}>
            <BlogPostCard {...post} />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
        <Pagination
          count={Math.ceil(filteredPosts.length / postsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>
    </>
  );
};

export default SearchableBlogList;
