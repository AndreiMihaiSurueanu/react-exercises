import { Fab, FormControl, Grid, InputAdornment, TextField, Tooltip } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import React, { Component } from 'react'

export class Dynamic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            directors: [{ name: "", email: "", mobile: "" }],
            directors_array: ["director_0"]
        };
    }
    
    appendInput_director() {
        var newInput = `director-${this.state.directors_array.length}`;
        this.setState(prevState => ({
            directors: [...prevState.directors, { name: "", email: "", mobile: "" }],
            directors_array: prevState.directors_array.concat([newInput])
        }));
    }
    
    onChangeDirectorDetails = (index, name, e) => {
        let directors = [...this.state.directors];
        directors[index][name] = e.target.value;
        this.setState({ directors });
    }
    
    render() {
        return (
            <div>
                {this.state.directors_array.map((input, index) => (
                    <Grid xs={12} container spacing={1} item>
                        <Grid xs={3} item>
                            <FormControl fullWidth margin="dense">
                                <TextField
                                    variant="outlined"
                                        required
                                    id={input + "-name"}
                                    label="Full Name"
                                    name={input + "-name"}
                                    size="small"
                                    className="name"
                                    onChange={e => this.onChangeDirectorDetails(index, "name", e)}
                                />
                            </FormControl>
                        </Grid>
                        <Grid xs={3} item>
                            <FormControl fullWidth margin="dense">
                                <TextField
                                    variant="outlined"
                                    required
                                    type="email"
                                    id={input + "-email"}
                                    label="Email Address"
                                    name={input + "-email"}
                                    size="small"
                                    className="email"
                                    onChange={e => this.onChangeDirectorDetails(index, "email", e)}
                                />
                            </FormControl>
                        </Grid>
                        <Grid xs={3} item>
                            <FormControl fullWidth margin="dense">
                                <TextField
                                    variant="outlined"
                                    required
                                    type="number"
                                    id={input + "-mobile"}
                                    label="Mobile Number"
                                    name={input + "-mobile"}
                                    size="small"
                                    className="mobile"
                                    onChange={e => this.onChangeDirectorDetails(index, "mobile", e)}
                                    InputProps={{
                                        endAdornment: index + 1 === this.state.directors_array.length && (
                                            <InputAdornment position="start">
                                                <Tooltip title="Add Statement">
                                                    <Fab
                                                        color="primary"
                                                        size="small"
                                                        onClick={() => this.appendInput_director()}
                                                    >
                                                        <Add />
                                                    </Fab>
                                                </Tooltip>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                ))}
            </div>
        )
    }
}

export default Dynamic
