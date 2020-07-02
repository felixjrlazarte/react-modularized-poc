import React from 'react';
import { withTranslation } from 'react-i18next';

import Typography from '@material-ui/core/Typography';

const Dashboard = ({ t }) => {

  return (
    <div>
      <Typography variant="h6" noWrap>
        {t("dashboard.title")}
      </Typography>
    </div>
  );
}

export default withTranslation()(Dashboard);
