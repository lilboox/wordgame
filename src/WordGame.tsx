import * as React from "react";
import Stack from "@mui/material/Stack";
import LetterPicker from "./LetterPicker.tsx";
import QuoteDisplay from "./QuoteDisplay.tsx"; // Despite the lint error, vercel doesn't work without the .tsx
import Button from "@mui/material/Button";
import all_quotes from "./all_quotes.json";

const all_letters = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

class GameModel extends React.Component {
  state = {
    /* The quote in which position in the list of quotes is active in the game? */
    quote_index: 0,
    /** letters_picked is an object mapping each letter to a bool flag.
     * The flag is false when initialized, and is set to true when the letter is picked.
     */
    letters_picked: all_letters.reduce((o, key) => ({ ...o, [key]: false }), {})
  };

  /** Callback when a letter is picked.
   * This is passed to the child component LetterPicker.
   */
  letterClick = (text: string) => {
    let new_state = this.state.letters_picked;
    new_state[text] = true;
    this.setState({ letters_picked: new_state });
  };

  /** Callback to set the state of all letters.
   * true to reveal the quote, and false to hide everything.
   * Turn the entire letters_picked state to true.
   */
  set_all = (x) => {
    let new_state = all_letters.reduce((o, key) => ({ ...o, [key]: x }), {});
    this.setState({ letters_picked: new_state });
  };

  /** Callback to get another quote.
   * Pick one randomly.
   */
  new_quote = () => {
    let new_idx = Math.floor(Math.random() * all_quotes.length);
    this.setState({ quote_index: new_idx });
    this.set_all(false); // reset all the letters picked to false.
  };

  /** A vertical stack of two components.
   * - one to display the quote, revealed incrementally.
   * - another to guess or pick the letters.
   */
  render() {
    return (
      <Stack spacing={10}>
        <QuoteDisplay
          letters_picked={this.state.letters_picked}
          quote={all_quotes[this.state.quote_index].toUpperCase()}
        />
        <LetterPicker
          letters_picked={this.state.letters_picked}
          letterClick={this.letterClick}
        />
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button
            variant="outlined"
            size="large"
            onClick={(e) => this.set_all(true)}
          >
            REVEAL
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={(e) => this.new_quote()}
          >
            NEW
          </Button>
        </Stack>
      </Stack>
    );
  }
}

export default function WordGame() {
  return <GameModel />;
}
