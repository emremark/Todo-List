export const locStorage = (function() {

        function addToStorage(item) {
            localStorage.setItem("projekti", JSON.stringify(item));
        }

    return {addToStorage}
})();

