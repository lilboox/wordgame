import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange } from "@mui/material/colors";

const colormap = { false: deepOrange[500], true: "#ffffff" };

class QuoteDisplay extends React.Component {
  props: {
    letters_picked?: Object;
    quote?: Array<any>;
  };

  render() {
    return (
      <Stack direction="row" spacing={2}>
        {this.props.quote.map((x) => (
          <Avatar
            sx={{
              bgcolor: deepOrange[500],
              color: colormap[this.props.letters_picked[x]]
            }}
          >
            {x}
          </Avatar>
        ))}
      </Stack>
    );
  }
}

export default QuoteDisplay;
