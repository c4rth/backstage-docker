# Modified

## Search
add PgSearchEngine (search engin for PostgreSQL)
- Update `packages\backend\src\plugins\search.ts`
    ```
    ...
    import {PgSearchEngine } from '@backstage/plugin-search-backend-module-pg';
    ...
    const searchEngine = (await PgSearchEngine.supported(env.database))
        ? await PgSearchEngine.fromConfig(env.config, { database: env.database })
        : new LunrSearchEngine({ logger: env.logger });
    ```

## Theme
- Add `packages\app\src\cartThemes.tsx`
- Update `packages\app\src\App.tsx`

## Plugin Shortcuts https://www.npmjs.com/package/@backstage/plugin-shortcuts
add plugin @backstage/plugin-shortcuts
- `yarn add --cwd packages/app @backstage/plugin-shortcuts`
- Add `packages\app\src\plugins.ts`
- Update `packages\app\src\App.tsx`
    ```
    ...
    import * as plugins from './plugins';
    ...
    const app = createApp({
        apis,
        plugins: Object.values(plugins),
        ...
    ```
- Update `packages\app\src\components\Root\Root.tsx`
    ```
    ...
    import { Shortcuts } from '@backstage/plugin-shortcuts';
    ...
    export const Root = ({ children }: PropsWithChildren<{}>) => (
        ...
        </SidebarGroup>
        <SidebarSpace />
        <Shortcuts />
        <SidebarDivider />
        <SidebarGroup
            label="Settings"
        ...
    ```

## Plugin Announcements
add plugin @k-phoen/backstage-plugin-announcements-backend
- `yarn add --cwd packages/backend @k-phoen/backstage-plugin-announcements-backend`
- Add `packages\backend\src\plugins\announcements.ts`
- Update `packages\backend\src\index.ts`
    ```
    import announcements from './plugins/announcements';

    // ...
    async function main() {
    // ...
    const announcementsEnv = useHotMemoize(module, () => createEnv('announcements'));

    const apiRouter = Router();
    apiRouter.use('/announcements', await announcements(announcementsEnv));
    // ...
    }
    ```
add plugin @k-phoen/backstage-plugin-announcements
- `yarn add --cwd packages/app @k-phoen/backstage-plugin-announcements`
- Update `packages\app\src\App.tsx`
    ```
    ...
    import { AnnouncementsPage } from '@k-phoen/backstage-plugin-announcements';
    ...
    const AppRoutes = () => (
    <FlatRoutes>
        // ...
        <Route path="/announcements" element={<AnnouncementsPage />} />
        // ...
    </FlatRoutes>
    );
    ```
- Update `packages\app\src\components\Root\Root.tsx`
    ```
    import AnnouncementIcon from '@material-ui/icons/Announcement';
    ...
    <SidebarItem icon={AnnouncementIcon} to="announcements" text="Announcements" />
    ...
    ```

## Plugin Home: https://backstage.io/docs/getting-started/homepage/
- `yarn add --cwd packages/app @backstage/plugin-home`
- Create `packages\app\src\components\home\HomePage.tsx`
- Update `packages\app\src\App.tsx`
- Update `packages\app\src\components\Root\Root.tsx`

## Plugin Grafana: https://github.com/K-Phoen/backstage-plugin-grafana
- `yarn add --cwd packages/app @k-phoen/backstage-plugin-grafana`