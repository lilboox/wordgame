import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange } from "@mui/material/colors";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const quote = [
  [" ", 10],
  ["A", 500],
  ["B", 500],
  ["C", 0]
];

const remaining_letters = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

export default function LetterAvatars() {
  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2}>
        {quote.map((x) => (
          <Avatar sx={{ bgcolor: deepOrange[x[1]] }}>{x[0]}</Avatar>
        ))}
      </Stack>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        {remaining_letters.map((x) => (
          <Button>{x}</Button>
        ))}
      </ButtonGroup>
    </Stack>
  );
}
