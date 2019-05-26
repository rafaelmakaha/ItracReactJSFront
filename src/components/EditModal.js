import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';


function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    height: '75%',
    overflow: 'auto'
  };
}

const styles = theme => ({
  paper: {
    position: 'relative',
    width: theme.spacing.unit * 70,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[6],
    padding: theme.spacing.unit * 4,
    height: 100,
  },
  hs: {
    width: '90%',
    'margin-left': 'auto',
    'margin-right': 'auto',
  },
  ty: {
    'margin-left': 'auto',
    'margin-right': 'auto',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  form: {
    margin: theme.spacing.unit,
  },
  menu: {
    width: 150,
  },
  textField: {
    width: '50%',
  }
});

class EditModal extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.ty}>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.props.open}
          onClose={this.props.onClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <div className={classes.hs}>
              {this.props.children}
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

EditModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
export default EditModal = withStyles(styles)(EditModal);
