
export function useGif() {

    const addGif = async (data) => {
        try {
            const response = await fetch(
                `http://localhost:5600/gif/item`,
                {
                    method: 'POST',
                    body: data,
                }
            );

            return ('gif added to de database');
        } catch (error) {
            console.log(error);
        };
    };


    return {
        addGif,
    };
};