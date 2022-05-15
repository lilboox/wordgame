import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange } from "@mui/material/colors";

const quote = [
  [" ", 10],
  ["A", 500],
  ["B", 500],
  ["C", 0]
];

// Array.from("01") // use to split string into list

export default function LetterAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      {quote.map((x) => (
        <Avatar sx={{ bgcolor: deepOrange[x[1]] }}>{x[0]}</Avatar>
      ))}
    </Stack>
  );
}
