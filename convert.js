const params = process.argv;
if (process.argv.length === 6 && !isNaN(params[2]) && params[4] === 'to' && (((params[3] === 'm' || params[3] === 'cm' || params[3] === 'mm') && (params[5] === 'm' || params[5] === 'cm' || params[5] === 'mm')) || ((params[3] === 'kg' || params[3] === 'g') && (params[5] === 'kg' || params[5] === 'g')))) {
    let multiplier = 1;
    params[3] === 'm' && params[5] === 'cm' ? multiplier = 100 : params[3] === 'm' && params[5] === 'mm' ? multiplier = 1000 : params[3] === 'cm' && params[5] === 'm' ? multiplier = 0.01 : params[3] === 'cm' && params[5] === 'mm' ? multiplier = 10 : params[3] === 'mm' && params[5] === 'm' ? multiplier = 0.001 : params[3] === 'mm' && params[5] === 'cm' ? multiplier = 0.1 : params[3] === 'kg' && params[5] === 'g' ? multiplier = 1000 : params[3] === 'g' && params[5] === 'kg' ? multiplier = 0.001 : multiplier = 1;
    console.log(params[2] + ' ' + params[3] + ' are ' + params[2] * multiplier + ' ' + params[5]);
} else {
    console.log('Invalid parameters');
}