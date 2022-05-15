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

const all_letters = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

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
  props: {
    letters?: Object;
  };

  letterClick = (text: string) => {
    console.log(text);
  };

  render() {
    return (
      <ButtonGroup variant="contained">
        {Object.keys(this.props.letters).map((x) => (
          <Button
            disabled={this.props.letters[!x]} // Why do I need Not?
            onClick={(e) => this.letterClick(x)}
            name={x}
          >
            {x}
          </Button>
        ))}
      </ButtonGroup>
    );
  }
}

class GameModel extends React.Component {
  props: {
    quote?: Array<any>;
    letters_state?: Object;
  };

  //constructor(props) {
  //super(props);
  // state = {
  //   letters_state: all_letters.map((x) => ({ x: true }));
  // }
  //this.props.letters = this.props.quote.bind(this);
  //}

  state = {
    letter_done: all_letters.map((x) => ({ x: false }))
  };
  // state = { message: "" };
  // callbackFunction = (childData) => {
  //       this.setState({message: childData})
  // },

  render() {
    return (
      <Stack spacing={2}>
        <QuoteDisplay quote={this.props.quote} />
        <LetterChoices letters={this.state.letter_done} />
      </Stack>
    );
  }
}

export default function LetterAvatars() {
  return <GameModel quote={sample_quote} />;
}
