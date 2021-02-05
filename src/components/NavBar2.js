import React, { useState, useContext, useEffect } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

// import { AppContext } from "./AppContext";
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import {
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  List,
  Collapse,
  Typography,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
  Divider,
} from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { 

  IoMdVideocam, 
  IoIosColorPalette, 
  IoMdPaper, 
  IoIosLocate,
  IoMdFlask } from "react-icons/io";

import { BiBadge } from "react-icons/bi";


import { withStyles } from "@material-ui/core/styles";

import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    backgroundColor: "#182028",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#182028",
    fontFamily: "Gurajada",
   
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  linkText: {
    color: "white",
    textDecoration: "none",
    "&:hover": {
      color: "#8cb1ab",

      textDecoration: "none",
    },
  },

  linkText2: {
    marginTop: "auto",
    bottom: 0,
    color: "white",
    textDecoration: "none",
    "&:hover": {
      color: "#8cb1ab",

      textDecoration: "none",
    },
  },
  navIcon: {
    color: "white",
    // size: "30px",
  },
  itemListText: {
    color: "white",
  },
  typo: {
    fontFamily: "Gurajada",
    color: "white",
  },

  lang: {
    fontFamily: "Gurajada",
    marginLeft: "auto",
    float: "right",
  },

  navTex: {
    display: "flex",
  },
  bottomPush: {
    position: "fixed",
    bottom: 0,
    textAlign: "center",
    paddingBottom: 10,
    paddingLeft: 30
}
}));

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
  },
  // switchBase: {
  //   padding: 2,
  //   color: "#182028",
  //   backgroundColor: "white",
  //   "&$checked": {
  //     transform: "translateX(12px)",
  //     color: "#182028",
  //     "& + $track": {
  //       opacity: 1,
  //       backgroundColor: "white",
  //       borderColor: theme.palette.primary.main,
  //     },
  //   },
  // },
  // thumb: {
  //   width: 12,
  //   height: 12,
  //   boxShadow: "none",
  // },
  // track: {
  //   borderRadius: 16 / 2,
  //   opacity: 1,
  //   backgroundColor: "white",
  // },

  switchBase: {
    padding: 2,
    color: "#897592",
    "&$checked": {
      transform: "translateX(12px)",
      color: "#897592",
      "& + $track": {
        opacity: 1,
        backgroundColor: "white",
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: "none",
  },
  track: {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: "white",
  },
  checked: {},
  
}))(Switch);

const icons = [
  IoMdFlask,
  ContactSupportIcon,

  IoMdVideocam,
  IoIosColorPalette,
  IoMdPaper,
];

const titles = {
  0: "Productos",
  1: "Contacto",
  2: "Videos",
  3: "Carta de color",
  4: "Signup",
};

const titlesEng = {
  0: "Products",
  1: "Contact",
  2: "Videos",
  3: "Color chart",
  4: "Signup",
};

const dimensions=[
  "Artist Dimension",
  "Color Dimension",
  "Heal Dimension",
  "Balance Dimension",
  "Shine Dimension",
  "Moisturizing Dimension",
  "Design Dimension"




]

export default function NavBar2() {
  // const langContext = useContext(AppContext);
  const [openSales, setOpenSales] = useState(false);
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState(localStorage.getItem("lex"));

  const history = useHistory();

  const handleRoute = (path) => {
    history.push(path);
  };


  const handleClickSales = () => {
    setOpenSales(!openSales);

    // console.log("yoooo");
  };



  useEffect(() => {
    localStorage.setItem("lex", lang);
    // langContext.setengEsp(lang);
    console.log("current lang", lang);
  }, [lang]);

  const handleChange = () => {
    setLang(lang === "falseee" ? "trueee" : "falseee");
  };
  const chooseLang = () => {
    if (chooselll(lang)) {
      const x = titlesEng;
      return x;
    } else {
      const x = titles;
      return x;
    }
  };

  const chooselll = (x) => {
    if (x === "trueee") {
      return true;
    } else if (x === "falseee");
    {
      return false;
    }
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />

      <List className={classes.linkText}>
        {icons.map((Item, index) => {
          return (
           Item===IoMdFlask ? 
           <span>
           <ListItem button onClick={handleClickSales}>
           <ListItemIcon>
             <Item key={index + 35}
                 className={classes.linkText}
                 size="30px"/>
           </ListItemIcon>
           <Typography
               key={index + 532}
               className={classes.typo}
               variant="h4"
               noWrap
             >
            {chooseLang()[index]}
             </Typography>
           {openSales ? <ExpandLess /> : <ExpandMore />}
         </ListItem>
         <Collapse in={openSales} timeout="auto" unmountOnExit>
            {dimensions.map((d) => {
                  return(

                    <List component="div" disablePadding>
                  <Link 
                    href={d.split(" ").join("").toLowerCase()}
                  className={classes.linkText2}>
                    <ListItem button key={d} className={classes.nested}>
                      <ListItemIcon>
                        <BiBadge className={classes.linkText2} />
                      </ListItemIcon>
                      <ListItemText primary={d} />
                    </ListItem>
                  </Link>
     
                  
     
                 
                </List>
                  )
            })}
         </Collapse>
           
         </span>
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           :  













           <ListItem key={index + 5} button index={chooseLang()[index]} >
           <ListItemIcon key={index + 18}>
             {
               <Item
                 key={index + 35}
                 className={classes.navIcon}
                 size="30px"
               />
             }
         
           </ListItemIcon>

           <Link
             href={titlesEng[index].split(" ").join("").toLowerCase()}
             key={chooseLang()[index]}
             className={classes.linkText}
             onClick={() => {
               window.scrollTo(0, 0);
             }}
           >
             <Typography
               key={index + 532}
               className={classes.typo}
               variant="h4"
               noWrap
             >
            {chooseLang()[index]}
             </Typography>
           </Link>
           {/* <ListItemText primary={titles[index]} /> */}
         </ListItem> 
          );
        })}
     {openSales ? null : 
     
     <div className={classes.bottomPush}>
     <Typography>
       <Link className={classes.linkText2}
       href= "https://luis-ascencio-portfolio.firebaseapp.com/"
       target="_blank"
       >
       Created by: Luis Ascencio
       </Link>
     </Typography>
 </div>
     
     }
      </List>
    
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <div style={{ marginLeft: "10px" }}>
            <Link href="/" className={classes.linkText}>
            {/* <img
                  src={tec_italy_logo}
                  style={{ height: "35px",
                marginTop: "2px" }}
                /> */}
            </Link>
          </div>

          {open === true ? null : (
            <Typography component="div" className={classes.lang}>
              <Grid component="label" container alignItems="center" spacing={1}>
                <Grid
                  item
                  style={{
                    color: "white",
                  }}
                >
                  {chooselll(lang) ? "English" : "Español"}
                </Grid>
                <Grid item>
                  <AntSwitch
                    checked={chooselll(lang)}
                    onChange={handleChange}
                    name="checkedC"
                  />
                </Grid>
                {/* <Grid
                  item
                  style={{
                    color: chooselll(lang) ? "#23a6d5" : "white",
                  }}
                >
                  Eng
                </Grid> */}
              </Grid>
            </Typography>
          )}
        </Toolbar>
      </AppBar>
      
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon
                style={{
                  color: "white",
                }}
              />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        {drawer}
       
      </Drawer>
      <Divider />
      
      {/* <Typography>
        <Link
          className={classes.linkText2}
          target="_blank"
          href="https://luis-ascencio-portfolio.firebaseapp.com/"
        >
          <ShakeLittle>created by Luis Ascencio</ShakeLittle>
        </Link>
      </Typography> */}

     
    </div>
  );
}
