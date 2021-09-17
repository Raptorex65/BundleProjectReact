import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
}));

export default function Categories({ categories, filterItems }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {categories.map((category, index) => {
        return (
          <ButtonGroup
            color="primary"
            fullWidth
            aria-label="vertical outlined primary button group"
            key={index}
            onClick={() => filterItems(category)}
          >
            <Button>{category}</Button>
          </ButtonGroup>
        );
      })}
    </div>
  );
}
