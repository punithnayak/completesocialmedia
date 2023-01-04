import { Application } from "express";

export default (app:Application)=>{
        const routes = () => {
                app.route("/api/v1/");
        };
        routes();
}