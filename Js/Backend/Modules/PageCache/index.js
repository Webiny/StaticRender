import React from 'react';
import Webiny from 'webiny';
import Views from './Views/Views';

/**
 * @i18n.namespace StaticRender.Backend.PageCache
 */
class PageCache extends Webiny.App.Module {

    init() {
        this.name = 'PageCache';
        const Menu = Webiny.Ui.Menu;
        const role = 'static-render';

        this.registerMenus(
            <Menu label={Webiny.I18n('System')} icon="icon-tools">
                <Menu label={Webiny.I18n('Static Render')} route="StaticRender.PageCache" role={role}/>
            </Menu>
        );

        this.registerRoutes(
            new Webiny.Route('StaticRender.PageCache', '/static-render/page-cache', Views.PageCacheList, 'Static Render - Page Cache').setRole(role)
        );
    }
}

export default PageCache;