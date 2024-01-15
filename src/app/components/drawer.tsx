import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import AppsIcon from '@mui/icons-material/Apps';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Tooltip, ListSubheader } from '@mui/material';
import { basePath } from "../../../next.config";
import AnchorLink from 'react-anchor-link-smooth-scroll';
const BASE_PATH = basePath ? basePath : "";

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  // padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  // display: 'flex',
  // alignItems: 'center',
  // padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  // justifyContent: 'flex-end',
}));

const CategorizedMenu = (props: { menuList: Array<any>, categoryName?: string }) => {
  const { menuList, categoryName } = props;
  return (
    <React.Fragment>
      <List sx={{ color: "#D3D8DD" }}
        subheader={
          categoryName &&
          <ListSubheader component="div" sx={{ bgcolor: "transparent", color: "#D3D8DD", fontWeight: 600 }}>
            {categoryName}
          </ListSubheader>
        }>
        {menuList.map((menu) => (
          <Tooltip key={menu.text} title={menu.description} placement="right-end" arrow>
            <ListItem disablePadding onClick={menu.onClick}>
              <ListItemButton>
                <ListItemIcon sx={{ color: "#D3D8DD" }}>
                  {<menu.icon />}
                </ListItemIcon>
                <ListItemText primary={menu.text} sx={{ ...(menu.selected && { color: "#669DF6" }) }} />
                <AnchorLink id={`${menu.anchor}_link`} href={`#${menu.anchor}`} offset="72" />
              </ListItemButton>
            </ListItem>
          </Tooltip>
        ))}
      </List>
      <Divider sx={{ bgcolor: "rgba(255,255,255,.1)" }} />
    </React.Fragment>
  );

};

export default function Drawer(props: { children?: React.ReactNode }) {
  const { children } = props;
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const categorizedMenuList: Array<{ menuList: Array<any>, categoryName?: string }> = [
    {
      menuList:
        [
          {
            text: 'プロフィール', icon: AccountBoxIcon, onClick: () => document.getElementById("profile_link")?.click(), anchor: 'profile'
          },
          {
            text: 'アウトプット', icon: RssFeedIcon, onClick: () => document.getElementById("output_link")?.click(), anchor: 'output'
          },
          {
            text: 'アプリ', icon: AppsIcon, onClick: () => document.getElementById("application_link")?.click(), anchor: 'application'
          },
          {
            text: 'ライブラリ', icon: ViewModuleIcon, onClick: () => document.getElementById("library_link")?.click(), anchor: 'library'
          },
          {
            text: 'その他', icon: MoreVertIcon, onClick: () => document.getElementById("other_link")?.click(), anchor: 'other'
          }
        ],
      categoryName: 'メニュー'
    },
  ];
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap component="div"
            sx={{ ...(open && { display: 'none' }) }}>
            Shinya Kawakami&apos;s ポートフォリオ
          </Typography>

        </Toolbar>
      </AppBar>
      <MuiDrawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            border: "none",
            bgcolor: "#27415D"
          }
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{ bgcolor: "#051E34", color: "#D3D8DD" }}>

          <List sx={{ color: "#D3D8DD" }}>
            <ListItem disablePadding onClick={() => { }}>
              <ListItemButton>
                <ListItemIcon sx={{ color: "#D3D8DD" }}>
                  <Box component="img" sx={{ height: "28px" }} alt="logo" src={`${BASE_PATH}/sjnya.jpg`} />
                </ListItemIcon>
                <Typography variant="h6" noWrap component="div">
                  ポートフォリオ
                </Typography>
              </ListItemButton>
            </ListItem>
          </List>

          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            position: 'absolute',
            pointerEvents: 'none',
            top: 0,
            width: 1,
            height: 64,
          }}>
            <IconButton onClick={handleDrawerClose} sx={{ color: "#D3D8DD", pointerEvents: 'auto', }}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </Box>

        </DrawerHeader>
        <Divider sx={{ bgcolor: "rgba(255,255,255,.1)" }} />
        {categorizedMenuList.map(categorizedMenu => <CategorizedMenu key={`CategorizedMenu_${categorizedMenu.categoryName}`} menuList={categorizedMenu.menuList} categoryName={categorizedMenu.categoryName} />)}
      </MuiDrawer>
      <Main open={open}>
        <DrawerHeader />
        <div>{children}</div>
      </Main>
    </Box>
  );
}