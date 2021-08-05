import Widgets from 'flarum/extensions/afrux-forum-widgets-core/common/extend/Widgets';

import EventsCountDown from './components/EventsCountDown';

export default function (app) {
    new Widgets()
        .add({
            key: 'eventsCountdoen',
            component: EventsCountDown,
            isDisabled: false,
            isUnique: true,
            placement: 'end',
            position: 1,
        })
        .extend(app, 'justoverclock-events-countdown');
}
