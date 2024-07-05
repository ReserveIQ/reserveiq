import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  TextField,
  Button,
  Pagination,
  Box,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
}

const mockPosts: BlogPost[] = [
  {
    id: 1,
    title: '5 Ways to Improve Customer Experience',
    excerpt: 'Learn how to enhance your customer service...',
    image: '/path-to-image1.jpg',
    category: 'Customer Service',
  },
  {
    id: 2,
    title: 'The Future of Reservation Systems',
    excerpt: 'Explore the latest trends in reservation technology...',
    image: '/path-to-image2.jpg',
    category: 'Technology',
  },
  {
    id: 3,
    title: 'Effective Staff Management Tips',
    excerpt: "Discover strategies to optimize your team's performance...",
    image: '/path-to-image3.jpg',
    category: 'Management',
  },
  // Add more mock posts as needed
];

const BlogPostCard: React.FC<BlogPost> = ({
  title,
  excerpt,
  image,
  category,
}) => (
  <Card>
    <CardActionArea>
      <CardMedia component="img" height="140" image={image} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {excerpt}
        </Typography>
        <Typography
          variant="caption"
          color="primary"
          sx={{ mt: 1, display: 'block' }}
        >
          {category}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const filteredPosts = mockPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h2" component="h1" align="center" gutterBottom>
        ReserveIQ Blog
      </Typography>

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

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
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
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Categories
              </Typography>
              {/* Add category list here */}
            </CardContent>
          </Card>
          <Card sx={{ mt: 2 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Popular Posts
              </Typography>
              {/* Add popular posts list here */}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Blog;
