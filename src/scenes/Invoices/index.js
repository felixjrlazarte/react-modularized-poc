import React from 'react';
import { withTranslation } from 'react-i18next';

import Typography from '@material-ui/core/Typography';

const Invoices = ({ t }) => {

  return (
    <div>
      <Typography variant="h6" noWrap>
        {t("invoices.title")}
      </Typography>
    </div>
  );
}

export default withTranslation()(Invoices);
