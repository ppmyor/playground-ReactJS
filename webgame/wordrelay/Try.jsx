import React, { memo } from "react";

const Try = memo(({ tryInfo, index }) => {
  return (
    <li>
      <div>{index}번째 이어가고 있습니다!</div>
      <div>
        {tryInfo.prevWord} : {tryInfo.userAnswer}
      </div>
    </li>
  );
});

export default Try;
