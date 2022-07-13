import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function NewsCard({ content }) {
  return (
    <Grid item xs={10}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="auto"
            image={content.urlToImage}
            alt={`${content.title} image`}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {content.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {content.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <a href={content.url} target="_blank" rel="noreferrer">
              Source
            </a>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
