
import { Storage } from 'aws-amplify';

export const getImage = (fileName) => {
    Storage.get(fileName)
    .then(result => {

        console.log(result)
        return result
    })
    .catch(err => {


        console.log(err)
        return err
    });
    
};