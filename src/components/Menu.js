import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme, fade } from '@material-ui/core/styles';
import ArrowBack from '@material-ui/icons/ArrowBack';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const drawerWidth = 240;
const menuLateral = [
  {
    nome: 'Início',
    icone: HomeIcon,
    rota: '/vagas'
  },
  {
    nome: 'Perfil',
    icone: PersonIcon,
    rota: '/perfil'
  },
  {
    nome: 'Currículo',
    icone: ListAltIcon,
    rota: '/curriculo'
  },
  {
    nome: 'Sair',
    icone: ExitToAppIcon,
    rota: '/sair'
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    backgroundColor: "#F49400",
    [theme.breakpoints.up('sm')]: {
      // width: `calc(100% - ${drawerWidth}px)`,
      // marginLeft: drawerWidth,
      "z-index": '1201'
    },
  },
  menuButton: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: {
    backgroundColor: "#F49400",
    ...theme.mixins.toolbar,
  },
  barApp: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: '0',
      paddingRight: '0',
    }
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  iconBack: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    },
    color:'#fff',
  },
  espaco: {
    ...theme.mixins.toolbar,
  },
    titulo: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
      },
      [theme.breakpoints.up('xs')]: {
        marginLeft: -12,
      }
    },
    tituloNoSearch: {
      [theme.breakpoints.up('xs')]: {
        width: '100%',
        marginLeft: -36,
      },[theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        marginLeft: 0,
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      marginRight: 12,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('xs')]: {
      display: 'none',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 300,
      },
    },
  },
  searchMobile: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      display:'none',
    },

  }
}));

export default function Menu(props){
    const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const searchMob = () => {
  }

  const drawer = (
    <div>
      <div className={classes.toolbar} >
      {<IconButton className={classes.iconBack} onClick={handleDrawerToggle}>
        <ArrowBack />
      </IconButton>}
      </div>
      <Divider />
      <List>
        {menuLateral.map((menu, index) => (
          <ListItem button key={menu.nome}>
            <ListItemIcon>{<menu.icone />}</ListItemIcon>
            <ListItemText primary={menu.nome} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.barApp}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={ props.search ? ( classes.titulo ) : ( classes.tituloNoSearch ) } variant="h6" noWrap align='center'>
          {props.titulo}
          </Typography>
          <div>
            { (props.search) ? (
              <div>
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Buscar…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </div>
                <div className={classes.searchMobile} onClick={searchMob}>
                  <SearchIcon />
                </div>
              </div>
            ) : ( "")}
          </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}