import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

class LetterPicker extends React.Component {
  props: {
    letters_picked?: Object;
    letterClick?: Function;
  };

  /** A group of buttons, one for each letter.
   *  The buttons are disabled when clicked/picked.
   */
  render() {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
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
      </Box>
    );
  }
}

export default LetterPicker;
