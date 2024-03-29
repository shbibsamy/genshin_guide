export default {
    methods: {
        htmlSanitiser: function(text) {
            var map = {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#039;'
            };
        return text.replace(/[&<>"']/g, function(m) { return map[m]; });
        }
    }
};