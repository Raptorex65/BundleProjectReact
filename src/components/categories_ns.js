import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

  const categories = [
    "All",
    "Computers and Related Parts",
    "Electronics",
    "Household appliances",
    "Furniture",
    "Clothing and Shoes",
    "Kitchenware",
    "Bycyles and Parts",
    "Office Products",
    "Sporting Goods",
    "Games and Toys",
    "Art and Collectibles",
    "Books CDs and Videos",
    "Auto Parts",
  ];

export default function BasicSelect({items, setMenuItems}) {
  const [age, setAge] = React.useState("");
  
  const handleChange = (event) => {
    setAge(event.target.value);
    if (age === "All") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.Category === age);
    setMenuItems(newItems);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Age"
          onChange={handleChange}
        >
          {categories.map((category) => (
            <MenuItem key={category} value={category}></MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
