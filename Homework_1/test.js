// if (interval >= 1) {
//     const secindsInMonth = 2592000;
    
//     if (){
    
//     return interval === 1 ? "1 year ago" : ${interval} years ago;

//     interval = Math.floor(seconds / 60); // 1 minute
//     return interval === 1 ? "1 minute ago" : ${interval} minutes ago;

//     interval = Math.floor(seconds / 3600); // 1 hour
//     return interval === 1 ? "1 hour ago" : ${interval} hours ago;
    
//     interval = Math.floor(seconds / secindsInMonth); // 30 days ~ If the condition for years is false, we recalculate the interval for months.
//     return interval === 1 ? "1 month ago" : ${interval} months ago;

//     interval = Math.floor(seconds / 86400); // 1 day
    
//     return interval === 1 ? "1 day ago" : ${interval} days ago;
// } else if(interval >= 7){
//     const weeks = Math.floor(interval / 7);
//     return weeks === 1 ? "1 week ago" : ${weeks} weeks ago;

// }

// // сделать так чтобы была только одна проверка if else
// return interval === 1
//     ? 1 ${intervalUnitsName} a go
//     : ${interval} ${intervalUnitsName}s ago;

// // return seconds < 5 ? "Just now" : ${seconds} seconds ago;
// }
