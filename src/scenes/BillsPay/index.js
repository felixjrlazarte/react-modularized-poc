import React from 'react';
import { withTranslation } from 'react-i18next';

import Typography from '@material-ui/core/Typography';

const BillsPay = ({ t }) => {

  return (
    <div>
      <Typography variant="h6" noWrap>
        {t("billsPay.title")}
      </Typography>
    </div>
  );
}

export default withTranslation()(BillsPay);
