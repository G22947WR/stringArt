import React, { useState } from "react";
import { SketchPicker } from "react-color";
import { Box, Button, Popover, Typography } from "@mui/material";

export default function ColorPicker() {
  const [color, setColor] = useState("#2196f3");
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);

  const open = Boolean(anchorEl);

  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <Typography variant="h6">MUI × React Color Picker</Typography>

      <Button
        variant="contained"
        onClick={handleClick}
        sx={{ mt: 2, backgroundColor: color }}
      >
        Pick Color
      </Button>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <SketchPicker
          color={color}
          onChangeComplete={(c) => setColor(c.hex)}
        />
      </Popover>

      <Box
        sx={{
          mt: 3,
          width: 100,
          height: 100,
          backgroundColor: color,
          borderRadius: 2,
          margin: "auto",
          border: "1px solid #ccc",
        }}
      />
      <Typography variant="body1" sx={{ mt: 1 }}>
        Selected: {color}
      </Typography>
    </Box>
  );
}