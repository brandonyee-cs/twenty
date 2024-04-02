import { ConfigService } from '@nestjs/config';

import * as fs from 'fs';
import * as path from 'path';

import { EnvironmentService } from 'src/engine/integrations/environment/environment.service';

const environmentService = new EnvironmentService(new ConfigService());

export const generateFrontConfig = (): void => {
  const configObject = {
    window: {
      _env_: {
        REACT_APP_SERVER_BASE_URL: environmentService.get('SERVER_URL'),
      },
    },
  };

  const configString = `window._env_ = ${JSON.stringify(
    configObject.window._env_,
    null,
    2,
  )};`;

  const distPath = path.join(__dirname, '../..', 'front');

  if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath, { recursive: true });
  }

  fs.writeFileSync(path.join(distPath, 'env-config.js'), configString, 'utf8');
};
