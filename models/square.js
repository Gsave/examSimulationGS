class Square{
    static string_square(s){
        var ris
        console.log(typeof s)
        if( (typeof s) == "string"){
            ris = Math.pow(s.length , 2)
        }else{
            ris = -1
        }
        return ris
    }
};

module.exports = Square;