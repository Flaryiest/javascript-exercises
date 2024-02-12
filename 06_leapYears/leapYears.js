const leapYears = function(currentYear) {
    if (currentYear % 4 == 0) {
        if (currentYear % 100 == 0) {
            if (currentYear % 400 == 0) {
                return true
            
            }
            else {
                return false
            }
        } 
        else {
            return true
        }
    }
    return false
};

// Do not edit below this line
module.exports = leapYears;
