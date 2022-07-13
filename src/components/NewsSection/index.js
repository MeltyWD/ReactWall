import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import NewsCard from "../NewsCard";

export default function NewsSection({ newsContent }) {
  return (
    <>
      <Typography variant="h1" mb={5}>
        Tech ニュース
      </Typography>
      <Grid container justifyContent="center" spacing={3}>
        {newsContent.slice(0, 10).map((item, index) => {
          return <NewsCard content={item} key={index} />;
        })}
      </Grid>
    </>
  );
}
