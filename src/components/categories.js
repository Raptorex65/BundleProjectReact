import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

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


export default function MultipleSelect({ items, setMenuItems }) {
  const [personName, setPersonName] = React.useState([]);
  //const [checkedItems, setCheckedItems] = React.useState(items)
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a the stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const checkhandler = (event) => {
    if (event.target.name === "All"){
    setMenuItems(items)
    return;
  }
    if (event.target.name === "Furniture"){
      const newItems = items.filter((item) => item.Category === event.target.name);
    setMenuItems(newItems);
    }
    
  }




  return (
    <div>
      <FormControl sx={{ m: 1, width: 250 }}>
        <InputLabel id="demo-multiple-checkbox-label">Categories</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              <Checkbox
                name={category}
                onChange={checkhandler}
                checked={personName.indexOf(category) > -1}
              />
              <ListItemText primary={category} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
