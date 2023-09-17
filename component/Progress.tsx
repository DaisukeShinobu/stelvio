import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const LinearDeterminate: React.FC<{ value: number }> = ({ value }) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    setProgress(Math.min(value, 100)); // 進捗は最大100まで
  }, [value]); // valueの変更ごとに進捗を更新

  return (
    <Box sx={{ width: "10%" }}>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
};

export default LinearDeterminate;
