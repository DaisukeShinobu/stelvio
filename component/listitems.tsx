import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import HomeIcon from "@mui/icons-material/Home";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import GroupsIcon from "@mui/icons-material/Groups";
import LaptopIcon from "@mui/icons-material/Laptop";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import { useRouter } from "next/router";

export const MainListItems = () => {
  const router = useRouter();
  return (
    <React.Fragment>
      <ListItemButton>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="マイページ" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <MenuBookIcon />
        </ListItemIcon>
        <ListItemText
          primary="学習中コース"
          onClick={() => router.push("mypage/learning")}
        />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="学習コース追加" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <LocalParkingIcon />
        </ListItemIcon>
        <ListItemText primary="プラン＆ポイント管理" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <GroupsIcon />
        </ListItemIcon>
        <ListItemText primary="パーソナルコーチ" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <LaptopIcon />
        </ListItemIcon>
        <ListItemText primary="キャリアサポート" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <EmojiPeopleIcon />
        </ListItemIcon>
        <ListItemText primary="お友達紹介" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <ThumbUpAltIcon />
        </ListItemIcon>
        <ListItemText primary="資格取得報告" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <LiveHelpIcon />
        </ListItemIcon>
        <ListItemText primary="よくあるご質問" />
      </ListItemButton>
    </React.Fragment>
  );
};

export const SecondaryListItems = () => {
  return (
    <React.Fragment>
      <ListSubheader component="div" inset>
        Saved reports
      </ListSubheader>
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Current month" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Last quarter" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Year-end sale" />
      </ListItemButton>
    </React.Fragment>
  );
};
