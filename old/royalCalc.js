const basicCalc = (req,res)=>{
    let no1 = parseInt(req.body.no1)
    let no2 = parseInt(req.body.no2)
    let ans = no1 + no2
    res.end(ans)
    
}
module.exports.calc = basicCalc
