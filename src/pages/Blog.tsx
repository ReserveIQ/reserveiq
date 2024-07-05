import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Box,
  Button,
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
    title: '5 Ways to Improve Customer Experience with AI',
    excerpt:
      'Learn how AI can enhance your customer service in the reservation industry...',
    image: '/path-to-image1.jpg',
    category: 'Customer Service',
  },
  {
    id: 2,
    title: 'The Future of AI-Powered Reservation Systems',
    excerpt: 'Explore the latest trends in AI reservation technology...',
    image: '/path-to-image2.jpg',
    category: 'Technology',
  },
  {
    id: 3,
    title: 'Effective Staff Management Tips for Service Industries',
    excerpt:
      "Discover AI-driven strategies to optimize your team's performance...",
    image: '/path-to-image3.jpg',
    category: 'Management',
  },
];

const Blog: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 4 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search articles..."
          InputProps={{
            startAdornment: <SearchIcon />,
          }}
        />
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          {mockPosts.map((post) => (
            <Card key={post.id} sx={{ mb: 4 }}>
              <Box
                component="img"
                src={post.image}
                alt={post.title}
                sx={{ width: '100%', height: 200, objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {post.excerpt}
                </Typography>
                <Button variant="contained" color="primary">
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ mb: 4 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Recent Posts
              </Typography>
              {mockPosts.map((post) => (
                <Typography key={post.id} variant="body2" gutterBottom>
                  {post.title}
                </Typography>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Categories
              </Typography>
              <Typography variant="body2">Nature</Typography>
              <Typography variant="body2">Cities</Typography>
              <Typography variant="body2">Travel Tips</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Blog;
