let values = [23, 24, 53, 53, 34, 23, 54, 32, 11, 45, 77, 3, 32, 22];
        let sum = 0;
        for (let i = 0; i < values.length; i++) {
            sum += values[i];
        }
        let average = sum / values.length;
        let greaterMsg = " ";
        for (let i = 0; i < values.length; i++) {
            if (values[i] > average) {
                greaterMsg += values[i]; 
                if (i < values.length) {
                    greaterMsg += ", ";
                }
            }
        }
        let lessMsg = " ";
        for (let i = 0; i < values.length; i++) {
            if (values[i] < average) {
                lessMsg += values[i] + " ";
                if (i < values.length) {
                lessMsg += ", ";
                }
            }
        }
        console.log("Media: " + average);
        console.log("Menores: " + lessMsg);
        console.log("Mayores: " + greaterMsg);