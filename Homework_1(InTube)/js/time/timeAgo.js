// Version 0.2.
import { secondsInMinute, secondsInHour, secondsInDay, secondsInWeek, secondsInMonth, secondsInYear } from './timeIntervals.js';

export function timeAgo(date) {
    const now = new Date();
    const varianceSeconds = Math.floor((now - date) / 1000);
    
    let interval = 0;
    let intervalUnitsName = '';

    if (varianceSeconds < secondsInMinute) {
        interval = varianceSeconds < 5 ? 0 : varianceSeconds;
        intervalUnitsName = 'second';
    } else {
        intervalUnitsName = varianceSeconds < secondsInHour ? 'minute' :
            varianceSeconds < secondsInDay ? 'hour' :
            varianceSeconds < secondsInWeek ? 'day' :
            varianceSeconds < secondsInMonth ? 'week' :
            varianceSeconds < secondsInYear ? 'month' : 'year';

        interval = varianceSeconds < secondsInHour ? Math.floor(varianceSeconds / secondsInMinute) :
            varianceSeconds < secondsInDay ? Math.floor(varianceSeconds / secondsInHour) :
            varianceSeconds < secondsInWeek ? Math.floor(varianceSeconds / secondsInDay) :
            varianceSeconds < secondsInMonth ? Math.floor(varianceSeconds / secondsInWeek) :
            varianceSeconds < secondsInYear ? Math.floor(varianceSeconds / secondsInMonth) : Math.floor(varianceSeconds / secondsInYear);
    }

    return interval === 1
        ? `1 ${intervalUnitsName} ago`
        : `${interval} ${intervalUnitsName}s ago`;
}

// ..........................
// Version 0.1.

// function timeAgo(date) {
//   const now = new Date();
//   const seconds = Math.floor((now - date) / 1000); // How many seconds elapsed between the two times.
//   let interval = Math.floor(seconds / 31536000); // divide the number of seconds by the number of seconds in a year to find out how many full years have passed

//   if (interval >= 1) {
//     return interval === 1 ? "1 year ago" : `${interval} years ago`;
//   }

//   const secindsInMonth = 2592000;
//   interval = Math.floor(seconds / secindsInMonth); // 30 days ~ If the condition for years is false, we recalculate the interval for months.
//   if (interval >= 1) {
//     return interval === 1 ? "1 month ago" : `${interval} months ago`;
//   }

//   interval = Math.floor(seconds / 86400); // 1 day
//   if (interval >= 7) {
//     const weeks = Math.floor(interval / 7);
//     return weeks === 1 ? "1 week ago" : `${weeks} weeks ago`;
//   }

//   if (interval >= 1) {
//     return interval === 1 ? "1 day ago" : `${interval} days ago`;
//   }

//   interval = Math.floor(seconds / 3600); // 1 hour
//   if (interval >= 1) {
//     return interval === 1 ? "1 hour ago" : `${interval} hours ago`;
//   }

//   interval = Math.floor(seconds / 60); // 1 minute
//   if (interval >= 1) {
//     return interval === 1 ? "1 minute ago" : `${interval} minutes ago`;
//   }
//   // сделать так чтобы была только одна проверка if else
//   return interval === 1
//     ? `1 ${intervalUnitsName} a go`
//     : `${interval} ${intervalUnitsName}s ago`;

//   // return seconds < 5 ? "Just now" : `${seconds} seconds ago`;
// }

