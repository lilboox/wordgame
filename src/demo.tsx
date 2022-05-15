import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange } from "@mui/material/colors";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const sample_quote = [
  [" ", 10],
  ["A", 500],
  ["B", 500],
  ["C", 0]
];

const remaining_letters = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

class QuoteDisplay extends React.Component {
  props: {
    quote?: Array<any>;
  };

  render() {
    return (
      <Stack direction="row" spacing={2}>
        {this.props.quote.map((x) => (
          <Avatar sx={{ bgcolor: deepOrange[x[1]] }}>{x[0]}</Avatar>
        ))}
      </Stack>
    );
  }
}

class LetterChoices extends React.Component {
  letterClick = (text: string) => {
    console.log(text);
  };

  render() {
    return (
      <ButtonGroup variant="contained">
        {remaining_letters.map((x) => (
          <Button onClick={(e) => this.letterClick(x)} name={x}>
            {x}
          </Button>
        ))}
      </ButtonGroup>
    );
  }
}

export default function LetterAvatars() {
  return (
    <Stack spacing={2}>
      <QuoteDisplay quote={sample_quote} />
      <LetterChoices />
    </Stack>
  );
}
