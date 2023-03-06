import path from 'path';
import csvToJson from 'csvtojson';

export default async function handler(req, res) {
  //Find the absolute path of the json directory
  const csvDirectory = path.join(process.cwd(), 'public/data');
  //Read the json data file data.json
  const json = await csvToJson().fromFile(`${csvDirectory}/dataset_small.csv`);
  //Return the content of the data file in json format
  res.status(200).json(json);
}