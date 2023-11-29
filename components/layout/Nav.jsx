'use client';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import Link from 'next/link';
import { useRef, useState } from 'react';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
const navLink = 'px-4 py-3 h-full hover:cursor-pointer hover:bg-sky-900 duration-150 ';

const primaryBgColor = 'bg-sky-700';
const primaryColor = 'text-sky-100';
const whiteColor = 'text-sky-100';
const secondaryColor = 'text-sky-700';


function Nav({ openSidebar }) {
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="flex">
      <div
        className={` ${openSidebar ? " w-52" : "w-20 "
          } bg-dark-purple h-screen p-5  pt-8 relative duration-300 border-2`}

      // className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
      // border-2 rounded-full  ${!open && "rotate-180"}`}

      >
        <List
        
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Nested List Items
            </ListSubheader>
          }
        >
          <ListItemButton>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Sent mail" className={`${!openSidebar && "hidden"} origin-left duration-200`} />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItemButton>

          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText  primary="Inbox" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </div>
    </div>
  );
}


const Menu = () => {
  return (
    <div>

    </div>
  );
};

export default Nav;
