/*
 * This file is part of justoverclock/last-tweet.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import app from 'flarum/admin/app';
import registerWidget from '../common/registerWidget';

app.initializers.add('justoverclock/events-countdown', () => {
    registerWidget(app);
    app.extensionData
        .for('justoverclock-events-countdown')
        .registerSetting({
            setting: 'justoverclock-events-countdown.countdownEndTime',
            name: 'countdownEndTime',
            label: app.translator.trans('justoverclock-events-countdown.admin.endTime'),
            help: app.translator.trans('justoverclock-events-countdown.admin.endTime-help'),
            placeholder: 'Dec 24 2021 00:00',
            type: 'text',
        })
        .registerSetting({
            setting: 'justoverclock-events-countdown.event_title',
            name: 'event_title',
            label: app.translator.trans('justoverclock-events-countdown.admin.evTitle'),
            help: app.translator.trans('justoverclock-events-countdown.admin.evTitle-help'),
            placeholder: 'Waiting Christmas!',
            type: 'text',
        });
});
