// in src/MyUserMenu.js
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import {Link} from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import withAuthorization from "../../Session/withAuthorization";
import {withRouter} from "react-router";
import {useSelector} from 'react-redux';
import { green } from "@material-ui/core/colors";
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useHistory } from 'react-router-dom';

const StyledMenu = withStyles({
    paper: {
        border: '0',
    },
})((props) => (
    <Menu
        elevation={10}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: green[500],
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

const UserActions = ({firebase})=> {
        const authUser = useSelector(state => state.sessionState.authUser);
        const photoUrl = useSelector(state => state.sessionState.photoURL);
        const [anchorEl, setAnchorEl] = React.useState(null);
        const history = useHistory();
        const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
        };

        const handleClose = () => {
            setAnchorEl(null);
        };
        const goToDashboard = () => {
            history.push("/dashboard");
            setAnchorEl(null)
        }
        const goToProfile = () => {
            history.push("/profile");
            setAnchorEl(null)
        }
        const goToMessages = () => {
            history.push("/messages");
            setAnchorEl(null)
        }

        return (
            <div>
                <div>
                    <div className={'d-flex align-items-center row'}>
                        <div>
                            {authUser.username}
                        </div>
                        <div className={'mx-3 gradient-avatar'}>
                            <Avatar aria-controls="customized-menu"
                                    aria-haspopup="true"
                                    variant="circular"
                                    // Failed prop type: Invalid prop `variant` of value `contained` supplied to `ForwardRef(Avatar)`, expected one of ["circle","circular","rounded","square"]
                                    color="transparent"
                                    onClick={handleClick}
                                    src={photoUrl}
                            />

                        </div>
                    </div>

                    <StyledMenu
                        id="customized-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        disableScrollLock={true}
                    >
                        <StyledMenuItem  onClick={goToDashboard}>
                            <Link to={'/dashboard'}>
                                <ListItemIcon>
                                    <DashboardIcon fontSize="small" />
                                </ListItemIcon>
                            </Link>
                            <ListItemText primary="Dashboard" />
                        </StyledMenuItem>
                        <StyledMenuItem onClick={goToProfile}>
                            <ListItemIcon>
                                <PersonIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="Profile" />
                        </StyledMenuItem>
                        <StyledMenuItem  onClick={goToMessages}>
                            <ListItemIcon>
                                <EmailIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="Messages" />
                        </StyledMenuItem>
                        <StyledMenuItem onClick={firebase.doSignOut}>
                            <ListItemIcon>
                                <ExitToAppIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="Log out" />
                        </StyledMenuItem>
                    </StyledMenu>
                </div>
            </div>
        );
}

const condition = authUser => !!authUser;
export default withAuthorization(condition)(withRouter(UserActions));
