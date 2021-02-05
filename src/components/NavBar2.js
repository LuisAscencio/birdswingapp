import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useAuth } from "../contexts/AuthContext"
import logo from '../band s logo.png'


import {
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  List,
  Typography,
  IconButton,
  ListItem,
  ListItemIcon,
  Link,
  Divider,
} from "@material-ui/core";

import { 
  IoIosHome,
  IoIosPersonAdd,
  IoMdLogOut
  } from "react-icons/io";
import DescriptionIcon from '@material-ui/icons/Description';




import { withStyles } from "@material-ui/core/styles";

import Switch from "@material-ui/core/Switch";

import { useHistory } from "react-router-dom";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    backgroundColor: "#0A4F39",
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
    backgroundColor: "#0A4F39",
    fontFamily: "Lusitana, Georgia,serif",
   
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
    fontFamily: "Lusitana, Georgia,serif",
    color: "white",
  },

  lang: {
    fontFamily: "Lusitana, Georgia,serif",
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
  IoIosHome,
  DescriptionIcon,

  IoIosPersonAdd,
  IoMdLogOut,

];

const titles = {
  0: "Home",
  1: "Docs",
  2: "Update Profile",
  3: "Logout",
  
};

const titlesEng = {
  0: "Home",
  1: "Docs",
  2: "Update Profile",
  3: "Logout",
  
};



export default function NavBar2() {
  // const langContext = useContext(AppContext);
  const [openSales, setOpenSales] = useState(false);
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState(localStorage.getItem("lex"));
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory();

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }






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
           Item===IoMdLogOut ? 
    
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

      
          <Typography
            key={index + 532}
            className={classes.typo}
            variant="h6"
            noWrap
            onClick={handleLogout}
          >
         {chooseLang()[index]}
          </Typography>
       
        {/* <ListItemText primary={titles[index]} /> */}
      </ListItem> 
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
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
             href={
               titlesEng[index].split(" ").join("").toLowerCase()==="home" ? '/' : 
               titlesEng[index].split(" ").join("").toLowerCase() }
             key={chooseLang()[index]}
             className={classes.linkText}
             onClick={() => {
               window.scrollTo(0, 0);
             }}
           >
             <Typography
               key={index + 532}
               className={classes.typo}
               variant="h6"
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
            <img
                  src={logo}
                  style={{ height: "35px",
                marginTop: "2px" }}
                />
              
               
           
                
            </Link>
          </div>

          {open === true ? null : (
            <Typography component="div" className={classes.lang}>
            
            <span style={{marginTop: "30px"}}>Bird and Swing</span>
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
