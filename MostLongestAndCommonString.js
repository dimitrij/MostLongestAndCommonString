     
        function MostLongenstAndCommonString(str1, str2){

            const myMatrix = Array(str2.length + 1).fill(null).map(() => Array(str1.length + 1).fill(null));

            for( let columnIndex = 0; columnIndex <= str1.length; columnIndex +=1){
                myMatrix[0][columnIndex] = 0;
            }

            for( let rowIndex = 0; rowIndex <= str2.length; rowIndex +=1){
                myMatrix[0][rowIndex] = 0;
            }

            for(let rowIndex=1; rowIndex <= str2.length; rowIndex +=1){
                for(let columnIndex = 1; columnIndex <=str1.length; columnIndex +=1){
                    if(str1[columnIndex -1] === str2[rowIndex -1]){
                        myMatrix[rowIndex][columnIndex] = myMatrix[rowIndex-1][columnIndex - 1] + 1;
                    }
                    else{
                        myMatrix[rowIndex][columnIndex] = Math.max(
                            myMatrix[rowIndex-1][columnIndex],
                            myMatrix[rowIndex][columnIndex -1],
                        );
                        }
                    }
                }

                if(!myMatrix[str2.length][str1.length]){
                    return[''];
                }

                const longestString = [];
                let columnIndex = str1.length;
                let rowIndex = str2.length;

                while(columnIndex > 0 || rowIndex >0)
                {
                    if(str1[columnIndex -1] === str2[rowIndex -1]){
                        longestString.unshift(str1[columnIndex -1]);
                        columnIndex -= 1;
                        rowIndex -= 1;
                    }
                    else if(myMatrix[rowIndex][columnIndex] === myMatrix[rowIndex][columnIndex-1]){
                        columnIndex -=1;
                    }
                    else{
                        rowIndex -=1;
                    }

                }

            return longestString;
        }
