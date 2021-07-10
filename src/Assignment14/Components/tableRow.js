import React from "react";
import { TableRow, TableCell, TextField } from "@material-ui/core";

export default function DataRow(props) {
  return (
    <>
      {props.user.map((current, index) => {
        const {
          number,
          name,
          city,
          state,
          country,
          postcode,
          latitude,
          longitude,
        } = current;

        return (
          <TableRow key={index}>
            <TableCell>
              <TextField
                value={number}
                variant="outlined"
                error={props.errorState}
                onChange={(e) =>
                  props.handleChange(index, "number", e.target.value)
                }
              />
            </TableCell>
            <TableCell>
              <TextField
                value={name}
                variant="outlined"
                onChange={(e) =>
                  props.handleChange(index, "name", e.target.value)
                }
              />
            </TableCell>
            <TableCell>
              <TextField
                value={city}
                variant="outlined"
                onChange={(e) =>
                  props.handleChange(index, "city", e.target.value)
                }
              />
            </TableCell>
            <TableCell>
              <TextField
                value={state}
                variant="outlined"
                onChange={(e) =>
                  props.handleChange(index, "state", e.target.value)
                }
              />
            </TableCell>
            <TableCell>
              <TextField
                value={country}
                variant="outlined"
                onChange={(e) =>
                  props.handleChange(index, "country", e.target.value)
                }
              />
            </TableCell>
            <TableCell>
              <TextField
                value={postcode}
                variant="outlined"
                onChange={(e) =>
                  props.handleChange(index, "outlined", e.target.value)
                }
              />
            </TableCell>
            <TableCell>
              <TextField
                value={latitude}
                variant="outlined"
                onChange={(e) =>
                  props.handleChange(index, "latitude", e.target.value)
                }
              />
            </TableCell>
            <TableCell>
              <TextField
                value={longitude}
                variant="outlined"
                onChange={(e) =>
                  props.handleChange(index, "longitude", e.target.value)
                }
              />
            </TableCell>
          </TableRow>
        );
      })}
    </>
  );
}
