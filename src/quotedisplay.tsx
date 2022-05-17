import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange } from "@mui/material/colors";

/* Using a faint 300 during demo, use 500 when real */
const colormap = { false: deepOrange[300], true: "#ffffff" };

/** A stack of Avatars dislaying the leters of the quote.
 *  The color of the letter matches the background in the beginning,
 *  hence invisible. The color becomes white when picked.
 */
class QuoteDisplay extends React.Component {
  props: {
    letters_picked?: Object;
    quote?: Array<any>;
  };

  /**
   * TODO: split the quote into multiple rows.
   */
  render() {
    return (
      <Stack direction="row" spacing={2}>
        {this.props.quote.map((x) => (
          <Avatar
            sx={{
              bgcolor: deepOrange[500],
              color: colormap[this.props.letters_picked[x]],
              width: 96,
              height: 96
            }}
            variant="square"
          >
            {x}
          </Avatar>
        ))}
      </Stack>
    );
  }
}

export default QuoteDisplay;
