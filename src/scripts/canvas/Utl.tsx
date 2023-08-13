
class Utl {
    static isSmartPhone() {
        if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
            return true;
        } else {
            return false;
        }
    }
}

export default Utl