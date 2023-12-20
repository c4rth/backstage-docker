import { CatalogClient } from '@backstage/catalog-client';
import { ScmIntegrations } from '@backstage/integration';
import { createBuiltinActions, createRouter } from '@backstage/plugin-scaffolder-backend';
import { Router } from 'express';
import type { PluginEnvironment } from '../types';
import {
  cloneAzureRepoAction,
  pushAzureRepoAction,
  pullRequestAzureRepoAction,
} from "@parfuemerie-douglas/scaffolder-backend-module-azure-repositories";

export default async function createPlugin(
  env: PluginEnvironment,
): Promise<Router> {
  const catalogClient = new CatalogClient({
    discoveryApi: env.discovery,
  });

  const scmIntegrations = ScmIntegrations.fromConfig(env.config);

  const builtinActions = createBuiltinActions({
    reader: env.reader,
    integrations: scmIntegrations,
    catalogClient: catalogClient,
    config: env.config,
  })

  const actions = [
    ...builtinActions,
    cloneAzureRepoAction({ integrations: scmIntegrations }),
    pushAzureRepoAction({ integrations: scmIntegrations, config: env.config }),
    pullRequestAzureRepoAction({ integrations: scmIntegrations })
  ];

  return await createRouter({
    actions: actions,
    logger: env.logger,
    config: env.config,
    database: env.database,
    reader: env.reader,
    catalogClient,
    identity: env.identity,
    permissions: env.permissions,
  });
}
