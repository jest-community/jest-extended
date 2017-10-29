export default received => {
    if(received instanceof Object && !(received instanceof Array)) {
        for(var p in received) {
            if(received.hasOwnProperty(p))
                return false;
        }
        return true;
    }
    return received === '' || (received instanceof Array && received.length==0);
};