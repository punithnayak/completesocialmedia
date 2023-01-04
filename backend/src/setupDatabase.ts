import mongoose from "mongoose";
import { config } from "./config";
export default () => {
	const connect = () => {
		mongoose.connect(`${config.DataBase_URL}`)
                .then(() => {
			console.log("Successfully connected to database")
	})
	.catch((error) => {
		console.log(error);
		return process.exit(1); 
	});
};
	connect();
	mongoose.connection.on('disconnect', connect);
};
