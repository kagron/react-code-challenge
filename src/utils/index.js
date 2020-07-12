/**
 * Util method to query TVMaze's public API
 * @param {String} searchTerm - Search term to pass onto TVMaze
 * @returns {Array} array of shows
 */
export const getTVShowNames = async (searchTerm) => {
    /**
     * Part 1: To solve this challenge, write an HTTP GET method to retrieve information from a TV database.
     * Query
     */

    // Normally I would put this in an environment variable
    const url = `http://api.tvmaze.com/search/shows?q=${encodeURIComponent(searchTerm)}`;
    const response = await fetch(url);
    if (response.ok) {
        /**
         * Store each show meeting criteria
         */
        const shows = await response.json();
        /**
         * Sort
         */
        shows.sort((a, b) => {
            const aName = a.show.name.toUpperCase();
            const bName = b.show.name.toUpperCase();
            if (aName < bName) {
                return -1;
            }
            if (aName > bName) {
                return 1;
            }
            return 0;
        });
        /**
         * Print to the console the sorted TV Show Names
         */
        console.log(shows.map((showObj) => showObj.show.name).join(' '));
        return shows;
    } else {
        console.error(response);
        throw new Error('There was a problem retrieving your shows');
    }
};
