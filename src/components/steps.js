import React, { Fragment, memo } from 'react';

const Steps = () => {

  return (
    <Fragment>
      <div className="col-md-8 main">
              <h2>Rooms & Rates</h2>
              <p className="subtitle">Plan your perfect stay at our hotel</p>
              <img src="images/cocos/wizard_1.png" width="480" className="wizard" alt="steps"/>
          </div>
      <div className="col-md-4 sidebar-header"></div>
    </Fragment>
  );
}

export default memo(Steps);