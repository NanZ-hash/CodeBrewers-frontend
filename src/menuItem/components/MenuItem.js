import React, { Component } from "react";
import "./MenuItem.css";

// Import Material UI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";

class MenuItem extends React.Component {
  //   deleteArticle = event => {
  //     event.preventDefault();
  //     this.props.deleteArticle(this.props.id);
  //   };

  //   addArticles = event => {
  //     event.preventDefault();
  //     this.props.addArticle();
  //   };

  render() {
    // const classes = useStyles();
    // const bull = <span className={classes.bullet}>•</span>;
    return (
      <Grid item xs={4} sm={4}>
        <div className="menuItem">
          {/* title & content & Author */}
          <h4>{this.props.name}</h4>
          <sub>{this.props.description}</sub>
          <p>{this.props.price}</p>

          {/* <a href="#" onClick={this.deleteArticle}>
          DELETE
        </a> */}

          {/* <button onClick={this.addArticles}> Add</button> */}
        </div>
      </Grid>
    );
  }
}

export default MenuItem;
