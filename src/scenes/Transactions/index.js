import React from 'react';
import { withTranslation } from 'react-i18next';

import Typography from '@material-ui/core/Typography';

const Transactions = ({ t }) => {

  return (
    <div>
      <Typography variant="h6" noWrap>
        {t("transactions.title")}
      </Typography>
    </div>
  );
}

export default withTranslation()(Transactions);
