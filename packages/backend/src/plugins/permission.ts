import { createRouter } from '@backstage/plugin-permission-backend';
import { AuthorizeResult, PolicyDecision } from '@backstage/plugin-permission-common';
import { PermissionPolicy, PolicyQuery } from '@backstage/plugin-permission-node';
import { Router } from 'express';
import { PluginEnvironment } from '../types';
import { BackstageIdentityResponse } from '@backstage/plugin-auth-node';

class TestPermissionPolicy implements PermissionPolicy {

  async handle(_request: PolicyQuery, _user?: BackstageIdentityResponse | undefined): Promise<PolicyDecision> {
    return {
      result: AuthorizeResult.ALLOW
    };
  }

}

export default async function createPlugin(
  env: PluginEnvironment,
): Promise<Router> {
  return await createRouter({
    config: env.config,
    logger: env.logger,
    discovery: env.discovery,
    policy: new TestPermissionPolicy(),
    identity: env.identity
  });
}
