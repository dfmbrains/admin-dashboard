import {
  Avatar,
  Checkbox,
  FormControlLabel,
  Icon,
  IconButton,
  Tooltip,
} from "@mui/material";
import { Box, styled } from "@mui/system";
import { AdminMenu } from "app/components";
import { FlexBetween } from "app/components/FlexBox";
import { H5, Span } from "app/components/Typography";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  addListInBoard,
  addMemberInBoard,
  addNewCardInList,
  deleteMemberFromBoard,
  getAllLabels,
  getAllMembers,
  getBoardById,
} from "app/redux/actions/ScrumBoardActions";
import ScrumBoardContainer from "./ScrumBoardContainer";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
}));

const FlexBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
}));

const StyledAvatar = styled(Avatar)(() => ({
  width: 24,
  height: 24,
  marginLeft: "-8px",
  border: "2px solid white",
}));

const Board = () => {
  const { board = {}, memberList = [] } = {};
  const { id: boardId } = useParams();

  useEffect(() => {
    getBoardById(boardId);
    getAllMembers();
    getAllLabels();
  }, [boardId]);

  const handleAddList = listTitle => {
    if (listTitle !== "") {
      addListInBoard({ boardId, listTitle });
    }
  };

  const handleAddNewCard = cardData => {
    addNewCardInList({ boardId, ...cardData });
  };

  const handleChange = event => {
    let memberId = event.target.value;
    let { members, id } = board;

    if (members.some(member => member.id === memberId)) {
      deleteMemberFromBoard({ boardId: id, memberId });
    } else addMemberInBoard({ boardId: id, memberId });
  };

  let { members = [], title, list = [] } = board;

  return (
    <Container className="scrum-board">
      <FlexBetween flexWrap="wrap" mb={2}>
        <FlexBox gap={1}>
          <Link to="/scrum-board">
            <IconButton>
              <Icon>arrow_back</Icon>
            </IconButton>
          </Link>

          <H5>{title}</H5>

          <IconButton>
            <Icon>star_outline</Icon>
          </IconButton>
        </FlexBox>

        <FlexBox mr={1} position="relative">
          {members.map((member, index) => (
            <Tooltip key={index} title={member.name} fontSize="large">
              <StyledAvatar src={member.avatar} />
            </Tooltip>
          ))}

          <AdminMenu
            horizontalPosition="right"
            shouldCloseOnItemClick={false}
            menuButton={
              <Tooltip title={"Add"} fontSize="large">
                <StyledAvatar sx={{ cursor: "pointer" }}>+</StyledAvatar>
              </Tooltip>
            }
          >
            {memberList.map(user => (
              <FormControlLabel
                sx={{ ml: 0 }}
                key={user.id}
                control={
                  <Checkbox
                    value={user.id}
                    onChange={handleChange}
                    checked={members.some(member => member.id === user.id)}
                  />
                }
                label={
                  <FlexBox gap={1.5}>
                    <Avatar src={user.avatar} sx={{ width: 24, height: 24 }} />
                    <Span>{user.name}</Span>
                  </FlexBox>
                }
              />
            ))}
          </AdminMenu>
        </FlexBox>
      </FlexBetween>

      <Box position="relative">
        <ScrumBoardContainer
          list={list}
          handleAddList={handleAddList}
          handleAddNewCard={handleAddNewCard}
        ></ScrumBoardContainer>
      </Box>
    </Container>
  );
};

export default Board;
