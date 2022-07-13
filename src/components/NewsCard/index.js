import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Link from "@mui/material/Link";

export default function NewsCard({ content }) {
  return (
    <Grid item xs={11}>
      <Card
        sx={{
          maxWidth: 900,
          margin: "auto",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="auto"
            sx={{
              maxHeight: 400,
            }}
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
            <Link href={content.url} target="_blank" rel="noreferrer">
              Source
            </Link>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
