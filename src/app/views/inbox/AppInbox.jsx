import { useMediaQuery } from "@mui/material";
import { Box, styled, useTheme } from "@mui/system";
import { AdminSidenav } from "app/components";
import { useEffect, useState } from "react";
import InboxMessageList from "./InboxMessagList";
import { getAllMessage } from "./InboxService";
import InboxSidenav from "./InboxSidenav";
import InboxTopBar from "./InboxTopbar";
import AdminSidenavContainer from "app/components/AdminSidenav/AdminSidenavContainer";
import AdminSidenavContent from "app/components/AdminSidenav/AdminSidenavContent";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  display: "flex",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
}));

const AppInbox = () => {
  const [isAlive, setIsAlive] = useState(true);
  const [open, setOpen] = useState(false);
  const [masterCheckbox, setMasterCheckbox] = useState(false);
  const [messageList, setMessageList] = useState([]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleSidenav = () => {
    setOpen(!open);
  };

  const handleMasterCheckbox = event => {
    let temp = messageList;
    let isChecked = event.target.checked;
    if (isChecked) {
      temp.map(message => {
        message.selected = true;
        return message;
      });
    } else {
      temp.map(message => {
        message.selected = false;
        return message;
      });
    }
    setMessageList(temp);
    setMasterCheckbox(isChecked);
  };

  const handleCheckboxSelection = (event, index) => {
    event.persist();
    let temp = messageList;
    temp[index].selected = event.target.checked;
    setMessageList([...temp]);
  };

  useEffect(() => {
    if (isMobile) setOpen(false);
  }, [isMobile]);

  useEffect(() => {
    getAllMessage().then(({ data }) => {
      if (isAlive) setMessageList(data);
    });
  }, [isAlive]);

  useEffect(() => {
    return () => setIsAlive(false);
  }, []);

  return (
    <Container>
      <Box width="100%">
        <AdminSidenavContainer>
          <AdminSidenav width="220px" toggleSidenav={toggleSidenav} open={open}>
            <InboxSidenav />
          </AdminSidenav>

          <AdminSidenavContent>
            <InboxTopBar
              toggleSidenav={toggleSidenav}
              masterCheckbox={masterCheckbox}
              handleMasterCheckbox={handleMasterCheckbox}
            />

            <InboxMessageList
              messageList={messageList}
              handleCheckboxSelection={handleCheckboxSelection}
            />
          </AdminSidenavContent>
        </AdminSidenavContainer>
      </Box>
    </Container>
  );
};

export default AppInbox;
