import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

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

export default LetterPicker;
// export default function LetterPicker() {
//   return <GameModel quote={sample_quote} />;
// }
