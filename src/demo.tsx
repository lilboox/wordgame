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

class LetterPicker extends React.Component {
  props: {
    letters_picked?: Object;
    letterClick?: Function;
  };

  render() {
    return (
      <ButtonGroup variant="contained">
        {Object.keys(this.props.letters_picked).map((x) => (
          <Button
            disabled={this.props.letters_picked[x]}
            onClick={(e) => this.props.letterClick(x)}
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
  };

  //constructor(props) {
  //super(props);
  // state = {
  //   letters_picked: all_letters.map((x) => ({ x: true }));
  // }
  //this.props.letters = this.props.quote.bind(this);
  //}

  // constructor(props) {
  //   super(props);
  //   state = all_letters.reduce((o, key) => ({ ...o, [key]: false }), {});
  // }

  state = {
    letters_picked: all_letters.reduce((o, key) => ({ ...o, [key]: false }), {})
  };
  //state = all_letters.reduce((o, key) => ({ ...o, [key]: false }), {});

  // state = { message: "" };
  // callbackFunction = (childData) => {
  //       this.setState({message: childData})
  // },

  letterClick = (text: string) => {
    console.log(text, this.state.letters_picked[text]);
    let new_state = this.state.letters_picked;
    new_state[text] = true;
    this.setState({ letters_picked: new_state });
  };

  render() {
    //const { name } = this.state; // instead of passing directly?????
    return (
      <Stack spacing={2}>
        <QuoteDisplay quote={this.props.quote} />
        <LetterPicker
          letters_picked={this.state.letters_picked}
          letterClick={this.letterClick}
        />
      </Stack>
    );
  }
}

export default function LetterAvatars() {
  return <GameModel quote={sample_quote} />;
}
