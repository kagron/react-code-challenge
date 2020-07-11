import { getTVShowNames } from './';

global.fetch = jest.fn(() =>
    Promise.resolve({
        ok: true,
        json: () => Promise.resolve([])
    })
);

global.console = {
    log: jest.fn(() => null),
    error: jest.fn(() => null)
};

const mockJsonReturn = (retValue, isOk = true) =>
    Promise.resolve({
        ok: isOk,
        json: () => Promise.resolve(retValue)
    });

describe('getTVShowNames()', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    describe('completes successfully', () => {
        test('when given a search term of superman but no results', async () => {
            const searchTerm = 'superman';
            global.fetch.mockImplementationOnce(() => mockJsonReturn([]));
            const response = await getTVShowNames(searchTerm);
            expect(response).toEqual([]);
            // Make sure we call console.log for the code challenge
            expect(console.log).toHaveBeenCalled();
        });

        test('when given a search term of superman with 1 results', async () => {
            const searchTerm = 'superman';
            global.fetch.mockImplementationOnce(() =>
                mockJsonReturn([
                    {
                        show: {
                            name: 'Superman'
                        }
                    }
                ])
            );
            const response = await getTVShowNames(searchTerm);
            expect(response).toMatchSnapshot();
            // Make sure we call console.log for the code challenge
            expect(console.log).toHaveBeenCalled();
        });

        test('when given a search term of superman but 3 results sorted properly', async () => {
            const searchTerm = 'superman';
            global.fetch.mockImplementationOnce(() =>
                mockJsonReturn([
                    {
                        show: {
                            name: 'Superman'
                        }
                    },
                    {
                        show: {
                            name: 'A Superman'
                        }
                    },
                    {
                        show: {
                            name: 'The Superman'
                        }
                    }
                ])
            );
            const response = await getTVShowNames(searchTerm);
            expect(response).toMatchSnapshot();
            // Make sure we call console.log for the code challenge
            expect(console.log).toHaveBeenCalled();
        });
    });

    describe('throws an error', () => {
        test('when the response is not ok', async () => {
            const searchTerm = 'superman';
            global.fetch.mockImplementationOnce(() => mockJsonReturn([], false));
            try {
                const response = await getTVShowNames(searchTerm);
            } catch (error) {
                expect(error.toString()).toMatch('Error: There was a problem retrieving your shows');
            }
            expect(console.error).toHaveBeenCalled();
        });
    });
});
