/**
 * NOVIUS OS - Web OS for digital communication
 *
 * @copyright  2011 Novius
 * @license    GNU Affero General Public License v3 or (at your option) any later version
 *             http://www.gnu.org/licenses/agpl-3.0.html
 * @link http://www.novius-os.org
 */

define(
    ['jquery-nos-appdesk'],
    function($) {
        "use strict";
        return function(appDesk) {
            log('link_pick', appDesk);
            // Remove all primary actions
            $.each(appDesk.actions, function() {
                this.primary = false;
            });

            // Add "pick" as unique primary action
            appDesk.appdesk.grid.columns.actions.actions.unshift('pick');

            return {
                actions : {
                    pick : {
                        label : appDesk.i18n('Pick'),
                        icon : 'check',
                        text : true,
                        primary : true,
                        action : {
                            action : 'dialogPick',
                            event : 'select_page'
                        }
                    }
                }
            };
        };
    });