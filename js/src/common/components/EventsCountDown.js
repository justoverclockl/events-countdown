/*
 * This file is part of justoverclock/last-tweet.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import app from 'flarum/forum/app';
import Widget from 'flarum/extensions/afrux-forum-widgets-core/common/components/Widget';

export default class EventsCountDown extends Widget {
    oncreate(vnode) {
        var deadline = app.forum.attribute('countdownEndTime');
        function time_remaining(endtime) {
            var t = Date.parse(endtime) - Date.parse(new Date());
            var seconds = Math.floor((t / 1000) % 60);
            var minutes = Math.floor((t / 1000 / 60) % 60);
            var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
            var days = Math.floor(t / (1000 * 60 * 60 * 24));
            return { total: t, days: days, hours: hours, minutes: minutes, seconds: seconds };
        }
        function run_clock(id, endtime) {
            var clock = document.getElementById(id);

            // get spans where our clock numbers are held
            var days_span = clock.querySelector('.days');
            var hours_span = clock.querySelector('.hours');
            var minutes_span = clock.querySelector('.minutes');
            var seconds_span = clock.querySelector('.seconds');

            function update_clock() {
                var t = time_remaining(endtime);

                // update the numbers in each part of the clock
                days_span.innerHTML = t.days;
                hours_span.innerHTML = ('0' + t.hours).slice(-2);
                minutes_span.innerHTML = ('0' + t.minutes).slice(-2);
                seconds_span.innerHTML = ('0' + t.seconds).slice(-2);

                if (t.total < 0) {
                    clearInterval(timeinterval);
                    if (document.getElementById('titleEvent')) {
                      var elem = document.getElementById('titleEvent');
                      elem.parentNode.removeChild(elem);
                    }
                    var finishText = app.translator.trans('justoverclock-events-countdown.forum.endDateText');
                    var finishDiv = document.getElementById('clockdiv');
                    finishDiv.innerHTML = '<h1 class="letterpress">' + finishText + '</h1>';
                }
            }
            update_clock();
            var timeinterval = setInterval(update_clock, 1000);
        }
        run_clock('clockdiv', deadline);
    }

    className() {
        return 'EventsCountDown-widget AfruxWidgets-Widget--flat';
    }

    icon() {
        // Widget icon.
        return 'fas fa-stopwatch-20';
    }

    content() {
        const wgDays = app.translator.trans('justoverclock-events-countdown.forum.days');
        const wgHours = app.translator.trans('justoverclock-events-countdown.forum.hours');
        const wgMinutes = app.translator.trans('justoverclock-events-countdown.forum.minutes');
        const wgSeconds = app.translator.trans('justoverclock-events-countdown.forum.seconds');
        const wgEvents = app.forum.attribute('event_title') || 'The new "event" is near!! We start in...';
        const fontAwIcon = app.forum.attribute('fontawesome_events_icon') || 'fas fa-bullhorn';
        return (
            <div class="countdown-container">
                <h2 class="event-text" id="titleEvent"><i class={fontAwIcon + " " + 'fontawicon'}></i>{wgEvents}</h2>
                <div id="clockdiv">
                    <div class="cntdwn-widget">
                        <span class="days"></span>
                        <div class="smalltext">{wgDays}</div>
                    </div>
                    <div class="cntdwn-widget">
                        <span class="hours"></span>
                        <div class="smalltext">{wgHours}</div>
                    </div>
                    <div class="cntdwn-widget">
                        <span class="minutes"></span>
                        <div class="smalltext">{wgMinutes}</div>
                    </div>
                    <div class="cntdwn-widget">
                        <span class="seconds"></span>
                        <div class="smalltext">{wgSeconds}</div>
                    </div>
                </div>
            </div>
        );
    }
}
