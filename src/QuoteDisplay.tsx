import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange } from "@mui/material/colors";

const BG = "#ffffff";
const FG = deepOrange[500];

/** A stack of Avatars dislaying the leters of the quote.
 *  The color of the letter matches the background in the beginning,
 *  hence invisible. The color becomes white when picked.
 */
class QuoteDisplay extends React.Component {
  props: {
    letters_picked?: Object;
    quote?: String;
  };

  /**
   * Utility to wrap the quote into multiple lines
   * Credit : https://stackoverflow.com/questions/14484787/wrap-text-in-javascript
   */
  wrap = (s: String) => s.replace(/(?![^\n]{1,15}$)([^\n]{1,15})\s/g, "$1\n");

  render() {
    /* wrap the quote, and split into array*/
    let split_array = this.wrap(this.props.quote).split("\n");

    return (
      <Stack
        direction="column"
        spacing={5}
        justifyContent="center"
        sx={{ height: 400 }}
      >
        {split_array.map((myrow) => (
          <Stack direction="row" spacing={2} justifyContent="center">
            {Array.from(myrow).map((x) => (
              <Avatar
                sx={{
                  bgcolor: x === " " ? BG : FG, // bg is White for blank
                  color: this.props.letters_picked[x] ? BG : FG, // fg is white when picked
                  width: 72,
                  height: 72
                }}
                style={{ fontSize: "3em" }}
                variant="square"
              >
                {x}
              </Avatar>
            ))}
          </Stack>
        ))}
      </Stack>
    );
  }
}

export default QuoteDisplay;
