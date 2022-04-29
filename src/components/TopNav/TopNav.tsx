// import Avatar from "@mui/material/Avatar";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import EventNoteIcon from "@mui/icons-material/EventNote";
import SearchIcon from "@mui/icons-material/Search";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { styled } from "@mui/material/styles";
import FormHelperTexts from "@mui/material/FormHelperText";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
// import { makeStyles } from "@material-ui/core/styles";
import "./TopNav.css";
import {
  IconButton,
  Avatar,
  Typography,
  InputBase,
  Paper,
  Divider,
  Tooltip,
  MenuItem,
  Menu,
  ListItemIcon,
  createTheme,
  ThemeProvider,
  makeStyles,
  Theme,
  Modal,
  Button,
  Box,
  TextField,
  FormHelperText,
  TextareaAutosize,
} from "@mui/material";
import { useState } from "react";
import { ClassNames } from "@emotion/react";

const theme = createTheme({
  components: {
    MuiMenu: {
      styleOverrides: {
        list: {
          backgroundColor: "#18181b",
        },
      },
    },
  },
});

export default function TopNav() {
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "#aaaaaa",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red",
      },
      "&:hover fieldset": {
        borderColor: "#aaaaaa",
      },
      "&.Mui-focused fieldset": {
        borderColor: "black",
      },
    },
  });

  return (
    <div className="top-nav-wrapper">
      <div className="top-nav-left-layout">
        <div className="top-nav-logo">
          <EventNoteIcon
            sx={{ width: "35px", height: "35px", color: "#A970FF" }}
          />
        </div>
        <Typography variant="h5">Name</Typography>
        <div className="top-nav-followers-link"></div>
      </div>
      <div className="top-nav-center-layout">
        <div className="top-nav-search-bar">
          <Paper
            component="form"
            sx={{
              p: "px 02px",
              display: "flex",
              alignItems: "center",
              height: 36,
              width: 380,
              backgroundColor: "#464648",
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1, color: "#EFEFF1" }}
              placeholder="Search"
            />
            <Divider sx={{ height: "36" }} orientation="vertical" />
            <IconButton
              sx={{ p: "10px", color: "#EFEFF1" }}
              aria-label="directions"
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>
      </div>
      <div className="top-nav-right-layout">
        <div className="top-nav-notifications">
          <Tooltip title="Create Event">
            <IconButton
              style={{ color: "#ffffff" }}
              aria-label="Create-Event"
              onClick={handleModalOpen}
            >
              <AddBoxOutlinedIcon sx={{ width: "22px", height: "22px" }} />
            </IconButton>
          </Tooltip>
        </div>
        <div className="top-nav-user-avatar">
          <IconButton style={{ color: "#00C8AF" }} onClick={handleMenu}>
            <Avatar
              sx={{
                width: "30px",
                height: "30px",
                backgroundColor: "#00C8AF",
                color: "black",
              }}
            />
          </IconButton>
          <ThemeProvider theme={theme}>
            <Menu
              sx={{
                mt: "45px",
              }}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <PermIdentityOutlinedIcon
                    sx={{ width: "20px", height: "20px", color: "#EFEFF1" }}
                  />
                </ListItemIcon>
                <Typography variant="subtitle2" sx={{ color: "#EFEFF1" }}>
                  Profile
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <StarBorderOutlinedIcon
                    sx={{ width: "20px", height: "20px", color: "#EFEFF1" }}
                  />
                </ListItemIcon>
                <Typography variant="subtitle2" sx={{ color: "#EFEFF1" }}>
                  Subscriptions
                </Typography>
              </MenuItem>
              <Divider variant="middle" color="white" />
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <LogoutOutlinedIcon
                    sx={{ width: "20px", height: "20px", color: "#EFEFF1" }}
                  />
                </ListItemIcon>
                <Typography variant="subtitle2" sx={{ color: "#EFEFF1" }}>
                  Logout
                </Typography>
              </MenuItem>
            </Menu>
            <div>
              <Modal open={open} onClose={handleModalClose}>
                <div className="create-event-modal-wrapper">
                  <div className="create-event-header-wrapper">
                    <div className="create-event-header">
                      <Typography color="#aaaaaa" variant="h5">
                        Create an Event
                      </Typography>
                    </div>
                    <div className="create-event-close-button">
                      <IconButton>
                        <CloseRoundedIcon
                          sx={{
                            width: "20px",
                            height: "20px",
                            color: "#aaaaaa",
                            minHeight: 0,
                            minWidth: 0,
                            padding: 0,
                          }}
                        ></CloseRoundedIcon>
                      </IconButton>
                    </div>
                  </div>
                  <div className="create-event-title">
                    <TextField
                      autoComplete="off"
                      sx={{
                        "& label.Mui-focused": {
                          color: "red",
                        },
                        "& .MuiInput-underline:before": {
                          borderBottomColor: "#aaaaaa",
                        },
                        "&:hover fieldset": {
                          borderColor: "red",
                        },
                        "& .MuiOutlinedInput-root": {
                          "&.Mui-focused fieldset": {
                            borderColor: "white",
                          },
                        },

                        input: { color: "#c2c2c2", fontSize: "small" },
                        label: { color: "#aaaaaa" },
                      }}
                      hiddenLabel
                      variant="standard"
                    />
                    <FormHelperTexts>
                      <Typography color="#aaaaaa" variant="caption">
                        Event Title
                      </Typography>
                    </FormHelperTexts>
                    <div className="create-event-description">
                      <TextareaAutosize
                        aria-label="minimum height"
                        minRows={3}
                        // placeholder="Description"
                        style={{
                          width: 450,
                          background: "transparent",
                          color: "#c2c2c2",
                          marginTop: "20px",
                        }}
                      />
                      <FormHelperTexts>
                        <Typography color="#aaaaaa" variant="caption">
                          Description
                        </Typography>
                      </FormHelperTexts>
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
}
