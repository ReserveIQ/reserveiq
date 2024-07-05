import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
}

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

export default BlogPostCard;
