let handler = m => m

handler.all = async function (m) {
    let user = global.db.data.users[m.sender]
    if ((user.money * 1) > 9999999999999999999999999999999999999999999999999999999999999999999999999999999999) {
        user.money = 9999999999999999999999999999999999999999999999999999999999999999999999999999999999
    } else if ((user.money * 1) < 0) {
        user.money = 0
        }
    if ((user.healt * 1) > 9999999999999999999999999999999999999999999999999999999999999999999999999999999999) {
        user.healt = 9999999999999999999999999999999999999999999999999999999999999999999999999999999999
    } else if ((user.healt * 1) < 0) {
        user.healt = 0
       }
    if ((user.exp * 1) > 9999999999999999999999999999999999999999999999999999999999999999999999999999999999) {
         user.exp = 9999999999999999999999999999999999999999999999999999999999999999999999999999999999
    } else if ((user.exp * 1) < 0) {
         user.exp = 0
       }
    if ((user.limit * 1) > 9999999999999999999999999999999999999999999999999999999999999999999999999999999999) {
         user.limit = 9999999999999999999999999999999999999999999999999999999999999999999999999999999999
    } else if ((user.limit * 1) < 0) {
         user.limit = 0
    }
}

module.exports = handler