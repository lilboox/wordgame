import * as React from "react";
import Stack from "@mui/material/Stack";
import LetterPicker from "./letterpicker";
import QuoteDisplay from "./quotedisplay";

const sample_quote = Array.from("BACK TO THE FUTURE");
const all_letters = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

class GameModel extends React.Component {
  props: {
    quote?: Array<any>;
  };

  state = {
    letters_picked: all_letters.reduce((o, key) => ({ ...o, [key]: false }), {})
  };

  letterClick = (text: string) => {
    console.log(text, this.state.letters_picked[text]);
    let new_state = this.state.letters_picked;
    new_state[text] = true;
    this.setState({ letters_picked: new_state });
  };

  render() {
    return (
      <Stack spacing={2}>
        <QuoteDisplay
          letters_picked={this.state.letters_picked}
          quote={this.props.quote}
        />
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
