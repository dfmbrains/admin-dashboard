import { Box, Grid, TablePagination } from "@mui/material";
import { Breadcrumb } from "app/components";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import ProfileCard1 from "./ProfileCard1";
import { Container } from "./styles";

const UserList3 = () => {
  const [isAlive, setIsAlive] = useState(true);
  const [userList, setUserList] = useState([]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    Axios.get("/api/user/all").then(({ data }) => {
      if (isAlive) setUserList(data);
    });
    return () => setIsAlive(false);
  }, [isAlive]);

  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[
            { name: "Pages", path: "/pages" },
            { name: "User List 3" },
          ]}
        />
      </Box>

      <Grid container spacing={2}>
        <Grid item md={3} sm={12} xs={12}>
          <ProfileCard />
        </Grid>

        <Grid item md={9} sm={12} xs={12}>
          <Grid container spacing={2}>
            {userList
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user, ind) => (
                <Grid key={user.id} item sm={6} xs={12}>
                  <ProfileCard1 user={user} />
                </Grid>
              ))}
          </Grid>

          <Box mt={2}>
            <TablePagination
              page={page}
              sx={{ px: 2 }}
              component="div"
              count={userList.length}
              rowsPerPage={rowsPerPage}
              onPageChange={handleChangePage}
              rowsPerPageOptions={[10, 25, 50]}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserList3;
