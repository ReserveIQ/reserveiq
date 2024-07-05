import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
import SearchableBlogList from '../components/SearchableBlogList';

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

const Blog: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h2" component="h1" align="center" gutterBottom>
        ReserveIQ Blog
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <SearchableBlogList posts={mockPosts} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Categories
              </Typography>
              <Typography variant="body2">Customer Service</Typography>
              <Typography variant="body2">Technology</Typography>
              <Typography variant="body2">Management</Typography>
              {/* Add more categories as needed */}
            </CardContent>
          </Card>
          <Card sx={{ mt: 2 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Popular Posts
              </Typography>
              <Typography variant="body2">
                5 Ways to Improve Customer Experience
              </Typography>
              <Typography variant="body2">
                The Future of Reservation Systems
              </Typography>
              <Typography variant="body2">
                Effective Staff Management Tips
              </Typography>
              {/* Add more popular posts as needed */}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Blog;
