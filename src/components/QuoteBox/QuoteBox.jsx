import { Twitter } from "@mui/icons-material";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Link,
  Button,
} from "@mui/material";

const QuoteBox = ({ quotes, handleClick, loading }) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      {loading ? (
        <Card>
          <CardContent>
            <Typography variant="h4">Please Wait...</Typography>
          </CardContent>
        </Card>
      ) : (
        <Card id="quote-box" sx={{ maxWidth: "400px" }}>
          <CardContent>
            <Typography component="blockquote">
              <Typography variant="h4" component="h2" id="text" gutterBottom>
                <q>{quotes.content}</q>
              </Typography>
              <Typography id="author" variant="subtitle1" textAlign="end">
                &mdash; {quotes.author}
              </Typography>
            </Typography>
          </CardContent>
          <CardActions
            disableSpacing
            sx={{ gap: 5, display: "flex", justifyContent: "center" }}
          >
            <Link
              href="https://twitter.com/intent/tweet"
              rel="noreferrer"
              target="_blank"
              id="tweet-quote"
            >
              <Twitter />
            </Link>
            <Button
              variant="contained"
              color="primary"
              id="new-quote"
              onClick={handleClick}
            >
              Change Quotes
            </Button>
          </CardActions>
        </Card>
      )}
    </Grid>
  );
};

export default QuoteBox;
