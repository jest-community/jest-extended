export default expected => {
    if(expected!=null && expected!=undefined){
        if(typeof(expected) === "boolean")
            return true;
    }
    return false;
}