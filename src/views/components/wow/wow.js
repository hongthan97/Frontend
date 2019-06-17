global.WOW = require('wowjs');
var WOW = require('wowjs');
window.WOW = require('wowjs');
window.WOW = new WOW.WOW({
    live: false
});
const Wow = {
    useWow: () => {
        window.WOW.init();
    },
};
export default Wow;