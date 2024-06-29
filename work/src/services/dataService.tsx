export const fetchAgricultureData = async () => {
    const response = await fetch('./dataset.json');
    const data = await response.json();
    
    // Preprocess data: replace all missing values with 0
    const processedData = data.map((row: any) => {
        Object.keys(row).forEach((key) => {
            if (row[key] === null || row[key] === undefined) {
                row[key] = 0;
            }
        });
        return row;
    });

    return processedData;
};